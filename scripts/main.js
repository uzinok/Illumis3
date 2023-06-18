"use strict";

window.addEventListener('load', function () {
  var scrollElem = document.querySelectorAll('[data-href]');
  for (var i = 0; i < scrollElem.length; i++) {
    scrollElem[i].addEventListener('click', function () {
      console.log(this);
      window.location.hash = '#' + this.dataset.href;
      var element = document.querySelector("#".concat(this.dataset.href));
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    });
  }
  var likes = document.querySelectorAll('.like');
  for (var _i = 0; _i < likes.length; _i++) {
    likes[_i].addEventListener('click', function () {
      if (this.classList.contains('like--down')) {
        this.classList.remove('like--down');
        this.innerText = --this.innerText;
      } else {
        this.classList.add('like--down');
        this.innerText = ++this.innerText;
        if (this.parentNode.querySelector('.dislike--down')) {
          this.parentNode.querySelector('.dislike--down').classList.toggle('dislike--down');
        }
      }
    });
  }
  var dislikes = document.querySelectorAll('.dislike');
  for (var _i2 = 0; _i2 < dislikes.length; _i2++) {
    dislikes[_i2].addEventListener('click', function () {
      this.classList.toggle('dislike--down');
      if (this.parentNode.querySelector('.like--down')) {
        if (this.parentNode.querySelector('.like--down')) {
          this.parentNode.querySelector('.like--down').innerText = --this.parentNode.querySelector('.like--down').innerText;
          this.parentNode.querySelector('.like--down').classList.toggle('like--down');
        }
      }
    });
  }
});
function dtime(num) {
  var date = new Date();
  date.setDate(date.getDate() + num);
  var options = {
    month: 'long',
    day: 'numeric'
  };
  document.write(date.toLocaleString("en-US", options));
}