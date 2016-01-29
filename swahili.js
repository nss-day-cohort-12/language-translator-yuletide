var Translator = (function (swahiliTranslator) {

	var myLexicon = {"merry": "Njema", 
					 "christmas":"Krismasi", 
					 "and":"na", 
					 "happy":"Heri ya", 
					 "new":"Mwaka", 
					 "year":"Mpya"
					};

	
		 swahiliTranslator.getSwahili = function () {
			 return myLexicon;
		 };
		
		swahiliTranslator.translateToSwahili = function(userInput) {
			var translatesentence = document.getElementById("translated-content");
			var inputArray = userInput.split(" ");
			var translatedSwahili= "";

			inputArray.forEach(function(english){
				translatedSwahili = translatedSwahili + myLexicon[english]+ " ";
			});	 
			console.log("translation", translatedSwahili);
			translatesentence.innerHTML = `<div>${translatedSwahili}</div>`;
		};

	return swahiliTranslator;

})(Translator||{});