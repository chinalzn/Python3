import urllib2
from bs4 import BeautifulSoup
from lxml import etree

class Slick:
    def __init__(self, url = None, handler = None):
        self.url = url
        self.handler = handler
        self.PageNum = 1

    def GetPageInfo(self):
        try:
            self.PresencePage = urllib2.urlopen(self.url + str(self.PageNum)).read()
        except:
            print "Get Url Wrong"

    def GetItemInfo(self):
        if self.PresencePage:
            soup = BeautifulSoup(self.PresencePage, 'html.parser')
            return soup.find_all('div', attrs = {'class' : 'zg_itemImmersion'})

    def GetNextPageUrl(self):
        self.PageNum = self.PageNum + 1
        self.GetPageInfo()

    def DealWithItem(self):
        def Return(item):
            if item:
                return item[0]

        def GetItemDetail(item):
            if item:
                selector = etree.HTML(str(item))
                selectors = \
                    {
                        'title' : '//*[@class="zg_itemImmersion"]/div[2]/div[2]/a/text()',
                        'url' : '//*[@class="zg_itemImmersion"]/div[2]/div[2]/a/@href',
                        'image' : '//*[@class="zg_itemImmersion"]/div[2]/div[1]/div/a/img/@src'
                    }

                image =  selector.xpath(selectors['image'])
                title = selector.xpath(selectors['title'])
                url = selector.xpath(selectors['url'])

                image = Return(image)
                title = Return(title)
                url = Return(url)

                return title, image, url

        if self.PresencePage:
            items = self.GetItemInfo()
            for item in items:
                info = GetItemDetail(item)
                if not info:
                    pass
                else:
                    self.handler(info)

    def crawl(self):
        self.GetPageInfo()
        while(self.PresencePage):
            self.DealWithItem()
            self.GetNextPageUrl()

if __name__ == '__main__':
    '''
    '''

def handler(item):
    if not item:
        pass
    else:
        for index, value in enumerate(item):
          print index, ":\t", value, "\n"
        print "\n"
        print '-' * 60

slick = Slick(url = 'http://www.amazon.com/best-sellers-books-Amazon/zgbs/books/ref=zg_bs_books_pg_2?_encoding=UTF8&pg=', handler = handler)
slick.crawl()