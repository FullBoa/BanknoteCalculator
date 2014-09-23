//Автор: Георгий Поликарпов

function valueChange(e) {
    var $char = String.fromCharCode(e.which);
    if ($char >= '0' && $char <= '9' || $char == ',' || $char == '.') {
        var selectionStart = this.selectionStart;
        var selectionEnd = this.selectionEnd;
        if (selectionStart != this.value.length) {
            this.value = this.value.substring(0, selectionStart)
                + $char
                + this.value.substring(selectionEnd, this.value.length);
        } else {
            this.value += $char;
        }

        calculateOnClick();

        this.selectionStart = selectionStart + 1;
        this.selectionEnd = selectionStart + 1;
    }

    return false;
}

function inputKeyUp(e) {
    var $key = e.which;
    if ($key == 8 || $key == 46) {
        var selectionEnd = this.selectionEnd;
        
        calculateOnClick();

        this.selectionStart = selectionEnd;
        this.selectionEnd = selectionEnd;
    }
}

$("input.value").on("keypress", valueChange);
$("input.value").on("keyup", inputKeyUp);