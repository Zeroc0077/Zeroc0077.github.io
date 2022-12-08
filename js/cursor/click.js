var a_idx = 0;
jQuery(document).ready(function($) {
  $("body").click(function(e) {
    var a = new Array("SQL", "SSTI", "SSRF", "XSS", "CSRF", "RCE", "Unserialize", "XXE", "Webshell", "Java", "PHP", "Rust", "Go", "JS");
    var $i = $("<span/>").text(a[a_idx]);
    var x = e.pageX,
    y = e.pageY;
    $i.css({
      "z-index": 99999,
      "top": y - 28,
      "left": x - a[a_idx].length * 8,
      "position": "absolute",
      "color": "#ff1493"
    });
    $("body").append($i);
    $i.animate({
      "top": y - 180,
      "opacity": 0
    }, 1500, function() {
      $i.remove();
    });
    a_idx = (a_idx + 1) % a.length;
  });
});