var muOff = document.getElementsByClassName('muOff')[0],
	audio = document.getElementsByTagName('audio')[0],
	mu = document.getElementsByClassName('mu')[0];
var state = 2;
muOff.onclick = function() {
	if(state == 1){
		audio.pause();
		muOff.style.animation = "none";
		mu.style.display = "none";
		state = 2;
	}else if(state == 2){
		audio.play();
		mu.style.display = "block";
		muOff.style.animation = "run 1.5s linear infinite";
		state = 1;
	}
}