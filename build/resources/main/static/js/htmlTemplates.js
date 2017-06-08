function moviePopUp (movieNo){
	return "<div id=\"popUpDiv"+movieNo+"\" style=\"display:none\">"
			+"<div class=\"row\">"
			+"<div class=\"col-sm-12\">"
			+"<h4 id=\"movie"+movieNo+"Title\"></h4>"
			+"</div>"
			+"</div>"
			+"<br />"
			+"<div class=\"row\">"
			+"<div class=\"col-sm-8\">"
			+"<p id=\"movie"+movieNo+"Blurb\"></p> "
			+"</div>"
			+"<div class=\"col-sm-1\">"
			+"<h4 id=\"movie"+movieNo+"Cert\"></h4>"
			+"</div>"
			+"<div class=\"col-sm-2\">"
			+"<h4 id=\"movie"+movieNo+"Price\"></h4>"
			+"</div>"
			+"</div>"
			+"<br />"
			+"<div class=\"row\">"
			+"<div class=\"col-sm-12\">"
			+"<button class=\"shoppingBasketButton\" id=\"movie"+movieNo+"Button\" type=\"button\" onclick=\"javascript:addToBasket(items, movie"+movieNo+"); basketPopUp('addedPopUp1');popup('popUpDiv"+movieNo+"')\">Add to basket</button>"
			+"</div>"
			+"</div>"		
			+"</div>";	
	};


