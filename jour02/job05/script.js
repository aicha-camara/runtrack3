window.addEventListener("scroll", function() {
    var body = document.body;
    var scrollHeight = body.scrollHeight - window.innerHeight; 
    var scrollTop = window.scrollY; 

    var scrollPercent = (scrollTop / scrollHeight) * 100; 

    var hue = Math.round((scrollPercent / 100) * 120); 

    var footer = document.querySelector("footer");
    footer.style.backgroundColor = "hsl(" + hue + ", 100%, 50%)";
});
