/*
  This function should accept a single-letter string as a parameter.
  It should return true if the string is a vowel.
  (For the sake of argument, let's make Y count as a consonant today.)
  Otherwise, it should return false.

  Hint: string.toLowerCase()
*/

function isVowel(letter) {
	if (letter.toLowerCase() === "a" || letter.toLowerCase() === "e"){
		return true;
	}
	if (letter.toLowerCase() === "i" || letter.toLowerCase() === "o"){
		return true;
	}
	if (letter.toLowerCase() === "u"){
		return true;
	}
	else{
		return false;
	}

}

/*
  This function should accept a string as a parameter.
  It should return the number of vowels in the string.
  You should make use of the isVowel() function you just wrote.

  Hint: string[0] returns the 1st character in the string
*/

function countVowels(word) {
	counter = 0;
	numOfVowels = 0;
	while (counter < word.length){

	if(isVowel(word[counter])){
	numOfVowels++;
	}
	counter++;
}
return numOfVowels;
}
