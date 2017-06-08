window.onload = function(){ 
/*	document.getElementById("popUps").innerHTML = moviePopUp('1') 
												+ moviePopUp('2')
												+ moviePopUp('3') 
												+ moviePopUp('4') 
												+ moviePopUp('5') 
												+ moviePopUp('6') 
												+ moviePopUp('7') 
												+ moviePopUp('8') 
*/												+ moviePopUp('9') ;
	function movieDiv () {
		for (i = 1; i < 10; i++) {
				var movie = "movie" + i;
				var divID = movie + "Hover";
				var movieID = "#" + movie + "Img";
				var popID = "#popUpDiv" + i;
				document.getElementById(divID).innerHTML = moviePopUp(i);
			}
	};

	movieDiv();

	document.getElementById("movie1Title").innerHTML = movie1.title;
	document.getElementById("movie1Cert").innerHTML = movie1.certificate;
	document.getElementById("movie1Blurb").innerHTML = movie1.blurb;
	document.getElementById("movie1Price").innerHTML = "&#163;" + movie1.price;

	document.getElementById("movie2Title").innerHTML = movie2.title;
	document.getElementById("movie2Cert").innerHTML = movie2.certificate;
	document.getElementById("movie2Blurb").innerHTML = movie2.blurb;
	document.getElementById("movie2Price").innerHTML = "&#163;" + movie2.price;

	document.getElementById("movie3Title").innerHTML = movie3.title;
	document.getElementById("movie3Cert").innerHTML = movie3.certificate;
	document.getElementById("movie3Blurb").innerHTML = movie3.blurb;
	document.getElementById("movie3Price").innerHTML = "&#163;" + movie3.price;

	document.getElementById("movie4Title").innerHTML = movie4.title;
	document.getElementById("movie4Cert").innerHTML = movie4.certificate;
	document.getElementById("movie4Blurb").innerHTML = movie4.blurb;
	document.getElementById("movie4Price").innerHTML = "&#163;" + movie4.price;

	document.getElementById("movie5Title").innerHTML = movie5.title;
	document.getElementById("movie5Cert").innerHTML = movie5.certificate;
	document.getElementById("movie5Blurb").innerHTML = movie5.blurb;
	document.getElementById("movie5Price").innerHTML = "&#163;" + movie5.price;

	document.getElementById("movie6Title").innerHTML = movie6.title;
	document.getElementById("movie6Cert").innerHTML = movie6.certificate;
	document.getElementById("movie6Blurb").innerHTML = movie6.blurb;
	document.getElementById("movie6Price").innerHTML = "&#163;" + movie6.price;

	document.getElementById("movie7Title").innerHTML = movie7.title;
	document.getElementById("movie7Cert").innerHTML = movie7.certificate;
	document.getElementById("movie7Blurb").innerHTML = movie7.blurb;
	document.getElementById("movie7Price").innerHTML = "&#163;" + movie7.price;

	document.getElementById("movie8Title").innerHTML = movie8.title;
	document.getElementById("movie8Cert").innerHTML = movie8.certificate;
	document.getElementById("movie8Blurb").innerHTML = movie8.blurb;
	document.getElementById("movie8Price").innerHTML = "&#163;" + movie8.price;

	document.getElementById("movie9Title").innerHTML = movie9.title;
	document.getElementById("movie9Cert").innerHTML = movie9.certificate;
	document.getElementById("movie9Blurb").innerHTML = movie9.blurb;
	document.getElementById("movie9Price").innerHTML = "&#163;" + movie9.price;

	RewriteFromStorage();

}