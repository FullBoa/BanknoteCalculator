//Автор: Георгий Поликарпов

function onInputPaste(event) {
    var pastedText;

    if (window.clipboardData && window.clipboardData.getData) {
        pastedText = window.clipboardData.getData('Text');
    } else if (event.originalEvent.clipboardData && event.originalEvent.clipboardData.getData) {
        pastedText = event.originalEvent.clipboardData.getData('text/plain');
    }

    var $target = $(this).parent();

    var amounts = [];
    pastedText.split('\n').forEach(function (element) {
        element.split("\t").forEach(function (element) {
            if (element.trim() != "") {
                amounts.push(element.trim());
            }
        });
    });

    if (amounts.length > 0) {
        this.value = this.value.substring(0, this.selectionStart)
            + amounts[0]
            + this.value.substring(this.selectionEnd, this.value.length);

        for (var i = amounts.length - 1; i > 0; i--) {
            if (amounts[i] != "") {
                var $pElement = $('<p/>', {
                    class: "amountValue"
                });

                var $inputElement = $("<input/>", {
                    class: "value",
                    type: "text",
                    value: amounts[i]
                });

                var $aElement = $("<a/>", {
                    class: "delete",
                    href: "",
                    click: deleteValueOnClick
                });

                var $bElement = $("<b/>", {
                    text: '\u00D7'
                });

                $target.after($pElement);
                $pElement.append($inputElement);
                $pElement.append($aElement);
                $aElement.append($bElement);

                $inputElement.on("paste", onInputPaste);
                $inputElement.on("keypress", valueChange);
                $inputElement.on("keyup", inputKeyUp);
            }
        }
    }

    calculateOnClick();

    return false;
}

$("p.amountValue").find("input.value").on("paste", onInputPaste);