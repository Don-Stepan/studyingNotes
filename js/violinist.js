
function startGame() {
	let startButton = $('.startGame');
	let stopButton = $('.stopGame');
	let answerOptionsBlock = $('.answerOptions');
	let notes = $('.notes');
	let counter = $('.counterBlock > div');
	let buttonBack = $('.buttonBack');

    stopButton.on('click', function() {
		window.location.reload();
		buttonBack.show();
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
	
	stopButton.show();
	buttonBack.hide();
	counter.show();
	answerOptionsBlock.show();
	startButton.hide();


	if(notes.is('#' + activeNotes)) {
		$('#'+activeNotes).show();
	}

	let arr =[
		[6, 13],
		[5, 12],
		[4, 11],
		[3, 10],
		[2, 9],
		[1, 8],
		[7]
	];


    // do - 13-6
    // re - 12-5
    // mi - 11-4
    // fa - 10-3
    // sol - 9-2
    // la - 8-1
    // si - 7

	let counterBlockYes = $('.counterBlock > .counterYes > .textYes');
	let counterBlockNo = $('.counterBlock > .counterNo > .textNo');
	let counterYesPlus = 0;
	let counterNoPlus = 0;

	$('.answerOptions >.but').on('click', function() {
		let buttonID = $(this).attr("id");
		buttonID --;

		if (arr[buttonID] != 'undefined' && Array.isArray(arr[buttonID])) {
			if (arr[buttonID].includes(Number(activeNotes))) {
				notes.hide();

				counterYesPlus++;
				counterBlockYes.html(counterYesPlus);

				setTimeout(function() {
					activeNotes = not[0][getRandomInt(0, 13)].id;
					if(notes.is('#' + activeNotes)) {
						$('#'+activeNotes).show();
					}
				},100);
			} else {
				counterNoPlus++;
				counterBlockNo.html(counterNoPlus);
			}
		}
	})
}
