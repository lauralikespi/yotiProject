$(document).ready(function(){
	if( !$.trim( $('.displayBasket').html() ).length ) {
		$('.itemsNumber').text("Empty");
		$('.displayBasket').text("Your basket is empty!");
	}
})