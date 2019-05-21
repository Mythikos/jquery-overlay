//////////////////////////////////////////////
// Author: Vincent Lakatos                  //
// Purpose: Provides an overlay             //
// that can be easily shown and hidden      //
// without added shenanigans                //
//////////////////////////////////////////////

var overlay = {
	settings: {
		fade: {
			enabled: false,
			inSpeed: 'slow',
			outSpeed: 'slow'
		},
    	timer: {
    		enabled: false,
    		duration: 3000
    	}
	},
	elements: {
		overlay: null,
		message: null,
		style: {
			overlay: 'z-index: 2; position: fixed; display: block; width: 100%; height: 100%; top 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0, 0.4);',
			message: 'color: White; font-size: 5em; font-weight: bold; position: absolute; bottom: 0px; margin: 1em;'
		}
	},

	/// <summary>Initializes the object</summary>
	/// <returns/>
	init: function(data) {
		// Append
		if ($('#overlay').length === 0) {
	        $('body').append('<div id="overlay" style="' + this.elements.style.overlay + '"></div>');
	        $('#overlay').append('<p id="overlayMessage" style="' + this.elements.style.message + '"></p>');
	        $('#overlay').hide();
	    }

	    // Store reference
	    this.elements.overlay = $('#overlay');
	    this.elements.message = $('#overlayMessage')
	},

	/// <summary>Shows the overlay and presents the provided message to screen. If the overlay element doesnt already exist, it will create it.</summary>  
	/// <param name="message" type="String">The message you wish to show on screen</param>
	/// <returns></returns>  
	show: function (message) {
	    if (this.elements.overlay.is(':hidden')) {
	        if (this.settings.fade.enabled == true) {
	        	this.elements.message.text(message);
	            this.elements.overlay.fadeIn(this.settings.fade.inSpeed);
	            this.elements.message.fadeIn(this.settings.fade.inSpeed);
	        }
	        else {
	        	this.elements.message.text(message);
	            this.elements.overlay.show();
	        }

	        if (this.settings.timer.enabled == true) {
	        	setTimeout($.proxy(overlay.hide, overlay), this.settings.timer.duration);
	        }
	    }
	},

	/// <summary>Hides the overlay. If the overlay element doesnt already exist, it will create it.</summary>  
	/// <returns></returns> 
	hide: function () {
	    if (this.elements.overlay.is(':visible')) {
	        if (this.settings.fade.enabled == true) {
	            this.elements.overlay.fadeOut(this.settings.fade.outSpeed);
	            this.elements.message.fadeOut(this.settings.fade.outSpeed, function () {
	                $(this).text("");
	            });
	        }
	        else {
	            this.elements.overlay.hide();
	        	this.elements.message.text("");
	        }
	    }
	}
}