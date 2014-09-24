//Автор: Георгий Поликарпов

function addValueOnClick() {
    var $pElement = $('<p/>', {
        class: "amountValue"
    });
    var $inputElement = $("<input/>", {
        class: "value",
        type: "text"
    });
    var $aElement = $("<a/>", {
        class: "delete",
        href: "",
        click: deleteValueOnClick
    });
    var $bElement = $("<b/>", {
        text: '\u00D7'
    });

    $("div.amounts").append($pElement);
    $pElement.append($inputElement);
    $pElement.append($aElement);
    $aElement.append($bElement);
    
    $inputElement.on("paste", onAmountPaste);	
	$inputElement.on("cut", cutValue);
    $inputElement.on("keyup", inputKeyUp);
	
	//для IE
	$inputElement.on("oncut", onAmountPaste);
	$inputElement.on("onpaste", onAmountPaste);

    return false;
}

$("a.add").on("click", addValueOnClick);