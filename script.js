
var dropdown = document.getElementsByClassName("dropdown");
var i;

for (i = 0; i < dropdown.length; i++) {
    var content = dropdown[i].getElementsByClassName("dropdown-content")[0];
    var button = dropdown[i].getElementsByClassName("dropbtn")[0];

    button.addEventListener("click", function () {
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}


var dropdown__2 = document.getElementsByClassName("dropdown__2");
var i;

for (i = 0; i < dropdown__2.length; i++) {
    var content = dropdown__2[i].getElementsByClassName("dropdown-content__2")[0];
    var button = dropdown__2[i].getElementsByClassName("dropbtn__2")[0];

    button.addEventListener("click", function () {
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

var dropdown__3 = document.getElementsByClassName("dropdown__3");
var i;

for (i = 0; i < dropdown__3.length; i++) {
    var content = dropdown__3[i].getElementsByClassName("dropdown-content__3")[0];
    var button = dropdown__3[i].getElementsByClassName("dropbtn__3")[0];

    button.addEventListener("click", function () {
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}