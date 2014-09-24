//Автор: Георгий Поликарпов

function valueChange(e) {
    var $char = String.fromCharCode(e.which);
    if ($char >= '0' && $char <= '9' || $char == ',' && !$(this).hasClass('available') || $char == '.' && !$(this).hasClass('available')) {
        var selectionStart = this.selectionStart;
        var selectionEnd = this.selectionEnd;
        if (selectionStart != this.value.length) {
            this.value = this.value.substring(0, selectionStart)
                + $char
                + this.value.substring(selectionEnd, this.value.length);
        } else {
            this.value += $char;
        }

        calculateCount();

        this.selectionStart = selectionStart + 1;
        this.selectionEnd = selectionStart + 1;
    }

    return false;
}

function inputKeyUp(e) {
	var $key = e.which;
    if ($key < 16 || ($key > 18 && $key < 37) || $key > 40) {
		var selectionEnd = this.selectionEnd;
		var selectionStart = this.selectionStart;
        
        calculateCount();

        this.selectionStart = selectionEnd;
        this.selectionEnd = selectionEnd;
	}	
}

$("input.value").on("keyup", inputKeyUp);
$("input.available").on("keyup", inputKeyUp);