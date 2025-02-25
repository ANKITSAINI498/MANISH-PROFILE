const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu?.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup?.querySelector(".close-btn");
const signupLoginLink = formPopup?.querySelectorAll(".bottom-link a");
const loginForm = document.querySelector("#login-form");  
const loginMessage = document.querySelector("#login-message");  

// Show mobile menu
hamburgerBtn?.addEventListener("click", () => {
    navbarMenu?.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn?.addEventListener("click", () => hamburgerBtn?.click());

// Show login popup
showPopupBtn?.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn?.addEventListener("click", () => showPopupBtn?.click());

// Show or hide signup form
signupLoginLink?.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup?.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});

// Login Validation Function
loginForm?.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const userId = document.querySelector("#user-id").value;
    const password = document.querySelector("#password").value;

    if (userId === "Manish" && password === "123") {
        window.location.href = "./../nft-card-component/dist/Admin.html"; 
    } else {
        loginMessage.textContent = "It is wrong user ID or password!";
        loginMessage.style.color = "red"; 
    }
});
