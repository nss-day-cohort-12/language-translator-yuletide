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
    var translatedWords = "";
    var makeArray = input.split(" ");  
    console.log("input", makeArray);
    makeArray.forEach(function(element){
      if (FrenchTrans.hasOwnProperty(element) === false) {
        throw "Sorry, I don't know what " + element + "means.";
      }
      // domElement.innerHTML = `<div>${translatedMessage}</div>`;
      translatedWords += FrenchTrans[element] + " ";
    })
  };

  return frenchTranslator;
})(Translator || {});