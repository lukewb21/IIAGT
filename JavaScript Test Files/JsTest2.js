var interval = setInterval(function() {
  let movies = new Array(
    "Iron Man",
    "Spirited Away",
    "Breaking Bad",
    "Shawshank Redemption",
    "Friends",
    "Toy Story 3",
    "Citizen Kane");

  const placeholder = (movies[i] + '...');
  x = (x+1);
  //document.getElementsByClassName('userURL')[0].placeholder = placeholder;
  console.log(placeholder);

}, 1000);
