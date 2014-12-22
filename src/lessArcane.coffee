class lessArcane
  constructor: (@json) ->

  version: ->
    'lessArcane 0.1'

  allGists: ->
    
  
  groupLabels: ->
    
  filterGist: ->




bigd = ''

listGroupLabels = (data) ->
  $(@).remove()
  c = -1
  for k in data.group.group_labels
    c += 1
    $("#leftlist").append("""<div class="list-group-item twiggy" my_item="#{c}">\
    #{k.name}  <span class="badge">#{k.gist_ids.length}</span></div>""")

allGists = (data) ->
  $("#right").text('')
  $("#right").hide()
  for gist in data.group.gists
    #console.log gist_id
    $("#right").append("<p>#{gist.description}</p>")
    for file in gist.files
      gist_content = file.content
      gist_file = Prism.highlight(gist_content,Prism.languages.markup)
      $("#right").append("<pre><code class='language-markup'>#{gist_file}\
      </code></pre>")
    $("#right").append("<hr>")
  $("#right").fadeIn()

displayGists = ->
  filterListShow()
  data = bigd
  $('.active').removeClass('active')
  $(@).addClass('active')
  $("#right").hide()
  $("#right").text('')
  my_item = $(@).attr('my_item')
  gistcount = $(@).children("span").text()
  for gist_id in  data.group.group_labels[my_item].gist_ids
    for gist in data.group.gists
      if gist.unique_id is gist_id
        $("#right").append("<p>#{gist.description}</p>")
        for file in gist.files
          gist_content = file.content
          gist_file = Prism.highlight(gist_content,Prism.languages.markup)
          $("#right").append("<pre><code class='language-markup'>\
          #{gist_file}</code></pre>")
        $("#right").append("<hr>")
  
  $("#right").fadeIn()
  $("#informant").val("Showing #{gistcount} gist(s) about \
  #{data.group.group_labels[my_item].name }. Click to filter.")

gotJ = (d) ->
  gistcount = d.group.gists.length
  bigd = d
  $("#informant").val("Showing #{gistcount} gist(s). Click to filter.")
  allGists d
  listGroupLabels d

populate =  ->
  console.log $(@).val()
  $.getJSON $(@).val(), gotJ

filterListShow = ->
  if $("#leftlist").css('display') is 'none'
    $("#leftlist").slideDown()
  else
    $("#leftlist").slideUp()
  
#myDropzone = new Dropzone("#url-input", { url: "/"})
#FileReaderJS.setupDrop(document.getElementById('url-input'), options)

topo = (file) ->
  console.log file

$ ->
  $("body").on('click',"#p", listGroupLabels)
  $("body").on('click',".twiggy", displayGists)
  $("body").on('click',"#informant", filterListShow)
  $("body").on('blur',"#url-input", populate)
  $("body").on('dblclick',"#gist-url input", -> console.log 'dblclick!!')  
  
  #myDropzone.on("addedfile", topo)