<<<<<<< HEAD
(function(){var t,i;i=function(){var t,i,a,e,r,s;for($(this).remove(),t=-1,r=data.group.group_labels,s=[],a=0,e=r.length;e>a;a++)i=r[a],t+=1,s.push($("#leftlist").append('<a class="list-group-item" my_item="'+t+'">'+i.name+'  <span class="badge">'+i.gist_ids.length+"</span></a>"));return s},t=function(){var t,i,a,e,r,s,n,o,l;for($(".active").removeClass("active"),$(this).addClass("active"),$("#right").hide(),$("#right").text(""),i=$(this).attr("my_item"),o=data.group.group_labels[i].gist_ids,e=0,s=o.length;s>e;e++)for(t=o[e],l=data.group.gists,r=0,n=l.length;n>r;r++)a=l[r],a.unique_id===t&&$("#right").append("<pre>"+a.description+"</pre> <hr>");return $("#right").fadeIn()},$(function(){return $("body").on("click","#p",i),$("body").on("click","a",t)})}).call(this);
=======
(function() {
  var allthedata, displayGists, listGroupLabels;

  allthedata = data;

  listGroupLabels = function() {
    var c, k, _i, _len, _ref, _results;
    $(this).remove();
    c = -1;
    _ref = allthedata.group.group_labels;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      k = _ref[_i];
      c += 1;
      _results.push($("#leftlist").append("<a class=\"list-group-item\" my_item=\"" + c + "\">" + k.name + "  <span class=\"badge\">" + k.gist_ids.length + "</span></a>"));
    }
    return _results;
  };

  displayGists = function() {
    var file, gist, gist_id, my_item, _i, _j, _k, _len, _len2, _len3, _ref, _ref2, _ref3;
    $('.active').removeClass('active');
    $(this).addClass('active');
    $("#right").hide();
    $("#right").text('');
    my_item = $(this).attr('my_item');
    _ref = allthedata.group.group_labels[my_item].gist_ids;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      gist_id = _ref[_i];
      _ref2 = allthedata.group.gists;
      for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
        gist = _ref2[_j];
        if (gist.unique_id === gist_id) {
          _ref3 = gist.files;
          for (_k = 0, _len3 = _ref3.length; _k < _len3; _k++) {
            file = _ref3[_k];
            $("#right").append("<pre><code class='language-markup'>" + file.content + "</code></pre> <hr>");
          }
        }
      }
    }
    return $("#right").fadeIn();
  };

  $(function() {
    $("body").on('click', "#p", listGroupLabels);
    return $("body").on('click', "a", displayGists);
  });

}).call(this);
>>>>>>> dc088bc... initial integration of prism.css
