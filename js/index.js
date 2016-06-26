window.onload = function(){
	$("#loader").hide();
	boxClick();
	judge();
}

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
			case 'fz-video':
				fzVideo();
		}
	} else if ( urlHash == "" ){
		clearDom();
	}
}


//打开fz-video
function fzVideo(){
	$("#frameSrc").attr("src","./assembly/fzVideo/demo.html");
	$("#frameSrc").animate({
		'width' 	: '953px',
		'height'	: '779px'
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



