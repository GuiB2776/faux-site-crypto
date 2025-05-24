window.addEventListener('DOMContentLoaded', function() 
{
    // Changer les textes et liens du footer
    document.getElementById('site-name').textContent = "CRYPTO Guillaume";
    document.getElementById('copyright').textContent = new Date().getFullYear();
    document.getElementById('cgu-link').href = "cgu.html";
    document.getElementById('rgpd-link').href = "rgpd.html";
});