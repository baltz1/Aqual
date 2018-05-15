// Scrolling Effect

var html, body;

window.onload = function() {
  //getting all anchor elements
  var links = document.links;

  //getting html
  html = document.documentElement;

  //getting body
  body = document.body;

  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function() {
      //getting current scroll position
      var scrollTop = Math.round(body.scrollTop || html.scrollTop);
      if (this.hash !== "") {
        //preventing default anchor click behavior
        event.preventDefault();

        //getting element with id found in hash
        var hashElement = document.getElementById(this.hash.substring(1));

        var hashElementTop = 0;
        var obj = hashElement;
        while (obj.offsetParent) {
          hashElementTop += obj.offsetTop;
          obj = obj.offsetParent;
        }
        //getting element's position
        hashElementTop = Math.round(hashElementTop);

        scroll(scrollTop, hashElementTop, this.hash);
      }
    };
  }
};


function scroll(from, to, hash) {
  var timeInterval = 5; //in ms
  var prevScrollTop;
  var increment = to > from ? 10 : -10;

  var scrollByPixel = setInterval(function() {
    //getting current scroll position
    var scrollTop = Math.round(body.scrollTop || html.scrollTop);

    if (
      prevScrollTop == scrollTop ||
      (to > from && scrollTop >= to) ||
      (to < from && scrollTop <= to)
    ) {
      clearInterval(scrollByPixel);
      //Add hash to the url after scrolling
      window.location.hash = hash;
    } else {
      body.scrollTop += increment;
      html.scrollTop += increment;

      prevScrollTop = scrollTop;
    }
  }, timeInterval);
}

//
var images = ['img/maxresdefault.jpg', 'img/sean-pollock-203658-unsplash.jpg','img/nastuh-abootalebi-284882-unsplash.jpg'];
var bgImage = document.getElementById('header');


var i = 0;
setInterval(function() {
      bgImage.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }
}, 6000);
