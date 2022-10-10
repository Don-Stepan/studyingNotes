
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

		if (counterYesPlus == 50 && counterNoPlus == 0) {
			alert('Ви набрали '+ counterYesPlus +' правильних відповідей. Це замало, треба більше..')
		} else if (counterYesPlus == 100 && counterNoPlus == 0) {
			alert('Ви набрали '+ counterYesPlus +' правильних відповідей. Непогано але треба більше..')
		} else if (counterYesPlus == 200 && counterNoPlus == 0) {
			alert('Ви набрали '+ counterYesPlus +' правильних відповідей. Ого-Го-ГоГО.. Це чемпіонство.. Вітаю. Ідіть пити чай :)')
		} else if (counterNoPlus == 1) {
			alert('Еххх треба бути уважним')
		} else if (counterNoPlus == 10) {
			alert('Краще почни спочатку')
		} else if (counterYesPlus == 20 && counterNoPlus == 0) {
			alert('Непоганий старт.. Так тримати')
		}
	})
}
