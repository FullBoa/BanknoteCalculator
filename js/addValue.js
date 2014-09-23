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
    
    $inputElement.on("paste", onInputPaste);
    $inputElement.on("keypress", valueChange);
    $inputElement.on("keyup", inputKeyUp);

    return false;
}

$("a.add").on("click", addValueOnClick);