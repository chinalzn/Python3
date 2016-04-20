import urllib2
from bs4 import BeautifulSoup
import requests
from lxml import etree

class SlickCrawer:
# the range is http://slickdeals.net/deal-categories/
    def __init__(self,sitename=None,url=None,handler=None):
        self.sitename = sitename
        self.url = url
        self.handler = handler
        self.this_page = None
        self.session = requests.session()
        # self.lists_on_page = None
        self.next_page_url = None
    def get_main_content(self):
        try:
            self.this_page = urllib2.urlopen(self.url).read()
        except:
            print "get url content failed!"

    def get_deals_on_page(self):
        if self.this_page:
            soup = BeautifulSoup(self.this_page,'html.parser')
        # print content + "\n"
            return soup.find_all('div',attrs={"class":"fpItem"})

    def get_next_page(self):
        pass

    def get_goods_details(self,goods_url):
        pass

    def get_next_page_url(self):
        if self.this_page:
            selector = etree.HTML(self.this_page)
            xpath = '//*[@id="fpMainContent"]/div[4]/a[2]/@href'
            url =  selector.xpath(xpath)
            if url:
                return 'http://slickdeals.net' + url[0]
            else:
                return None


    def process_this_page(self):
        def deep_one(item):
            if item:
                return item[0]


        def get_deal_info(item):
            if item:
                selector = etree.HTML(str(item))
                selectors = \
                    {
                        'image':'//*/img/@src',
                        'title': '//*/a[3]/span/text()',
                        'url':'//*/a[1]/@href'
                    }
                image =  selector.xpath(selectors['image'])
                title = selector.xpath(selectors['title'])
                url = selector.xpath(selectors['url'])

                image = deep_one(image)
                title = deep_one(title)
                url = deep_one(url)

                if not url:
                    return False
                else:
                    url = 'http://slickdeals.net' + url
                    content = urllib2.urlopen(url).read()
                    selector = etree.HTML(content)
                    date = selector.xpath('//*[@id="dateTime"]/span[1]/text()')
                    date = deep_one(date)
                    return title, image,url,date


        if self.this_page:
            # get ths good list on this page
            items = self.get_deals_on_page()
            for item in items:
                # get one set of information from this goods
                info = get_deal_info(item)
                self.handler(info)

    def crawl(self):
        # get the main page text
        self.get_main_content()
        while(self.this_page):
            # craw the goods form this website until the crawer done
            # get the lists
            # self.get_list_on_page()
            self.next_page_url = self.get_next_page_url()
            self.process_this_page()
            self.this_page = self.get_next_page()

if __name__ == '__main__':

    # test for get_goods_info()
    def getlists(url):
        content = urllib2.urlopen(url).read()
        soup = BeautifulSoup(content,'html.parser')
        # print content + "\n"
        return soup.find_all('div',attrs={"class":"fpItem"})



    def get_deal_info(item):
        if item:
            selector = etree.HTML(str(item))
            selectors = \
                {
                    'image':'//*/img/@src',
                    'title': '//*/a[3]/span/text()',
                    'url':'//*/a[1]/@href'
                }
            image =  selector.xpath(selectors['image'])[0]
            title = selector.xpath(selectors['title'])[0]
            url = selector.xpath(selectors['url'])[0]
            if not url:
                return False
            else:
                url = 'http://slickdeals.net' + str(url)
                content = urllib2.urlopen(url).read()
                selector = etree.HTML(content)
                date = selector.xpath('//*[@id="dateTime"]/span[1]/text()')[0]
                return title, image,url,date

    # lists = getlists("http://slickdeals.net/deals/children/?page=86&pp=24")
    # item = lists[0]
    # for a in get_deal_info(item):
    #     print a
def get_next_page_url(this_page):
    selector = etree.HTML(this_page)
    xpath = '//*[@id="fpMainContent"]/div[4]/a[2]/@href'
    url =  selector.xpath(xpath)
    if url:
        return 'http://slickdeals.net' + url[0]
    else:
        return None

def handler(item):
    for index ,value in enumerate(item):
        print index , ":\t" ,value,"\n"

    print "\n"
    print '-'*60
slick = SlickCrawer(sitename='slickdeal',url='http://slickdeals.net/deals/children/?page=2&pp=24',handler = handler)
# slick.get_main_content()
# slick.process_this_page()
slick.crawl()
# this_page = urllib2.urlopen('http://slickdeals.net/deals/games/?page=2&pp=24').read()
#
# print get_next_page_url(this_page)
