$(document).ready(function(){
	$("div.amounts").find("input.value").each(function (index, element) {
		element.value = "";
	});
	
	$("div.availableCount").find("input.available").each(function (index, element) {
		element.value = "";
	});
});