function setup(){}
 	var popup = document.getElementsByClassName("songpopup1");
 	var button = document.getElementsByClassName("video_1");
 	var close = document.getElementsByClassName("close")[0];
	button.onclick = function() {
		popup.style.display = 'block';
	};
	close.onclick = function() {
		popup.style.display = 'none';
	};
	window.onclick = function(event) {
		if  (event.target == popup){
			popup.style.display = 'none';
		}
	};
};

window.onload = function (argument) {
	setup();
};