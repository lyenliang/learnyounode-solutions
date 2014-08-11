import mechanize
import json

browser = mechanize.Browser()
response = browser.open('http://front7.omegle.com/events')
data = json.load(response)
print data