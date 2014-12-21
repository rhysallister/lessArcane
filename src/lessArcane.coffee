allthedata = data
listGroupLabels = ->
  $(@).remove()
  c = -1
  for k in data.group.group_labels
    c += 1
    $("#leftlist").append("""<a class="list-group-item" my_item="#{c}">#{k.name}  <span class="badge">#{k.gist_ids.length}</span></a>""")
    
displayGists = ->
  $('.active').removeClass('active')
  $(@).addClass('active')
  $("#right").hide()
  $("#right").text('')
  my_item = $(@).attr('my_item')

  for gist_id in  data.group.group_labels[my_item].gist_ids
    for gist in data.group.gists
      if gist.unique_id is gist_id
        for file in gist.files
          $("#right").append("<pre><code class='language-markup'>#{Prism.highlight(file.content,Prism.languages.markup)}</code></pre> <hr>")
  
  $("#right").fadeIn()



  $("#right").fadeIn()


$ ->
  $("body").on('click',"#p", listGroupLabels)
  $("body").on('click',"a", displayGists)
  

