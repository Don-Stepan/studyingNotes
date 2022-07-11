

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

	let activeNotes = not[0][getRandomInt(0, 13)].id;
	console.log(activeNotes)


	answerOptionsBlock.show();
	startButton.hide();

	if(notes.is('#' + activeNotes)) {
		$('#'+activeNotes).show();
	}

	let arr =[
		[1,8],
		[7],
		[6,13],
		[5, 12],
		[4,11],
		[3, 10],
		[2,9]
	];

	$('.answerOptions >.but').on('click', function() {
		let background = $('.greyBackground');
		let body = $('body');
		let buttonID = $(this).attr("id");
		buttonID --;

		if (arr[buttonID] != 'undefined' && Array.isArray(arr[buttonID])) {
			if (arr[buttonID].includes(Number(activeNotes))) {
				notes.hide();
				body.addClass('noScroll');
				background.show();
				messageYes.show();
				setTimeout(function() {
					document.location.reload();
				}, 1500);
			} else {
				background.show();
				messageNo.show();
				body.addClass('noScroll')
				setTimeout(function() {
					messageNo.hide();
					background.hide();
					body.removeClass('noScroll');
				}, 1500);
			}
		}
	})
}
