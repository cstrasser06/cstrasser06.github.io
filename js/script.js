
document.getElementById('going-up')
    .addEventListener('click', function(e) {
e.preventDefault();
    window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});


const blocks = document.querySelectorAll('.block');


const observerOptions = {
    threshold: 0.5 // 50% des Elements müssen sichtbar sein, bevor die Animation startet
};


const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Klasse hinzufügen, wenn der Block sichtbar ist
            entry.target.classList.add('show');
        }
    });
};

// IntersectionObserver initialisieren
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Jeden Block beobachten
blocks.forEach(block => {
    observer.observe(block);
});

document.getElementById('going-down')
    .addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 10000,
            behavior: 'smooth',
        });
    });



