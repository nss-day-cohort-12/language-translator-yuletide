
var Translator = (function (chineseTranslator) {
	var translationLegend = {"merry":"快活", "christmas":"聖誕", "and":"和", "happy":"快樂", "new":"新", "year":"年"};

		chineseTranslator.getChinese = function () {
			return chinese;
		};
		chineseTranslator.translateToChinese = function(userInput) {
			var translatesentence = document.getElementById("translated-content");
			var inputArray = userInput.split(" ");
			var translatedMessage = "";
			inputArray.forEach(function(english) {
				console.log(translationLegend[english]);
				translatedMessage += translationLegend[english] + "  ";
			});
				console.log("translatedMessage", translatedMessage);
	      	translatesentence.innerHTML = `<div>${translatedMessage}</div>`;
		};

		return chineseTranslator;
}(Translator || {}));
