//Автор: Георгий Поликарпов

function onAmountPaste(event) {
    var pastedText;

	if(event.originalEvent.clipboardData && event.originalEvent.clipboardData.getData) {
        pastedText = event.originalEvent.clipboardData.getData('text/plain');
    }else if (window.clipboardData && window.clipboardData.getData) {
        pastedText = window.clipboardData.getData('Text');
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
		this.selectionStart = this.selectionEnd;

        for (var i = amounts.length - 1; i > 0; i--) {
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

			$pElement.append($inputElement);
			$pElement.append($aElement);
			$aElement.append($bElement);
			$target.after($pElement);

			$inputElement.on("paste", onAmountPaste);
			$inputElement.on("cut", cutValue);
			$inputElement.on("keyup", inputKeyUp);
			
			//для IE
			$inputElement.on("oncut", onAmountPaste);
			$inputElement.on("onpaste", onAmountPaste);
        }
    }

    calculateCount();

    return false;
}

function onAvailablePaste(event) {
	var pastedText;

	if(event.originalEvent.clipboardData && event.originalEvent.clipboardData.getData) {
        pastedText = event.originalEvent.clipboardData.getData('text/plain');
    } else if (window.clipboardData && window.clipboardData.getData) {
         pastedText = window.clipboardData.getData('Text');
    }  

    var $target = $(this).parent();

    var availables = [];
    pastedText.split('\n').forEach(function (element) {
        element.split("\t").forEach(function (element) {
            if (element.trim() != "") {
                availables.push(element.trim());
            }
        });
    });
	
	if (availables.length > 0) {
        this.value = this.value.substring(0, this.selectionStart)
            + availables[0]
            + this.value.substring(this.selectionEnd, this.value.length);
		this.selectionStart = this.selectionEnd;	
			
		var $target = $target.next();
			
		for (var i = 1; i < availables.length && $target[0] != null; i++, $target = $target.next()){
			$target.find("input.available")[0].value = availables[i];
		}
	}

    calculateCount();

    return false;
}

$("p.amountValue").find("input.value").on("paste", onAmountPaste);
$("p.availableCount").find("input.available").on("paste", onAvailablePaste);

//для IE
$("p.amountValue").find("input.value").on("onpaste", onAmountPaste);
$("p.availableCount").find("input.available").on("onpaste", onAvailablePaste);