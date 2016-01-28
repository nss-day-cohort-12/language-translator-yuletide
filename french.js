var Translator = (function(frenchTranslator) {
  var FrenchTrans = {
  "Merry": "Joyeux",
  "Christmas": "Noël",
  "and": "et",
  "Happy": "Content",
  "New": "Neuf",
  "Year": "An"
  }
   
  frenchTranslator.getFrenchWords = function() {
    return FrenchTrans;
  };
  frenchTranslator.setFrenchWords = function(a, b) {
    FrenchTrans[a] = b;
  };
  frenchTranslator.translateToFrench= function(input) {
    var translatesentence = document.getElementById("translated-content");
    var translatedWords = "";
    var makeArray = input.split(" ");  
    console.log("input", makeArray);
    makeArray.forEach(function(element){
      if (FrenchTrans.hasOwnProperty(element) === false) {
        throw "Sorry, I don't know what " + element + "means.";
      }
      translatedWords += FrenchTrans[element] + " ";
    })
      translatesentence.innerHTML = `<div>${translatedWords}</div>`;
  };

  return frenchTranslator;
})(Translator || {});