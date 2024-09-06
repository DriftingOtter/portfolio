document.getElementById('menu-toggle').addEventListener('click', function() {
    var content = document.getElementById('menu-content');
    
    // Toggle the display style
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
});

