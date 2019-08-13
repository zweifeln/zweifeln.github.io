var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += "active";
}


//////////////////////////////

var slideIndex = [{% for post in site.categories.photos %}{% if post.slides %}{% if forloop.last == true %}1{% else %}1,{% endif %}{% endif %}{% endfor %}];
var slideId = [{% for post in site.categories.photos %}{% if post.slides %}{% if forloop.last == true %}{{ post.slides }}{% else %}{{ post.slides }},{% endif %}{% endif %}{% endfor %}];
{% for post in site.categories.photos %}{% if post.slides %}showSlides(1, {{ forloop.index0 }});{% endif %}{% endfor %}

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n, no) {
  var i;
  var slides = document.getElementsByClassName(slideId[no]);
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex[no]-1].style.display = "block";
  dots[slideIndex[no]-1].className += "active";
}