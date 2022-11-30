//CREATES ARRAY WITH POSSIBLE PLACEHOLDERS//
i = 0;
let movies = new Array("Iron Man", "Spirited Away", "Breaking Bad", "Shawshank Redemption", "Friends", "Toy Story 3", "Citizen Kane");
pause();

  function pause() {
    setTimeout(placeholderchange(), 3000);
  }



  function placeholderchange() {

    if (i > 7)
     i = 0;



    const placeholder = (movies[i] + '...');
    //document.getElementsByClassName('userURL')[0].placeholder = placeholder;
    console.log(placeholder);
    i = (i+1);
    pause();
  }
