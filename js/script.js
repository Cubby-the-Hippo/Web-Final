window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    const scrollThreshold = 10; 

    if (window.scrollY > scrollThreshold) {
        navbar.style.backgroundColor = "rgba(52, 58, 64, 0.7)"; 
    } else {
        navbar.style.backgroundColor = "rgba(52, 58, 64, 1)";
    }
});


