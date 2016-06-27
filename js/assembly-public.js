var gitData		= {};
var projectName;
$(document).ready(function(){
	projectName = $("#PAGENAME").html();
	getStar();
	linkBottom();
});


function getStar(){
	$.ajax({
		type: 'GET',
		url: "https://api.github.com/repos/fzninja/" + projectName,
		success: function(data){
			gitData = data;
			$("#git_star").html(gitData.stargazers_count);
		},
		error: function(){
			$("#git_star").html("star获取失败");
		}
	});
}

function linkBottom(){
	$("#btn_bttom").click(function(){
		var h = $(document).height()-$(window).height();
		  $(document.body).animate({
		  		scrollTop:h
		  },700);
	});	
}
