const string ="Привет! Как дела?";

const vowels=["а", "о", "е", "и", "у", "э", "ы", "ю", "я", "ё"]

const getVowels=stringToFiltering=>{
  let extractedVowels="";

  
  for (i=0; i<stringToFiltering.length; i++){
    const currentLetter=stringToFiltering[i].toLowerCase();
    if (vowels.includes(currentLetter)){
      extractedVowels+=currentLetter;
    }
  }
  return extractedVowels;
}

console.log(getVowels(string));