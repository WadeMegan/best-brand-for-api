const anagrams = function(word){
    var anagramResult = [];
    // Base case, word has 1 character.
    if (word.length === 1) return [word];
    
    // Else, go through every letter of the word
    for (var i = 0; i < word.length; i++) {
      var restOfWord = word.substring(0, i) + word.substring(i + 1);
      var results = anagrams(restOfWord);
      
      for (var j = 0; j < results.length; j++) {
        anagramResult.push(word[i] + results[j]);
      }
    }
    return anagramResult;
}

console.log(anagrams('cats'))