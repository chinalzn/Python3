# -*- coding: utf-8
'''
    改版增加了商品抓取的内容，其他类型商品的抓取在下一版
'''

import urllib2
from bs4 import BeautifulSoup
from lxml import etree
import datetime

class ItemDetail:
    def __init__(self):
        self.origin = None #暂时不管
        self.origin_thread_id = None # 商品在网站的id
        self.origin_thread_url = None # 商品在网站的唯一url
        self.origin_post_at = None # 发布时间
        self.origin_deal_price = None # 打折价格
        self.url = None # 商品url
        self.title = None # 商品标题
        self.main_image = None  # 图片
        self.store = None   # 商品所在店铺 -- 有就抓
        self.description = None # 商品描述
        self.editor_notes = None    # 发布人给的提醒--有就抓
        self.crawl_date = None  # 抓取时间 -- 可使用datetima.now()

def GetOrigin(html):
    return None

def GetOriginThreadId(html):
    return None

def GetOriginThreadUrl(html):
    return None

def GetOriginPostAt(html):
    detail = html.xpath('//*[@id="title"]/span[3]/text()')
    if detail:
        return detail[0][2:]
    else:
        return None

def GetOriginDealPrice(html):
    detail = html.xpath('//*[@class="a-fixed-right-grid-col a-col-left"]/span/text()')
    if detail:
        return detail[0]
    else:
        return None

# def GetUrl(html):
#     detail = html.xpath()
#     return detail

def GetTitle(html):
    detail = html.xpath('//*[@id="productTitle"]/text()')
    if detail:
        return detail[0]
    else:
        return None

def GetMainImage(html):
    detail = html.xpath('//*[@id="imgBlkFront"]/@src')
    if detail:
        return detail[0]
    else:
        return None

def GetStore(html):
    # detail = html.xpath()
    return None

def GetDescription(html):
    detail = html.xpath('//*[@id="iframeContent"]/p/text()')
    if detail:
        return detail[0]
    else:
        return None

def GetEditorNotes(html):
    # detail = html.xpath()
    return None

def GetCrawlDate(html):
    return datetime.datetime.now()

def GetItemDetail(ItemPageUrl, html, html1):
    # print html
    ItemInfo = ItemDetail()
    ItemInfo.origin = GetOrigin(html)
    ItemInfo.origin_thread_id = GetOriginThreadId(html)
    ItemInfo.origin_thread_url = GetOriginThreadUrl(html)
    ItemInfo.origin_post_at = GetOriginPostAt(html)
    ItemInfo.origin_deal_price = GetOriginDealPrice(html)
    ItemInfo.url = ItemPageUrl
    ItemInfo.title = GetTitle(html)
    ItemInfo.main_image = GetMainImage(html1)
    ItemInfo.store = GetStore(html)
    ItemInfo.description = GetDescription(html)
    ItemInfo.editor_notes = GetEditorNotes(html)
    ItemInfo.crawl_date = GetCrawlDate(html)
    return ItemInfo

class Slick:
    def __init__(self, url = None, handler = None):
        self.url = url
        self.handler = handler
        self.PageNum = 1

    def GetPageUrl(self):
        try:
            self.PresencePage = urllib2.urlopen(self.url + str(self.PageNum)).read()
            # print self.PresencePage
        except:
            pass

    def GetItemInfo(self):
        if self.PresencePage:
            soup = BeautifulSoup(self.PresencePage, 'html.parser')
            return soup.find_all('div', attrs = {'class' : 'zg_itemImmersion'})

    def GetNextPageUrl(self):
        self.PageNum = self.PageNum + 1
        self.GetPageUrl()

    def GetItemsUrl(self):
        if self.PresencePage:
            urls = self.GetItemInfo()
            links = []
            for url in urls:
                html = etree.HTML(str(url))
                xpath = '//*[@class="zg_itemImmersion"]/div[2]/div[2]/a/@href'
                link = html.xpath(xpath)
                if link:
                    links.append(link[0][7:])
            return links

    def DealWithItems(self):
        if self.PresencePage:
            ItemsUrls = self.GetItemsUrl()
            for url in ItemsUrls:
                ItemPageUrl = url
                # print ItemPageUrl
                try:
                    res = urllib2.urlopen(ItemPageUrl).read()
                except:
                    print "GetInfoWrong"
                else:
                    soup = BeautifulSoup(res, 'html.parser')
                    soups = soup.find_all('div', attrs = {'id' : 'centerCol'})
                    soups1 = soup.find_all('div', attrs = {'id' : 'leftCol'})
                    html = etree.HTML(str(soups))
                    html1 = etree.HTML(str(soups1))
                    info = GetItemDetail(ItemPageUrl, html, html1)
                    self.handler(info)

    def crawl(self):
        self.GetPageUrl()
        while(self.PresencePage):
            self.DealWithItems()
            self.GetNextPageUrl()

if __name__ == '__main__':

    # def handler(item):
    #     if not item:
    #         pass
    #     else:
    #         for index, value in enumerate(item):
    #             print index, ":\t", value, "\n"
    #         print "\n"
    #         print '-' * 60
    def handler(info):
        print info.origin_post_at

    slick = Slick(url = 'http://www.amazon.com/best-sellers-books-Amazon/zgbs/books/ref=zg_bs_books_pg_2?_encoding=UTF8&pg=', handler = handler)
    slick.crawl()