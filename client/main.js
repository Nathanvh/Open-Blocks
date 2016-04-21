import '../imports/ui/body.js';

if (Meteor.isClient) {
	Meteor.startup(function () {
		WebFontConfig = {
			google: { families: [ 'Exo:900,600:latin', 'Roboto:400,300:latin' ] }
		};
		(function() {
			var wf = document.createElement('script');
			wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
			wf.type = 'text/javascript';
			wf.async = 'true';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(wf, s);
		})();
	});
}