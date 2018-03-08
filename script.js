$(document).ready(function(){
	$("#navBtnContainer ul.sub").hide();
	$("#navBtnContainer ul.menu li").click(function(){
		$("ul",this).slideToggle("fast");
	});
});