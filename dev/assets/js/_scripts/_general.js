(function($) {

	//
	// Variables
	// --------------------------------------------------

  // Notes variables
	var notes = {
		'1C': new Howl({
			urls: ['assets/midia/1C.mp3']
		}),
		'1Cs': new Howl({
			urls: ['assets/midia/1Cs.mp3']
		}),
		'1D': new Howl({
			urls: ['assets/midia/1D.mp3']
		}),
		'1Ds': new Howl({
			urls: ['assets/midia/1Ds.mp3']
		}),
		'1E': new Howl({
			urls: ['assets/midia/1E.mp3']
		}),
		'1F': new Howl({
			urls: ['assets/midia/1F.mp3']
		}),
		'1Fs': new Howl({
			urls: ['assets/midia/1Fs.mp3']
		}),
		'1G': new Howl({
			urls: ['assets/midia/1G.mp3']
		}),
		'1Gs': new Howl({
			urls: ['assets/midia/1Gs.mp3']
		}),
		'2A': new Howl({
			urls: ['assets/midia/2A.mp3']
		}),
		'2As': new Howl({
			urls: ['assets/midia/2As.mp3']
		}),
		'2B': new Howl({
			urls: ['assets/midia/2B.mp3']
		}),
		'2C': new Howl({
			urls: ['assets/midia/2C.mp3']
		}),
		'2Cs': new Howl({
			urls: ['assets/midia/2Cs.mp3']
		}),
		'2D': new Howl({
			urls: ['assets/midia/2D.mp3']
		}),
		'2Ds': new Howl({
			urls: ['assets/midia/2Ds.mp3']
		}),
		'2E': new Howl({
			urls: ['assets/midia/2E.mp3']
		}),
		'2F': new Howl({
			urls: ['assets/midia/2F.mp3']
		}),
		'2Fs': new Howl({
			urls: ['assets/midia/2Fs.mp3']
		}),
		'2G': new Howl({
			urls: ['assets/midia/2G.mp3']
		}),
		'2Gs': new Howl({
			urls: ['assets/midia/2Gs.mp3']
		}),
		'3A': new Howl({
			urls: ['assets/midia/3A.mp3']
		}),
		'3As': new Howl({
			urls: ['assets/midia/3As.mp3']
		}),
		'3B': new Howl({
			urls: ['assets/midia/3B.mp3']
		})
	}; 

	// Lock event for play
	var lockEvent = {}; 

	//
	// Events
	// --------------------------------------------------

	// Disable Select
	// --------------------------------------------------
	$('.piano').bind('selectstart dragstart', function(ev) {              
	  ev.preventDefault();
	  return false;
	});
 
	// Piano Play Keyboard
    // --------------------------------------------------
	$(window).bind('keydown keyup', function(ev) {
		var keyNo = ev.which;
        var $key = $('[data-key="'+keyNo+'"]');
        var note = $key.attr('data-note'); 
		if(note){
			if (ev.type == 'keydown') {
				if (!lockEvent[keyNo]) {
					notes[note].play();
					lockEvent[keyNo] = true;
					$key.addClass('active');
					$key.parent().addClass('active');
		 		}
			} 
			else if (ev.type == 'keyup') {
				lockEvent[keyNo] = false;
				$key.removeClass('active');	 
				$key.parent().removeClass('active');
			} 
		}
	});

	// Piano Play Click
    // --------------------------------------------------
	$('.key > span').mousedown(function(){
		// Save note
		var me = $(this);
		var noteClick = me.attr('data-note');
		// Play sound
		notes[noteClick].play();
	});

})(jQuery);

