//Автор: Георгий Поликарпов

function deleteValueOnClick() {
    $(this).parent().remove();
	calculateOnClick();

    return false;
}

$("a.delete").on("click", deleteValueOnClick);