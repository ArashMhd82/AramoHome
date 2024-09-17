const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
})
const hiddenElemnts = document.querySelectorAll('.hiddenn');
hiddenElemnts.forEach((el) => observer.observe(el));
