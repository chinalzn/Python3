# -*- coding: utf-8
import logging
import time
import urllib2
from bs4 import BeautifulSoup
import requests
from lxml import etree
from models import RoughDeal

#TODO:combine the get_* methord with a common methord
def get_origin(html=None):
    return None
    pass
def get_origin_thread_id(html):
    try:
        thread_id = html.xpath('//*[@id="search_dropdownmenu"]/div/div[1]/form/input[2]/@value')[0]
    except:
        return None
    else:
        return thread_id
    pass
def get_origin_thread_url(html):
    '''
    i don't get it
    :return:
    '''
    return None
def get_origin_post_at(html):
    try:
        date = html.xpath('//*[@id="dateTime"]/span[1]/text()')[0]
    except:
        return None
    else:
        return date
def get_origin_dealprice(html):
    try:
        price = html.xpath('//*[@id="dealPrice"]/text()')[0]
    except:
        return None
    else:
        return price
def get_url(html):
    try:
        url = html.xpath('/html/head/meta[7]/@content')[0]
    except:
        return None
    else:
        return url
def get_title(html):
    try:
        title = html.xpath('//*[@id="dealTitle"]/h1/text()')[0]
    except:
        return None
    else:
        return title
def get_main_image(html):
    try:
        src = html.xpath('//*[@id="mainImage"]/@src')[0]
    except:
        return None
    else:
        return src

def get_store(html):
    try:
        store = html.xpath('/html/head/meta[25]/@content')[0]
    except:
        return None
    else:
        return store

def get_description(html):
    try:
        descrip = html.xpath('//*[@id="notesAndResearch"]/div[1]/h2/text()')[0]
    except:
        return None
    else:
        return descrip
def get_editor_note(html):
    try:
        # the return should be 'editorsNotes'
        note = html.xpath('//*[@id="notesAndResearch"]/div[2]/p[1]/@class')[0]
    except:
        return None
    else:
        return note

def get_crawl_date():
    return True

def get_info(html):
    deal_info = RoughDeal()
    deal_info.origin = get_origin(html)
    deal_info.origin_thread_id = get_origin_thread_id(html)
    deal_info.origin_thread_url = get_origin_thread_url(html)
    deal_info.origin_post_at = get_origin_post_at(html)
    deal_info.origin_deal_price = get_origin_dealprice(html)
    deal_info.url = get_url(html)
    deal_info.title = get_title(html)
    deal_info.main_image = get_main_image(html)
    deal_info.store = get_store(html)
    deal_info.description = get_description(html)
    deal_info.editor_notes = get_editor_note(html)
    deal_info.crawl_date = get_crawl_date()
    return deal_info
class SlickCrawer:
    '''the range is http://slickdeals.net/deal-categories/
        这个类可以抓取的网页范围是http://slickdeals.net/deal-categories/ 下的feature categories的所有链接。
    '''

    def __init__(self,handler=None):
        '''

        :param sitename: site to crawl,
        :param url:e.g:http://slickdeals.net/deals/children/
        :param handler:handle the item crawled in form of which in models.
        :return:
        '''
        # self.sitename = sitename
        # self.url = url
        self.main_site = 'http://slickdeals.net'
        self.handler = handler
        self.this_page = None
        self.session = requests.session()
        # self.lists_on_page = None
        self.next_page_url = None
    # def get_main_content(self):
    #     try:
    #         self.this_page = urllib2.urlopen(self.url).read()
    #     except:
    #         print "get url content failed!"

    def get_deals_on_page(self):
        if self.this_page:
            soup = BeautifulSoup(self.this_page,'html.parser')
        # print content + "\n"
            return soup.find_all('div',attrs={"class":"fpItem"})

    def get_next_page(self):
        if self.next_page_url:
            try:
                res = urllib2.urlopen(self.next_page_url)
                content = res.read()
            except:
                return None
            else:
                return content

    def get_goods_details(self,goods_url):
        pass

    def get_next_page_url(self,content):
        if content:
            soup = BeautifulSoup(content,'html.parser')
            for a in  soup.find_all('a',href=True,attrs={"data-role":"next-page","class":"button"}):
                return self.main_site + a['href']

    def get_links(self):
        if self.this_page:
            soup = BeautifulSoup(self.this_page,'html.parser')
            # print content + "\n"
            items = soup.find_all('div',attrs={"class":"fpItem"})
            links = []
            for item in items:
                html = etree.HTML(str(item))
                link = html.xpath('//*/a[1]/@href')[0]

                links.append(link)
            return links

    def process_this_page(self):
        if self.this_page:
            # get ths good list on this page
            deal_links = self.get_links()
            for link in deal_links:
                # get one set of information from this goods
                link = self.main_site + link
                try:
                    res = urllib2.urlopen(link)
                    content = res.read()
                    html = etree.HTML(content)
                except:
                    return None
                else:
                    info = get_info(html)
                    self.handler(info)

    def crawl_by_category(self, category):
        # get the main page text
        base_url = 'http://slickdeals.net'
        # get_main_content()
        if not category:
            logging.info("no category")
            return None

        url = base_url + category
        print "processing next category"
        print url
        try:
            res = urllib2.urlopen(url)
        except urllib2.HTTPError as e:
            logging.info(e.code)
            logging.info(e.msg)
        else:
            self.this_page = res.read()
            # print self.this_page
            while(self.this_page):
                # craw the goods form this website until the crawer done
                # get the lists
                # self.get_list_on_page()
                self.next_page_url = self.get_next_page_url(self.this_page)
                print self.next_page_url
                self.process_this_page()
                print "processing next page..."
                self.this_page = self.get_next_page()

    @staticmethod
    def get_categories(url = None):
        main_url = 'http://slickdeals.net/deal-categories/'
        if url:
            main_url = url
        try:
            res = urllib2.urlopen(main_url)
        except urllib2.HTTPError as  e:
            logging.info(e.code)
            logging.info(e.msg)
            return []
        else:
            content = res.read()
            html = etree.HTML(content)
            categories = html.xpath('//*[@id="pageContent"]/div/div[4]/ul/li/a/@href')

            return categories

    def crawl(self):
        categories = SlickCrawer.get_categories()

        for cat in categories:
            # print cat
            self.crawl_by_category(cat)


if __name__ == '__main__':



    # def handler(item):
    #     for index ,value in enumerate(item):
    #         print index , ":\t" ,value,"\n"
    #
    #     print "\n"
    #     print '-'*60
    def handler(item):
        print item.main_image

    slick = SlickCrawer(handler = handler)
    # slick.crawl_by_category('/auto')
    slick.crawl()
    # print SlickCrawer.get_categories()