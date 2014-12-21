import os, sys

import bottle
from bottle import route, run, template, post,request, response

bottle.debug(True)

# main website stuff

@route('/')
def lessArcane():
  return template('lessArcane.html')
  
@route('/js/<jsfile>')
def js(jsfile):
  response.content_type = 'application/javascript'
  return template(jsfile)
    




run(host=os.getenv("IP", '0.0.0.0'),port=int(os.getenv("PORT", 8080) ),reloader=True)

#{umDNuBOCfv-b5ze2-1qg; rotate0 }|{yORjfUNkSg-z2AKC-02N; rotate0 }|{CuYnv0EtW2-Wmz2O-nQb; rotate1 }|{RwUfFDtqZd-l6x3O-0A2; rotate1 }|{90xKdTGrlJ-ECWeg-tzj; rotate0 }|{nAPdo0px2q-Oxh60-bvl; rotate1 }