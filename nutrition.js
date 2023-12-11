function toggleCircles() {
    var circle = document.getElementById("circle");
    var circle2 = document.getElementById("circle2");

    if (circle.style.display === "none") {
        circle.style.display = "block";
        circle2.style.display = "block";
    } else {
        circle.style.display = "none";
        circle2.style.display = "none";
    }
}
