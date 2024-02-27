document.getElementById("btn-hide").addEventListener("click", function() {
    hideProfile();
});
document.getElementById("btn-show").addEventListener("click", function() {
    showProfile();
});

function hideProfile() {
    let profile = document.getElementById("profile");
    let showButton = document.getElementById("btn-show");
    
    profile.classList.toggle('hide');
    setTimeout(() => {  profile.classList.toggle('hide-element'); }, 750);
    setTimeout(() => {  showButton.classList.toggle('hide-element'); }, 750);
    setTimeout(() => {  showButton.classList.toggle('hide'); }, 800);
}

function showProfile() {
    let profile = document.getElementById("profile");
    let showButton = document.getElementById("btn-show");
    
    showButton.classList.toggle('hide');
    setTimeout(() => {  showButton.classList.toggle('hide-element'); }, 600);
    setTimeout(() => {  profile.classList.toggle('hide-element'); }, 600);
    setTimeout(() => {  profile.classList.toggle('hide'); }, 650);
}