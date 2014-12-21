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
    var i, my_item, q, _i, _j, _len, _len2, _ref, _ref2;
    $('.active').removeClass('active');
    $(this).addClass('active');
    $("#right").hide();
    $("#right").text('');
    my_item = $(this).attr('my_item');
    _ref = data.group.group_labels[my_item].gist_ids;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      i = _ref[_i];
      _ref2 = data.group.gists;
      for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
        q = _ref2[_j];
        if (q.unique_id === i) {
          $("#right").append("<pre>" + q.description + "</pre> <hr>");
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
