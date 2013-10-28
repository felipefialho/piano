(function($) {

	//
	// Variables
	// --------------------------------------------------

  // Notes variables
	var notes = {
		'00A': new Howl({ 
			urls: ['assets/midia/00A.ogg']
		}),
		'00As': new Howl({ 
			urls: ['assets/midia/00As.ogg']
		}),
		'00B': new Howl({ 
			urls: ['assets/midia/00B.ogg']
		}),
		'0A': new Howl({ 
			urls: ['assets/midia/0A.ogg']
		}),
		'0As': new Howl({
			urls: ['assets/midia/0As.ogg']
		}),
		'0B': new Howl({
			urls: ['assets/midia/0B.ogg']
		}),
		'0C': new Howl({
			urls: ['assets/midia/0C.ogg']
		}),
		'0D': new Howl({
			urls: ['assets/midia/0D.ogg']
		}),
		'0Ds': new Howl({
			urls: ['assets/midia/0Ds.ogg']
		}),
		'0E': new Howl({
			urls: ['assets/midia/0E.ogg']
		}),
		'0F': new Howl({
			urls: ['assets/midia/0F.ogg']
		}),
		'0Gs': new Howl({
			urls: ['assets/midia/0Gs.ogg']
		}),
		'1A': new Howl({
			urls: ['assets/midia/1A.ogg']
		}),
		'1As': new Howl({
			urls: ['assets/midia/1As.ogg']
		}),
		'1B': new Howl({
			urls: ['assets/midia/1B.ogg']
		}),
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
		}),
		'3C': new Howl({
			urls: ['assets/midia/3C.ogg']
		}),
		'3Ds': new Howl({
			urls: ['assets/midia/3Ds.ogg']
		}),
		'3E': new Howl({
			urls: ['assets/midia/3E.ogg']
		}),
		'3F': new Howl({
			urls: ['assets/midia/3F.ogg']
		}),
		'3Fs': new Howl({
			urls: ['assets/midia/3Fs.ogg']
		}),
		'3G': new Howl({
			urls: ['assets/midia/3G.ogg']
		}),
		'3Gs': new Howl({
			urls: ['assets/midia/3Gs.ogg']
		}),
		'4A': new Howl({
			urls: ['assets/midia/4A.ogg']
		}),
		'4As': new Howl({
			urls: ['assets/midia/4As.ogg']
		}),
		'4B': new Howl({
			urls: ['assets/midia/4B.ogg']
		}),
		'4C': new Howl({
			urls: ['assets/midia/4C.ogg']
		}),
		'4Cs': new Howl({
			urls: ['assets/midia/4Cs.ogg']
		}),
		'4D': new Howl({
			urls: ['assets/midia/4D.ogg']
		}),
		'4Ds': new Howl({
			urls: ['assets/midia/4Ds.ogg']
		}),
		'4E': new Howl({
			urls: ['assets/midia/4E.ogg']
		}),
		'4F': new Howl({
			urls: ['assets/midia/4F.ogg']
		}),
		'4Fs': new Howl({
			urls: ['assets/midia/4Fs.ogg']
		}),
		'4G': new Howl({
			urls: ['assets/midia/4G.ogg']
		}),
		'4Gs': new Howl({
			urls: ['assets/midia/4Gs.ogg']
		}),
		'5A': new Howl({
			urls: ['assets/midia/5A.ogg']
		}),
		'5As': new Howl({
			urls: ['assets/midia/5As.ogg']
		}),
		'5B': new Howl({
			urls: ['assets/midia/5B.ogg']
		}),
		'5C': new Howl({
			urls: ['assets/midia/5C.ogg']
		}),
		'5Cs': new Howl({
			urls: ['assets/midia/5Cs.ogg']
		}),
		'5D': new Howl({
			urls: ['assets/midia/5D.ogg']
		}),
		'5Ds': new Howl({
			urls: ['assets/midia/5Ds.ogg']
		}),
		'5E': new Howl({
			urls: ['assets/midia/5E.ogg']
		}),
		'5F': new Howl({
			urls: ['assets/midia/5F.ogg']
		}),
		'5Fs': new Howl({
			urls: ['assets/midia/5Fs.ogg']
		}),
		'5G': new Howl({
			urls: ['assets/midia/5G.ogg']
		}),
		'5Gs': new Howl({
			urls: ['assets/midia/5Gs.ogg']
		}),
		'6A': new Howl({
			urls: ['assets/midia/6A.ogg']
		}),
		'6As': new Howl({
			urls: ['assets/midia/6As.ogg']
		}),
		'6B': new Howl({
			urls: ['assets/midia/6B.ogg']
		}),
		'6C': new Howl({
			urls: ['assets/midia/6C.ogg']
		}),
		'6Cs': new Howl({
			urls: ['assets/midia/6Cs.ogg']
		}),
		'6D': new Howl({
			urls: ['assets/midia/6D.ogg']
		}),
		'6F': new Howl({
			urls: ['assets/midia/6F.ogg']
		}),
		'6Fs': new Howl({
			urls: ['assets/midia/6Fs.ogg']
		}),
		'6G': new Howl({
			urls: ['assets/midia/6G.ogg']
		}),
		'6Gs': new Howl({
			urls: ['assets/midia/6Gs.ogg']
		}),
		'7C': new Howl({
			urls: ['assets/midia/7C.ogg']
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

