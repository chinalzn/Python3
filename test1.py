import urllib2
from bs4 import BeautifulSoup
from lxml import etree

ff = open("Amazon Best Sellers  Best Books.html", "r").read()
# print ff

soup = BeautifulSoup(ff, "html.parser")
soups = soup.find('div', attrs = {'class' : 'zg_itemImmersion'})

# print soups
selector = etree.HTML(str(soups))
xpath = '//*[@class="zg_itemImmersion"]/div[2]/div[1]/div/a/img/@src'
aa = selector.xpath(xpath)

print aa[0]