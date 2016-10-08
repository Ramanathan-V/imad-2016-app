// Counter code
var button = document.getElementById('count');
 

button.onclick = function () {
    count = count + 1;
    var span = document.getElementById('count');
    span.innerHTML = count.toString();
};
