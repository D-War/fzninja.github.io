window.onload = function(){
	$("#loader").hide();
}

$(document).ready(function(){
	boxClick();
	judge();
});

window.onhashchange = function(){
	judge();
}

//选项点击监听
function boxClick(){
	$(".content_list").click(function(){
		Jump($(this).data('url'));
	});
	$("#fix2").click(function(){
		window.location.href = "#";
	});
}

//跳转
function Jump(url){
	window.location.href = "#";
	window.location.href = url;	
}


//判断hash
function judge(){
	var urlHash = window.location.hash;
	urlHash 	= urlHash.split('/');
	urlHashOne 	= urlHash[1];
	if( urlHashOne == 'assembly' ){
		urlHashTwo = urlHash[2];
		switch(urlHashTwo)
		{
			case 'fz-video'	:
				fzAssembly("./assembly/fzVideo/demo.html",'953px','779px');
				break;
			case 'fz-live'	:
				fzAssembly("./assembly/fzLive/demo.html",'953px','779px');
				break;
		}
	} else if ( urlHash == "" ){
		clearDom();
	}
}


//跳转插件页方法
function fzAssembly(Aurl,w,h){
	$("#frameSrc").attr("src",Aurl);
	$("#frameSrc").animate({
		'width' 	: w,
		'height'	: h
	});
	$("#frameBox").fadeIn();
	$("#fix").fadeOut();
	$("#fix2").fadeIn();
}


//清空hash
function clearDom(){
	$("#frameSrc").attr("src","");
	$("#frameSrc").animate({
		'width' 	: '0',
		'height'	: '0'
	});
	$("#frameBox").fadeOut();
	$("#fix").fadeIn();
	$("#fix2").fadeOut();
}



