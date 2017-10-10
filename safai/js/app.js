document.querySelector("input[type=\"range\"]").onmouseup = function() {
    var theRange = this.value;
    if(theRange == 100) {

			unlock();

		} else {
			document.init = setInterval(function() {
				if(document.querySelector("input[type=\"range\"]").value != 0) {
					document.querySelector("input[type=\"range\"]").value = theRange--;
				}
			}, 1);
		}
}

document.querySelector("input[type=\"range\"]").onmousedown = function() {
		clearInterval(document.init);
}

function unlock() {
    // $("img").animate({
    // 	'right': "50vw"
    // });
    // $("ul.animate").animate({
    // 	'opacity': 0
    // });
    $("div.container").css("transition", "opacity 0.5s");
    $("div.container").css("opacity", 0);
    setTimeout(function() {
    	$("div.row#screen-one").hide();
	    $("div.row#screen-one").css("display, none");
	    $("div.row#screen-two").show();
	    $("div.row#screen-two").css({
	    	display: "block",
	    	opacity: 1,
	    	transition: "opacity 0.5s"
	    });
	    $("div.container").animate({
	    	opacity: 1,
	    	transition: "opacity 0.5s"
	    });
    }, 500);
}

Webcam.set({
			width: 320,
			height: 240,
			image_format: 'jpeg',
			jpeg_quality: 90
		});
		Webcam.attach( '#cam' );


function take_snapshot() {
			// take snapshot and get image data
			Webcam.snap( function(data_uri) {
				// display results in page
				document.getElementById('img').innerHTML =  
					'<img src="'+data_uri+'"/>';
			} );
		}