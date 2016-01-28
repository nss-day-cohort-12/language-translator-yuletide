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
		
		swahiliTranslator.translate = function(userInput) {
			var inputArray = userInput.split(" ");
			var translatedSwahili= "";

			inputArray.forEach(function(english){
				translatedSwahili = translatedSwahili + myLexicon[english]+ " ";
			});	 
			console.log("translation", translatedSwahili);
		};

	return swahiliTranslator;

})(Translator||{});