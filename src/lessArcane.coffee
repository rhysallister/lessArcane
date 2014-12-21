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
        $("#right").append("<p>#{gist.description}</p>")
        for file in gist.files
          gist_content = file.content
          gist_file = Prism.highlight(gist_content,Prism.languages.markup)
          $("#right").append("<pre><code class='language-markup'>#{gist_file}</code></pre>")
        $("#right").append("<hr>")
  
  $("#right").fadeIn()

$ ->
  $("body").on('click',"#p", listGroupLabels)
  $("body").on('click',"a", displayGists)
