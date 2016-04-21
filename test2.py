import urllib2
from bs4 import BeautifulSoup
from lxml import etree

url = 'http://www.amazon.com/best-sellers-books-Amazon/zgbs/books/ref=zg_bs_books_pg_2?_encoding=UTF8&pg=1'

res = urllib2.urlopen(url).read()

soup = BeautifulSoup(res, 'html.parser')
s = soup.find('div', attrs = {'class' : 'zg_itemImmersion'})

selector = etree.HTML(str(s))
xpath = '//*[@class="zg_itemImmersion"]/div[2]/div[2]/a/@href'
aa = selector.xpath(xpath)[0][7:]

print aa

res = urllib2.urlopen(aa).read()
# print res

soup = BeautifulSoup(res, 'html.parser')
s = soup.find('div', attrs = {'centerCol'})

print s
selector = etree.HTML(str(s))
xpath = '//*[@id="productTitle"]/text()'
# aa = selector.xpath(xpath)[0]
# print aa

