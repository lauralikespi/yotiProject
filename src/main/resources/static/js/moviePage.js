$(document).ready(function(){
	$('.movieImg').hover(function() {
	    $(this).animate({
	        height: '400px'
	    }, 300);
	},function() {
	    $(this).animate({
	        height: '200px'
	    }, 300);
	});
	$('#movie1ImgDiv').hover(function() {
		$('#popUpDiv1').show();
	}, function() {
	    $('#popUpDiv1').hide();
	});
	$('#movie2ImgDiv').hover(function() {
		$('#popUpDiv2').show();
	}, function() {
	    $('#popUpDiv2').hide();
	});
	$('#movie3ImgDiv').hover(function() {
		$('#popUpDiv3').show();
	}, function() {
	    $('#popUpDiv3').hide();
	});
	$('#movie4ImgDiv').hover(function() {
		$('#popUpDiv4').show();
	}, function() {
	    $('#popUpDiv4').hide();
	});
	$('#movie5ImgDiv').hover(function() {
		$('#popUpDiv5').show();
	}, function() {
	    $('#popUpDiv5').hide();
	});
	$('#movie6ImgDiv').hover(function() {
		$('#popUpDiv6').show();
	}, function() {
	    $('#popUpDiv6').hide();
	});
	$('#movie7ImgDiv').hover(function() {
		$('#popUpDiv7').show();
	}, function() {
	    $('#popUpDiv7').hide();
	});
	$('#movie8ImgDiv').hover(function() {
		$('#popUpDiv8').show();
	}, function() {
	    $('#popUpDiv8').hide();
	});
	$('#movie9ImgDiv').hover(function() {
		$('#popUpDiv9').show();
	}, function() {
	    $('#popUpDiv9').hide();
	});
/*	$(movieID).hover(function() {
		$(popID).show();
	}, function() {
	    $(popID).hide();
	});
*/
});