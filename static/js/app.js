// Generated by CoffeeScript 1.7.1
(function() {
  var allGists, bigd, displayGists, filterListShow, gotJ, listGroupLabels, populate, topo;

  bigd = '';

  listGroupLabels = function(data) {
    var c, k, _i, _len, _ref, _results;
    $(this).remove();
    c = -1;
    _ref = data.group.group_labels;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      k = _ref[_i];
      c += 1;
      _results.push($("#leftlist").append("<div class=\"list-group-item twiggy\" my_item=\"" + c + "\">" + k.name + "  <span class=\"badge\">" + k.gist_ids.length + "</span></div>"));
    }
    return _results;
  };

  allGists = function(data) {
    var file, gist, gist_content, gist_file, _i, _j, _len, _len1, _ref, _ref1;
    $("#right").text('');
    $("#right").hide();
    _ref = data.group.gists;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      gist = _ref[_i];
      $("#right").append("<p>" + gist.description + "</p>");
      _ref1 = gist.files;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        file = _ref1[_j];
        gist_content = file.content;
        gist_file = Prism.highlight(gist_content, Prism.languages.markup);
        $("#right").append("<pre><code class='language-markup'>" + gist_file + "</code></pre>");
      }
      $("#right").append("<hr>");
    }
    return $("#right").fadeIn();
  };

  displayGists = function() {
    var data, file, gist, gist_content, gist_file, gist_id, gistcount, my_item, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2;
    filterListShow();
    data = bigd;
    $('.active').removeClass('active');
    $(this).addClass('active');
    $("#right").hide();
    $("#right").text('');
    my_item = $(this).attr('my_item');
    gistcount = $(this).children("span").text();
    _ref = data.group.group_labels[my_item].gist_ids;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      gist_id = _ref[_i];
      _ref1 = data.group.gists;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        gist = _ref1[_j];
        if (gist.unique_id === gist_id) {
          $("#right").append("<p>" + gist.description + "</p>");
          _ref2 = gist.files;
          for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
            file = _ref2[_k];
            gist_content = file.content;
            gist_file = Prism.highlight(gist_content, Prism.languages.markup);
            $("#right").append("<pre><code class='language-markup'>" + gist_file + "</code></pre>");
          }
          $("#right").append("<hr>");
        }
      }
    }
    $("#right").fadeIn();
    return $("#informant").val("Showing " + gistcount + " gist(s) about " + data.group.group_labels[my_item].name + ". Click to filter.");
  };

  gotJ = function(d) {
    var gistcount;
    gistcount = d.group.gists.length;
    bigd = d;
    $("#informant").val("Showing " + gistcount + " gist(s). Click to filter.");
    allGists(d);
    return listGroupLabels(d);
  };

  populate = function() {
    console.log($(this).val());
    return $.getJSON($(this).val(), gotJ);
  };

  filterListShow = function() {
    if ($("#leftlist").css('display') === 'none') {
      return $("#leftlist").slideDown();
    } else {
      return $("#leftlist").slideUp();
    }
  };

  topo = function(file) {
    return console.log(file);
  };

  $(function() {
    $("body").on('click', "#p", listGroupLabels);
    $("body").on('click', ".twiggy", displayGists);
    $("body").on('click', "#informant", filterListShow);
    $("body").on('blur', "#url-input", populate);
    return $("body").on('dblclick', "#gist-url input", function() {
      return console.log('dblclick!!');
    });
  });

}).call(this);
