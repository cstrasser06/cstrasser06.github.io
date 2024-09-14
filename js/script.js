
document.getElementById('going-up')
    .addEventListener('click', function(e) {
e.preventDefault();
    window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
