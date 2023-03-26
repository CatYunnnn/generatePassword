function generatorPassword(options) {
  //define things user might want
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = lowerCaseLetters.toUpperCase();
  const numbers = "1234567890";
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/';
  let password = "";
  //define dummy data

  //create a collection to store things user picked up
  let collection = [];
  if (options.lowercase === "on") {
    collection = collection.concat(lowerCaseLetters.split(""));
  }

  if (options.uppercase === "on") {
    collection = collection.concat(upperCaseLetters.split(""));
  }

  if (options.numbers === "on") {
    collection = collection.concat(numbers.split(""));
  }

  if (options.symbols === "on") {
    collection = collection.concat(symbols.split(""));
  }

  if (options.excludeCharacters) {
    collection = collection.filter(
      (char) => !options.excludeCharacters.includes(char)
    );
  }
  function sample(collection) {
    let randomIndex = Math.trunc(Math.random() * collection.length);
    return collection[randomIndex];
  }
  for (let i = 0; i < options.length; i++) {
    password += sample(collection);
  }
  if (collection.length === 0) {
    return "There is no valid characters in your selection.";
  } else {
    return password;
  }
  //remove things user dot not need
  //start generating password
  //return password
}
module.exports = generatorPassword;
