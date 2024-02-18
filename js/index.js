// @todo: make sure if this stuff works

function clearThisText(target) {
		target.value = "";
}

function clearThisRadio(target) {
	$("#".concat(target)).prop('checked', false);
}

function clearThisDate(target) {
	$('#'.concat(target)).val(new Date());
}