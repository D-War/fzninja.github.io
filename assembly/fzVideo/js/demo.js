var pgname = $("#PAGENAME").html();
window.onload = function(){
	loadData();
}

document.getElementById('msgBtn').onclick = function(){
	$("#noInsertMsg").fadeIn();
	var plContent = $("#msgTxt").val();
	var aj = $.ajax({  
		url:'http://121.42.183.111:8360/api/read?pgname=' + pgname,// 写入对应页面评论列表  
		type:'GET', 
		dataType:'jsonp',
		data:{
			"pagenum" : pgname,
			"content" : plContent
		},
		success:function(data) {
			loadData();
			$("#noInsertMsg").fadeOut();
		},  
		error : function() {  
		  // view("异常！");
		   alert("评论写入异常!");
		   $("#noInsertMsg").fadeOut(); 
		} 
	});
}

//读取评论列表
function loadData(){
	var aj = $.ajax({  
		url:'http://121.42.183.111:8360/api/load?pgname=' + pgname,// 读取对应页面评论列表  
		type:'GET', 
		dataType:'jsonp',
		success:function(data) {
			$("#insertMsg").children().remove();
			innerData(data);
		},  
		error : function() {  
		  // view("异常！");
		   alert("评论获取异常!");  
		} 
	});
	//插入评论
	function innerData(data){
		var inDom 		= document.getElementById('insertMsg');
		var dataLength 	= data.data.length;
		if( dataLength == "0" ){
			$("#loadMsg").fadeOut();
			$("#noMsg").fadeIn();
		} else {
			$("#loadMsg").hide();
			$("#noMsg").hide();
			for ( var i = 0; i < dataLength; i++ ){
				inDom.innerHTML += 
				'<div class="msgContent">'+
					'<a href="#" class="msgName">'+ data.data[i].ip +':</a>'+
					'<p class="contentContent">'+
						data.data[i].content +
					'</p>'+
					'<div class="msgMenu">'+
						'<span class="msgTime">' + data.data[i].time + '</span>'+
						'<span class="xq">'+ data.data[i].fuck +'</span>'+
						'<a class="msgFuck" href="#">垃圾</a>'+
						'<span class="xq">'+ data.data[i].good +'</span>'+
						'<a class="msgGood" href="#">有用</a>'+
					'</div>'+
				'</div>';
			}
		}
	}
}