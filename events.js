var dropdown = document.getElementById("dropdown");
var translate = document.getElementById("translate");
var input = document.getElementById("english-content").innerHTML;
 	
var chooseAConverter = function(){
	switch (language) {
		case "maori":
			console.log("the language is " + language);
			translate.addEventListener("click", function(){
				event.preventDefault();
				Translator.translateToMaori(input);
			});
			break;
		case "french": 
			console.log("the language is " + language);
			translate.addEventListener("click", function(){
				event.preventDefault();
				Translator.translateToFrench(input);
			});
			break;
		case "chinese": 
			console.log("the language is " + language);
			translate.addEventListener("click", function(){
				event.preventDefault();
				Translator.translateToChinese(input);
			});
			break;	
		case "swahili": 
			console.log("the language is " + language);
			translate.addEventListener("click", function(){
				event.preventDefault();
				Translator.translateToSwahili(input);
			});
			break;	
		default: 
			break;		
	}
};


dropdown.addEventListener("change", function(){
	language = dropdown.options[dropdown.selectedIndex].value;
	chooseAConverter(language);
});

