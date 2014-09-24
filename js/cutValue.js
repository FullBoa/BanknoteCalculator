//Автор: Георгий Поликарпов

function cutValue(event){
	
	if(event.originalEvent.clipboardData) {
        event.originalEvent.clipboardData.setData('text/plain',this.value.substring(this.selectionStart, this.selectionEnd));
    } else if (window.clipboardData) {
         window.clipboardData.setData('Text',this.value.substring(this.selectionStart, this.selectionEnd));
    }  
    
	this.value = this.value.substring(0, this.selectionStart)
		+ this.value.substring(this.selectionEnd, this.value.length);
	this.selectionEnd = this.selectionStart;

    calculateCount();

    return false;
}

$("p.amountValue").find("input.value").on("cut", cutValue);
$("p.availableCount").find("input.available").on("cut", cutValue);

//для IE
$("p.amountValue").find("input.value").on("oncut", onAmountPaste);
$("p.availableCount").find("input.available").on("oncut", onAvailablePaste);