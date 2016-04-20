import urllib2
from bs4 import BeautifulSoup
from lxml import etree

class Slick:
    def __init__(self, url = None, handler = None):
        self.url = url
        self.handler = handler

    def GetPageUrl(self):
        try:
            self.PresencePage = urllib2.urlopen(self.url).read()
        except:
            print "Get Url Wrong"

    def GetItemInfo(self):
        if self.PresencePage:
            soup = BeautifulSoup(self.PresencePage, 'html.parser')
            return soup.find_all('div', attrs = {'class' : 'zg_itemImmersion'})
