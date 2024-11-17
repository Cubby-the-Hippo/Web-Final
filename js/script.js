function loadHours() {
    document.getElementById('opening-hours').innerHTML = `
        Monday - Thursday: 10 AM - 5 PM<br>
        Friday: 10 AM - 4 PM<br><br>
        For new purchases and longer consultations, please make an appointment with our master. A short call or email is enough!
    `;
}


window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    const scrollThreshold = 10; 

    if (window.scrollY > scrollThreshold) {
        navbar.style.backgroundColor = "rgba(52, 58, 64, 0.7)"; 
    } else {
        navbar.style.backgroundColor = "rgba(52, 58, 64, 1)";
    }
});


