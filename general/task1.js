const string = "Привет! Как дела?";

function getVowels(str) {
  let arr = [];
  const arrVowels = ["я", "и", "ю", "а", "о", "у", "е", "ы", "э", "ё"];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < arrVowels.length; j++) {
      if (str[i] == arrVowels[j]) {
        arr.push(str[i]);
      }
    }
  }

  return arr.join("");
}

console.log(getVowels(string));
