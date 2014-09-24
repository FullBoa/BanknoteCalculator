//Автор: Георгий Поликарпов

function clearAvailables() {
	$("div.availableCount").find("input.available").each(function (index, element) {
		element.value = "";
	});	
	
	calculateCount();

    return false;
}

$("a.clearAvailable").on("click",clearAvailables);