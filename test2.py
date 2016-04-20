import urllib2
from bs4 import BeautifulSoup
from lxml import etree

url = 'http://www.amazon.com/best-sellers-books-Amazon/zgbs/books/ref=zg_bs_books_pg_2?_encoding=UTF8&pg=1'

res = urllib2.urlopen(url).read()

soup = BeautifulSoup(res, 'html.parser')
s = soup.find('div', attrs = {'class' : 'zg_itemImmersion'})

selector = etree.HTML(str(s))
xpath = '//*[@class="zg_itemImmersion"]/div[2]/div[2]/a/@href'
aa = selector.xpath(xpath)

# print aa[0]
# urlnew = urllib2.urlopen(aa[0]).read()
aa = 'http://www.amazon.com/Hamilton-The-Revolution-Lin-Manuel-Miranda/dp/1455539740/ref=zg_bs_books_2'
urlnew = urllib2.urlopen(aa).read()
soup = BeautifulSoup(urlnew, 'html.parser')
s = soup.find('div', attrs={'id' : 'bookDesc_iframe'})
print s
# s = soup.find('div', attrs={'id' : 'leftCol'})
selector = etree.HTML(str(s))
xpath = '//*[@id="iframeContent"]/text()[1]'
aa = selector.xpath(xpath)
# print aa[0]


