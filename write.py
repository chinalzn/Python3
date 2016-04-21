import urllib2
from bs4 import BeautifulSoup
from lxml import etree

ff = open('ctrl.html', 'w')

url = 'http://www.amazon.com/Harry-Potter-Cursed-Child-Production/dp/1338099132'

res = urllib2.urlopen(url).read()

soup = BeautifulSoup(res, 'html.parser')
soups = soup.find('div', attrs={'id' : 'centerCol'})

ff.writelines(str(soups))

ff.close()