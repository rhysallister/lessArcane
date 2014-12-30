class LessArcane
  constructor: (@json) ->

  version: ->
    'lessArcane 0.1'

  allGists: ->
    @json.group.gists
  
  groupLabels: ->
    groupLabels = ({'name':k.name,'count':k.gist_ids.length}  \
    for k in @json.group.group_labels)
    
  filterGist: (filterBy) ->
    f = q.gist_ids for q in @json.group.group_labels when q.name is filterBy
    o =[]
    o.push a for a in @json.group.gists when a.unique_id is b for b in f 
    o