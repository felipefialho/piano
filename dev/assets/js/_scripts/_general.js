(function($) {

	//
	// Variables
	// --------------------------------------------------

  // Notes variables
	var notes = {
		'1C': new Howl({
			urls: ['assets/midia/1C.ogg']
		}),
		'1Cs': new Howl({
			urls: ['assets/midia/1Cs.ogg']
		}),
		'1D': new Howl({
			urls: ['assets/midia/1D.ogg']
		}),
		'1Ds': new Howl({
			urls: ['assets/midia/1Ds.ogg']
		}),
		'1E': new Howl({
			urls: ['assets/midia/1E.ogg']
		}),
		'1F': new Howl({
			urls: ['assets/midia/1F.ogg']
		}),
		'1Fs': new Howl({
			urls: ['assets/midia/1Fs.ogg']
		}),
		'1G': new Howl({
			urls: ['assets/midia/1G.ogg']
		}),
		'1Gs': new Howl({
			urls: ['assets/midia/1Gs.ogg']
		}),
		'2A': new Howl({
			urls: ['assets/midia/2A.ogg']
		}),
		'2As': new Howl({
			urls: ['assets/midia/2As.ogg']
		}),
		'2B': new Howl({
			urls: ['assets/midia/2B.ogg']
		}),
		'2C': new Howl({
			urls: ['assets/midia/2C.ogg']
		}),
		'2Cs': new Howl({
			urls: ['assets/midia/2Cs.ogg']
		}),
		'2D': new Howl({
			urls: ['assets/midia/2D.ogg']
		}),
		'2Ds': new Howl({
			urls: ['assets/midia/2Ds.ogg']
		}),
		'2E': new Howl({
			urls: ['assets/midia/2E.ogg']
		}),
		'2F': new Howl({
			urls: ['assets/midia/2F.ogg']
		}),
		'2Fs': new Howl({
			urls: ['assets/midia/2Fs.ogg']
		}),
		'2G': new Howl({
			urls: ['assets/midia/2G.ogg']
		}),
		'2Gs': new Howl({
			urls: ['assets/midia/2Gs.ogg']
		}),
		'3A': new Howl({
			urls: ['assets/midia/3A.ogg']
		}),
		'3As': new Howl({
			urls: ['assets/midia/3As.ogg']
		}),
		'3B': new Howl({
			urls: ['assets/midia/3B.ogg']
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

	// Keydown Console
  // --------------------------------------------------
	$(window).bind('keydown', function(ev) {
		console.log(ev.which);
	}); 

	// Piano Play Keyboard
  // --------------------------------------------------
	$(window).bind('keydown keyup', function(ev) {
		var keyNo = ev.which;
		var $key = $('[data-key="'+keyNo+'"]');
		var note = $key.attr('data-note'); 
		if (ev.type == 'keydown') {
			lockEvent[keyNo] = true;
			$key.addClass('active');
			$key.parent().addClass('active');
		} 
		else if (ev.type == 'keyup') {
			lockEvent[keyNo] = false;
			$key.removeClass('active');	 
			$key.parent().removeClass('active');
		} 
	 	if (!lockEvent[keyNo]) {
			// Play sound
			var sound = notes[note].play();
	 	} 
	});

	// Piano Play Click
    // --------------------------------------------------
	$('.key > span').mousedown(function(){
		// Save note
		var me = $(this);
		var noteClick = me.attr('data-note');
		// Play sound
		var sound = notes[noteClick].play();
	});

})(jQuery);

