var overlay={settings:{fade:{enabled:!1,inSpeed:"slow",outSpeed:"slow"},timer:{enabled:!1,duration:3e3}},elements:{overlay:null,message:null,style:{overlay:"z-index: 2; position: fixed; display: block; width: 100%; height: 100%; top 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0, 0.4);",message:"color: White; font-size: 5em; font-weight: bold; position: absolute; bottom: 0px; margin: 1em;"}},init:function(e){0===$("#overlay").length&&($("body").append('<div id="overlay" style="'+this.elements.style.overlay+'"></div>'),$("#overlay").append('<p id="overlayMessage" style="'+this.elements.style.message+'"></p>'),$("#overlay").hide()),this.elements.overlay=$("#overlay"),this.elements.message=$("#overlayMessage")},show:function(e){this.elements.overlay.is(":hidden")&&(1==this.settings.fade.enabled?(this.elements.message.text(e),this.elements.overlay.fadeIn(this.settings.fade.inSpeed),this.elements.message.fadeIn(this.settings.fade.inSpeed)):(this.elements.message.text(e),this.elements.overlay.show()),1==this.settings.timer.enabled&&setTimeout($.proxy(overlay.hide,overlay),this.settings.timer.duration))},hide:function(){this.elements.overlay.is(":visible")&&(1==this.settings.fade.enabled?(this.elements.overlay.fadeOut(this.settings.fade.outSpeed),this.elements.message.fadeOut(this.settings.fade.outSpeed,function(){$(this).text("")})):(this.elements.overlay.hide(),this.elements.message.text("")))}};