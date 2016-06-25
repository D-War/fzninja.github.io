var pgName = $("#PAGENAME").html();
var pgUrl  = window.location.href;
var dsDom  = $(".ds-thread");
dsDom.attr("data-thread-key",pgName);
dsDom.attr("data-title",pgName);
dsDom.attr("data-url",pgUrl);

var duoshuoQuery = {short_name:"fzninja"};
(function() {
	var ds = document.createElement('script');
	ds.type = 'text/javascript';ds.async = true;
	ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
	ds.charset = 'UTF-8';
	(document.getElementsByTagName('head')[0] 
	 || document.getElementsByTagName('body')[0]).appendChild(ds);
})();