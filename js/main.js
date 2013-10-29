$(document).ready(function(){

	var bullshit = [
			{"phrase": "We connect users in single meeting place to share consumer experiences."},
			{"phrase": "We create happy interactions for mobile audiences." },
			{"phrase": "We’re a marketplace focused on positive relationships." },
			{"phrase": "We’re a community of like minded individuals seeking wonderful memories." },
			{"phrase": "We empower local business to expand their local commerce efforts globally." },
			{"phrase": "We enable people everywhere to make money doing what they love." },
			{"phrase": "We help bring communities closer together." },
			{"phrase": "We seek out and support artisans, experts and entrepreneurs who love their craft." },
			{"phrase": "We provide consumers with online solutions that are innovative, easy to use, and work for everyday web users." },
			{"phrase": "We love connecting your brand to empowered consumers through an integrated strategy optimized for the digital space."},
			{"phrase": "We provide integrated technology to Internet-based companies."},
			{"phrase": "We discover and share awesome technology that makes a difference"},
			{"phrase": "We share news on the greatest apps and devices that matter."},
			{"phrase": "We help you find and share the things that matter most."},
			{"phrase": "We generate buzz and brand-awareness for consumers."},
			{"phrase": "We handcraft brand experiences to enable brand advocates & consumers."}
			];

	random();

	function random(){
		var number = bullshit[Math.floor(Math.random() * bullshit.length)];
		$('.main .bullshit').text(number.phrase).animate({});
	};

	$('.main button').on('click', function(){
		random();
	});

});


