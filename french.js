var Translator = (function(frenchTranslator) {
  var FrenchTrans = {
  "merry": "Joyeux",
  "christmas": "Noël",
  "and": "et",
  "happy": "Content",
  "new": "Neuf",
  "year": "An"
  }
   
  frenchTranslator.getFrenchWords = function() {
    return FrenchTrans;
  };
  frenchTranslator.setFrenchWords = function(a, b) {
    FrenchTrans[a] = b;
  };
  frenchTranslator.translateToFrench = function(input) {
    var translatesentence = document.getElementById("translated-content");
    var translatedWords = "";
    var makeArray = input.toLowerCase().split(" ");  
    console.log(makeArray);
    console.log("input", makeArray);
    makeArray.forEach(function(element){
      // if (FrenchTrans.hasOwnProperty(element) === false) {
      //   throw "Sorry, I don't know what " + element + " means.";
      // }
      translatedWords += FrenchTrans[element] + " ";
    })
      translatesentence.innerHTML = `<div>${translatedWords}</div>`;
  };

  return frenchTranslator;
})(Translator || {});