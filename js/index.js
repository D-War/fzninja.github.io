window.onload = function(){
	$(".loader").hide();
	boxClick();
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
		$("#frameSrc").attr("src","");
		$("#frameBox").fadeOut();
		$("#fix").fadeIn();
		$("#fix2").fadeOut();
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
	if( urlHash[1] == 'assembly' ){
		urlHashTwo = urlHash[2];
		switch(urlHashTwo)
		{
			case 'fz-video':
				fzVideo();
		}
	}
}


//打开fz-video
function fzVideo(){
	$("#frameSrc").attr("src","./assembly/fzVideo/demo.html");
	$("#frameSrc").css({
		'width' 	: '953px',
		'height'	: '537px'
	});
	$("#frameBox").fadeIn();
	$("#fix").fadeOut();
	$("#fix2").fadeIn();
}




