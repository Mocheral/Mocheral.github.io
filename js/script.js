const txtElement = ['ULTRAMEN','3D MODELLING','MAHASISWA', 'FOTOGRAFER'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik() {
	// body...

	if (count == txtElement.length) {
		count = 0;
	}
	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	console.log(words);
	document.querySelector('.efek-mengetik').textContent = words;

	if (words.length == currentTxt.length) {
		count++;
		txtIndex =0;
	}

	setTimeout(ngetik, 500);

})();