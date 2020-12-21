function openNav() {
    document.getElementById("mobileSideNav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mobileSideNav").style.width = "0";
}

function toggleNav() {
    var w = document.getElementById("mobileSideNav").style.width;
    if (w == "250px") {
        closeNav();
    } else {
        openNav();
    }
}