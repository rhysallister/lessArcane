<<<<<<< HEAD:js/lessArcane.coffee
#console.log allthedata

=======
allthedata = data
>>>>>>> fbe9c3884f389a371dc0755b5bca89a534a586cb:src/lessArcane.coffee
listGroupLabels = ->
  $(@).remove()
  c = -1
  for k in data.group.group_labels
    #console.log "name: #{k.name} "
    c += 1
    $("#leftlist").append("""<a class="list-group-item" my_item="#{c}">#{k.name}  <span class="badge">#{k.gist_ids.length}</span></a>""")
    
displayGists = ->
  $('.active').removeClass('active')
  $(@).addClass('active')
  $("#right").hide()
  $("#right").text('')
  my_item = $(@).attr('my_item')
  for i in  allthedata.group.group_labels[my_item].gist_ids
    for q in allthedata.group.gists
      if q.unique_id is i
        $("#right").append("<pre>#{q.description}</pre> <hr>")
  $("#right").fadeIn()





$ ->
  $("body").on('click',"#p", listGroupLabels)
  $("body").on('click',"a", displayGists)
  


#allthedata.group.group_labels[1].gist_ids.length