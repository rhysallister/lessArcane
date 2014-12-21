(function() {
  var displayGists, listGroupLabels;

  listGroupLabels = function() {
    var c, k, _i, _len, _ref, _results;
    $(this).remove();
    c = -1;
    _ref = data.group.group_labels;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      k = _ref[_i];
      c += 1;
      _results.push($("#leftlist").append("<a class=\"list-group-item\" my_item=\"" + c + "\">" + k.name + "  <span class=\"badge\">" + k.gist_ids.length + "</span></a>"));
    }
    return _results;
  };

  displayGists = function() {
    var file, gist, gist_id, my_item, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2;
    $('.active').removeClass('active');
    $(this).addClass('active');
    $("#right").hide();
    $("#right").text('');
    my_item = $(this).attr('my_item');
    _ref = data.group.group_labels[my_item].gist_ids;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      gist_id = _ref[_i];
      _ref1 = data.group.gists;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        gist = _ref1[_j];
        if (gist.unique_id === gist_id) {
          _ref2 = gist.files;
          for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
            file = _ref2[_k];
            $("#right").append("<pre><code class='language-markup'>" + (Prism.highlight(file.content, Prism.languages.markup)) + "</code></pre> <hr>");
          }
        }
      }
    }
    $("#right").fadeIn();
    return $("#right").fadeIn();
  };

  $(function() {
    $("body").on('click', "#p", listGroupLabels);
    return $("body").on('click', "a", displayGists);
  });

}).call(this);
