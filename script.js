var url = 'http://api.icndb.com/jokes/random';
var button = document.getElementById('get-joke');
button.addEventListener(
	'click', 
	function() {getJoke();}
	);

var paragraph = document.getElementById('joke');

function getJoke() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://api.icndb.com/jokes/random');
	xhr.addEventListener('load', function(){
	 	var response = JSON.parse(xhr.response);
	 	paragraph.innerHTML = response.value.joke;
	 });
	xhr.send();
}

getJoke()

/* Same code as above, however with usage of jQuery

var url = 'http://api.icndb.com/jokes/random';
var $button = $('#get-joke').click(function(){getJoke()});
var $paragraph = $('#joke');

function getJoke() {
	$.ajax({
		method: 'GET',
		url: url, //here's a weird construction, but on the left we have the name of the parameter, and to the right is the name of the variable that holds the value
		success: function(res) {
			$paragraph.text(res.value.joke);
		}
	});
}

getJoke()

*/