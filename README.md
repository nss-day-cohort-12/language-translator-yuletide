#Language Translator
##Group: Yuletide
-Michael Bennett @github/mbennette85
-Katlyn Spears @github/katspears206
-Dylan Thomas @github/kdylanthomas
-Jason Weakley @github/JasonWeakley
##About
###Instructions for this Group Assignment
Represent a small bilingual lexicon as a Javascript object (see example below) and use it to translate a holiday card message from English into another language. Each member of the team will build a JavaScript module that will convert text entered into an input field to the language that they choose.

```{"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"}```

This is Swedish, so please choose other languages. You can add as many words/translations as you wish so that the user can write more complex holiday cards.

1. One team member creates a Github project and adds the others as collaborators.
2. Each team member picks a language.
3. Your project should have one HTML file that has a textarea, a select element with an option for each language, a button with a label of "Translate", and an empty DOM element into which the translated text will be inserted.
4. The team must discuss and choose a single variable name that will hold all of the logic that the team creates (i.e. see the Sedan example above).
5. Each team member will create one JavaScript file that contains one IIFE. Each teammate's IIFE will augment the other teammates' IIFEs.
6. The lexicon should be a private variable that cannot be accessed by the other team member's module except through an accessor (getter) method.
7. Each IIFE should expose, in its public interface, a method named translateTo{Language} (e.g. translateToSpanish or translateToFinnish) that accepts a single argument. That argument's value should be the text entered in by the user.
8. The team should create an extra JavaScript file that handles interacting with the form elements and determining which method should be called.##Changes and Notes
>Optional Bonus 1

>Find a way to write your IIFEs so that it doesn't matter whose module gets created first.
>Optional Bonus 2
***
>In addition to inserting the translated text into the HTML document, have the browser read the translated text to the user.
##Dependencies
-Google Chrome is suggested for using dev tools
##Installation
You can retrieve this project from this link to [GitHub](https://github.com/nss-day-cohort-12/language-translator-yuletide)
##Serving
Serve using the local host from the project directory.
##Contact
[Michael Bennett](https://github.com/mbennette85)
[Katlyn Spears](https://github.com/katspears206)
[Dylan Thomas](https://github.com/kdylanthomas)
[Jason Weakley](https://github.com/JasonWeakley)
