//Автор: Георгий Поликарпов

function cutValue(event){
	
    event.originalEvent.clipboardData.setData('text/plain',this.value.substring(this.selectionStart, this.selectionEnd));
	this.value = this.value.substring(0, this.selectionStart)
		+ this.value.substring(this.selectionEnd, this.value.length);

    calculateCount();

    return false;
}

$("p.amountValue").find("input.value").on("cut", cutValue);
$("p.availableCount").find("input.available").on("cut", cutValue);