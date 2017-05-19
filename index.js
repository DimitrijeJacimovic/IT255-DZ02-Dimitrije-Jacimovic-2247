var imageArray = ["images/Slika1.jpg", "images/Slika2.jpg", "images/Slika3.jpg"];
var dugmePrevious = document.getElementById("previous");
var dugmeNext = document.getElementById("next");
var slika = document.getElementById("cPicture");
var i = 0;

function promeniSliku(i)
{
    if(i <= 0)
    {
        i = Math.abs(i);
        slika.setAttribute("src", imageArray[(3 * i * imageArray.length - i) % 3]);
        return;
    }
    slika.setAttribute("src", imageArray[i%3]);
}
dugmePrevious.addEventListener('click', function(){promeniSliku(--i)});
dugmeNext.addEventListener('click', function(){promeniSliku(++i)});