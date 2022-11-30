
function searchPage() {

    var form = "";
    var input = "";
    var movielink = "";
    var movieid = "";
    var searchparam = "/search?";
    var locator = "tt";

    movielink = document.getElementsByClassName("userURL").value;
    movieid = movielink.substring(movielink.indexOf(locator) + 25);
    searchparam = ("http://192.168.1.109:3000/search?movieid=" + movieid);
    return(searchparam);
}
