var coll = document.getElementsByClassName('collapsible');
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var box2 = this.nextElementSibling;
    if (box2.style.display === 'block') {
      box2.style.display = 'none';
    } else {
      box2.style.display = 'block';
    }
  });
}
