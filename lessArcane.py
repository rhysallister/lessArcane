import os, sys

import bottle
from bottle import route, run, template, post,request, response

bottle.debug(True)

# main website stuff

@route('/')
def lessArcane():
  return template('index.html')
  
@route('/js/<jsfile>')
def js(jsfile):
  response.content_type = 'application/javascript'
  return template('js/%s' % jsfile)
    




run(host=os.getenv("IP", '0.0.0.0'),port=int(os.getenv("PORT", 8080) ),reloader=True)

