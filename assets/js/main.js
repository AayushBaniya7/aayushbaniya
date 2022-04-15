/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);







var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
	method: form.method,
	body: data,
	headers: {
		'Accept': 'application/json'
	}
  }).then(response => {
	if (response.ok) {
	  status.innerHTML = "संदेश गयो धन्यवाद!";
	  form.reset()
	} else {
	  response.json().then(data => {
		if (Object.hasOwn(data, 'errors')) {
		  status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
		} else {
		  status.innerHTML = "माफ गर्नुहोस ! केहि समस्या भयो। फेरी कोशिश गर्नुहोस।"
		}
	  })
	}
  }).catch(error => {
	status.innerHTML = "माफ गर्नुहोस ! केहि समस्या भयो। फेरी कोशिश गर्नुहोस।"
  });
}
form.addEventListener("submit", handleSubmit)