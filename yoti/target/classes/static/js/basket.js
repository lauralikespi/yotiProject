var itemsScore = 0;
var basketList = [];
var priceList=[];
var cert=[];

	function addToBasket(itemsVar, movieName) {
		itemsScore = itemsScore + 1;
		basketList.push(movieName.title);
		cert.push(movieName.certificate);
		priceList.push(movieName.price);
		var movie = basketList[itemsScore-1];
    	var cert2 = cert[itemsScore-1];
    	var price = priceList[itemsScore-1];
    	sessionStorage.setItem(movie , JSON.stringify(movieName));
    	//console.log(sessionStorage);
    	RewriteFromStorage();
	};

// This isn't doing anything - why?
function emptyBasket() {
	for(var i = 0; i < sessionStorage.length-1; i++){
		var movie = sessionStorage.key(i);
		sessionStorage.removeItem('movie');
	}
}


	function RewriteFromStorage() {
		// Reset parameters
		sessionStorage.setItem("maxAge" , 0); 
	    $("#basket").empty();
	    // Creating the basket list to be displayed
	    for(var i = 0; i < sessionStorage.length - 2; i++)    //******* length
	    {
	        var movie = sessionStorage.key(i);              //******* movie()
	        var movieInfo = JSON.parse(sessionStorage.getItem(movie));  //******* getItem() 
	            $("#basket").append($("<div class='row basketItems'>").html("<br/>")
	            		.append($("<div class='col-sm-3'>").html("<img src='"+movieInfo.image+"' width='100%' height='auto'/>"))
	            		.append($("</div>").html())
	            		.append($("<div class='col-sm-5'>").html(movie))
	            		.append($("</div> <div class='col-sm-1'>").html(movieInfo.certificate))
	            		.append($("</div> <div class='col-sm-1'>").html("<strong>£"+movieInfo.price+"</strong"))
	            		.append($("</div> <div class='col-sm-1'> <button type='button' cert='Delete'><i class='fa fa-trash' aria-hidden='true'></i></button>")
	                           .attr('movie', movie)
	                           .click(function() {      //****** removeItem()
	                                sessionStorage.removeItem($(this).attr('movie'));
	                                RewriteFromStorage();
	                            })
	                          )
	            		.append($("</div></div>").html())
	            		.append($("<br/>").html())
	            );
	    }
	    var certArray = [];
	    var age = 0;
	    var price = 0;
	    // Create an array of certificates + add up the price
	    for(var i = 0; i < sessionStorage.length - 2; i++)    //******* length
	    {
	    	var movie = sessionStorage.key(i);              //******* movie()
	        var movieInfo = JSON.parse(sessionStorage.getItem(movie));
	        certArray[i] = movieInfo.certificate;
	        //console.log(certArray);
	        price = price + movieInfo.price;
	    }
	   	if (certArray.includes("18")){
	    	age = 18;
	    }
	   	else if (certArray.includes("15")){
	    	age = 15;
	    }
	    
	    else if (certArray.includes("12")){
	    	age = 12;
	    }
	    else {
	    	age = 0;
	    }
	    // Setting max age required and total price
	    sessionStorage.setItem("maxAge" , age);
	    sessionStorage.setItem("totalPrice" , price); 
	    // Displaying price
	    $('#price').text("£"+price); 
	    // Items is session storage - 2 (max and price)
	    items = sessionStorage.length - 2;


	    if(window.location.pathname == '/') {
        	if (items == 0) {
		    	$('.itemsNumber').text("Empty");
				$('#basket').html("<p>Your basket is empty! <br/> Add some movies! </p> ");
				$('#yoti').hide();
				$('#checkout').hide();
				$('#underage').hide();
				$('#total').hide();
		    }
		    else if (age == 0){
		    	$('.itemsNumber').text(items);
		    	$('#checkout').show();
		    	$('#yoti').hide();
		    	$('#underage').hide();
		    	$('#total').show();
		    }
		    else {
		    	$('.itemsNumber').text(items);
		    	$('#yoti').show();
		    	$('#checkout').hide();
		    	$('#underage').hide();
		    	$('#total').show();
		    }
    	}
	}

	RewriteFromStorage();

