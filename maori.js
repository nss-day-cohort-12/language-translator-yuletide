var Translator = function() {
	// The lexicon should be a private variable that cannot be accessed 
	// by the other team member's module except through an accessor (getter) method.
	var maoriLexicon = {
		"merry": "meri",
		"christmas": "kirihimete",
		"and": "me",
		"happy": "koa",
		"new": "hou",
		"year": "tau"
	}
	return {	
		getMaoriWords: function() {
			return maoriLexicon;
		},
		setMaoriWords: function(a, b) {
			maoriLexicon[a] = b;
		},
		// Each IIFE should expose, in its public interface, a method named 
		// translateTo{Language} (e.g. translateToSpanish or translateToFinnish) that accepts 
		// a single argument. That argument's value should be the text entered in by the user.
		translateToMaori: function(input) {
			var translatedMessage = "";
			var inputArray = input.split(" ");
			console.log("input", inputArray);
			inputArray.forEach(function(element){
				if (maoriLexicon.hasOwnProperty(element) === false) {
					throw "Sorry, I don't know what " + element + " means.";
				}
				console.log(maoriLexicon[element]);
				translatedMessage += maoriLexicon[element] + " ";
			})
			// eventually: domElement.innerHTML = `<div>${translatedMessage}</div>`;
			console.log("translatedMessage:", translatedMessage);
		}
	}
}();


