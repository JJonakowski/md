document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('header');
  var navToggle = document.getElementById('nav-toggle');
  var navList = document.getElementById('navlist');
  var left = document.getElementById('left');

  if (header && navToggle && navList) {
    navToggle.addEventListener('click', function () {
      var isOpen = header.classList.toggle('menu-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  if (window.Cufon) {
    window.Cufon.replace('h1,h2');

    if (typeof window.Cufon.onCompleted === 'function') {
      window.Cufon.onCompleted(function () {
        document.querySelectorAll('#header h1, #header h2').forEach(function (el) {
          el.style.visibility = 'visible';
        });
      });
    }
  }

  var firstBlock = document.querySelector('#right .block:first-child');

  if (!left || !firstBlock) {
    return;
  }

  var leftHeight = left.offsetHeight;
  var blockHeight = firstBlock.offsetHeight;
  // var blockContents = document.querySelectorAll('#right .block .content');
  //
  // if (leftHeight > blockHeight && leftHeight < 400) {
  //   blockContents.forEach(function (content) {
  //     content.style.height = leftHeight - 72 + 'px';
  //   });
  //   return;
  // }
  //
  // blockContents.forEach(function (content) {
  //   content.style.height = '250px';
  // });

  if (document.body.classList.contains('front')) {
    left.style.height = blockHeight + 25 + 'px';
  }
});
