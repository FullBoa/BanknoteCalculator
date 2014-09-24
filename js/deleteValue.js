//Автор: Георгий Поликарпов

function deleteValueOnClick() {
    $(this).parent().remove();
	calculateCount();

    return false;
}

$("a.delete").on("click", deleteValueOnClick);