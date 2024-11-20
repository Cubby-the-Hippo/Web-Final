window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    const scrollThreshold = 10; 

    if (window.scrollY > scrollThreshold) {
        navbar.style.backgroundColor = "rgba(52, 58, 64, 0.7)"; 
    } else {
        navbar.style.backgroundColor = "rgba(52, 58, 64, 1)";
    }
});



document.getElementById("basicPackageForm").addEventListener("submit", handleFormSubmit);
document.getElementById("advancedPackageForm").addEventListener("submit", handleFormSubmit);
document.getElementById("premiumPackageForm").addEventListener("submit", handleFormSubmit);


function handleFormSubmit(event) {
    event.preventDefault(); 


    var modalBody = this.closest(".modal-body");


    modalBody.innerHTML = '<p style="color: green; font-weight: bold;">Form Completed! Thank you for your submission.</p>';
}


