$(document).ready(function(){

function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

function initate() {
    var style1 = document.getElementById("stylesheet1");
    var style2 = document.getElementById("stylesheet2");

style1.onclick = function () { swapStyleSheet("light.css") };
style2.onclick = function () { swapStyleSheet("reg.css"); };

window.onload = initate;

};