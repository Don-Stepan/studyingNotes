

function startGame() {
	let startButton = $('.startGame');
	let stopButton = $('.stopGame');
	let answerOptionsBlock = $('.answerOptions');
	let answerOptionsItem = $('.answerOptions > .but');
	let notes = $('.notes');
	let messageYes = $('.blockMessages > .yes');
	let messageNo = $('.blockMessages > .nono');


    stopButton.on('click', function() {
    	answerOptionsBlock.hide();
    	startButton.show();
    	notes.hide();
    });


	let not = [];
	not.push(notes);
	
	function getRandomInt(min, max) {
	   min = Math.ceil(min);
	   max = Math.floor(max);
	   return Math.floor(Math.random() * (max - min)) + min;
	}

	let activeNotes = not[0][getRandomInt(0, 7)].id;
	console.log(activeNotes)


	answerOptionsBlock.show();
	startButton.hide();

	if(notes.is('#' + activeNotes)) {
		$('#'+activeNotes).show();
	}

	$('.answerOptions >.but').on('click', function() {

	  if($(this).attr("id") ===  activeNotes) {
	  	notes.hide();
		messageYes.show();
	  	setTimeout(function() {
	  		document.location.reload();
	  	}, 1000);
	 
	  } else {
		messageNo.show();
		setTimeout(function() {
			messageNo.hide();
		}, 2000);
	  }
	})
}
