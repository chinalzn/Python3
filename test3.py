import urllib2
from bs4 import BeautifulSoup
from lxml import etree

url = 'http://www.amazon.com/Harry-Potter-Cursed-Child-Production/dp/1338099132'

res = urllib2.urlopen(url).read()

# print res

soup = BeautifulSoup(res, 'html.parser')
soups = soup.find('div', attrs={'id' : 'centerCol'})

selector = etree.HTML(str(soups))
xpath = '//*[@class="a-fixed-right-grid-col a-col-left"]/span/text()'
a = selector.xpath(xpath)[0]
#
print a