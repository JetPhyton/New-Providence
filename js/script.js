function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});
;


document.onclick=function(event) {
  target = event.target;

  var burg = document.getElementsByClassName('header-menu__burger');
  var burger_menu = document.getElementsByClassName('header-menu__burger-list');
  var customers = document.getElementsByClassName('customers__img-item');
  var customers_review = document.getElementsByClassName('customers__item')

  if(target.classList == "header-menu__burger" || target.classList == "header-menu__burger_active"){
    burger_menu[0].classList.toggle("header-menu__burger-list_active");
    burg[0].classList.toggle('header-menu__burger_active');
  }else {
    burger_menu[0].classList.remove("header-menu__burger-list_active");
    burg[0].classList.remove('header-menu__burger_active');
  }

  if(target.classList == 'one'){
    showCustomer(slideIndex = 1);
  }
  if(target.classList == 'two'){
    showCustomer(slideIndex = 2);
  }
  if(target.classList == 'three'){
    showCustomer(slideIndex = 3);
  }
}
var slideIndex = 2;
showCustomer(slideIndex);

function plusSlides(n) {
  showCustomer(slideIndex += n);
}
function Customer(n) {
  showCustomer(slideIndex = n);
}

function showCustomer(n) {
  let slides = document.getElementsByClassName('customers__item');
  let custumers = document.getElementsByClassName('customers__img-item');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove('customers__item_active');
  }
  for (var i = 0; i < custumers.length; i++) {
    custumers[i].classList.remove('customers__img-item_active');
  }
  slides[slideIndex-1].classList.add('customers__item_active');
  custumers[slideIndex-1].classList.add('customers__img-item_active');
}


function ChangeBtn() {
  var btnC = document.getElementsByClassName('plan__btn');
  var par1 =document.getElementsByClassName('par1');
  var par2 =document.getElementsByClassName('par2');
  btnC[0].classList.toggle('plan__btn_active');
  par1[0].classList.toggle('par_active');
  par2[0].classList.toggle('par_active');

}
