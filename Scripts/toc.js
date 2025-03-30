function toggleToc() {
    const tocdiv = document.getElementById("toc-main");
    const tocbtn = document.getElementById("togglebtn");
    
    if (tocdiv.style.display === "none") {
        tocdiv.style.display = "block";
        tocbtn.textContent = "Hide";
    } else {
        tocdiv.style.display = "none";
        tocbtn.textContent = "Show";
    }
}