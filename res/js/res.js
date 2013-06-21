$(document).ready(function () {
    var wWidth = $(window).width();
    var wHeight = $(window).height();
	var s1p = (wHeight / 2);
  var nbarh = '40px';

	$('#hello').css('padding-top', s1p+'px');
	$('#hello').css('height', s1p+'px');
	$('#thingsiworkedon').css('min-height', wHeight+'px');
  $('#thingsispokeabout').css('min-height', wHeight+'px');
	//$('#thingsiworkedon').css('height', wHeight+'px');
	//$('#pleaseprintwisely').css('padding-top', '40px');
  $('#pleaseprintwisely').css('min-height', wHeight+'px');

	function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
 
  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });
 
  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }

  $("#title").sticky({topSpacing:0});
});