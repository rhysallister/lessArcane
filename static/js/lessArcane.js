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
    var file, gist, gist_content, gist_file, gist_id, my_item, _i, _j, _k, _len, _len2, _len3, _ref, _ref2, _ref3;
    $('.active').removeClass('active');
    $(this).addClass('active');
    $("#right").hide();
    $("#right").text('');
    my_item = $(this).attr('my_item');
    _ref = data.group.group_labels[my_item].gist_ids;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      gist_id = _ref[_i];
      _ref2 = data.group.gists;
      for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
        gist = _ref2[_j];
        if (gist.unique_id === gist_id) {
          _ref3 = gist.files;
          for (_k = 0, _len3 = _ref3.length; _k < _len3; _k++) {
            file = _ref3[_k];
            gist_content = file.content;
            gist_file = Prism.highlight(gist_content, Prism.languages.markup);
            $("#right").append("<pre><code class='language-markup'>" + gist_file + "</code></pre> <hr>");
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
