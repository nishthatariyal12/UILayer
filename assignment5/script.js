var data = 0;
  
//printing default value of data that is 0 in h2 tag
document.getElementById("counter").innerText = data;
  
//creation of increment function
function increment1() {
    data = data + 1;
    document.getElementById("counter").innerText = data;
}
//creation of decrement function
function decrement1() {
    data = data - 1;
    document.getElementById("counter").innerText = data;
}
var data2=0;
document.getElementById("counter1").innerText = data2;

  
function increment2() {
    data2= data2 + 2;
    document.getElementById("counter1").innerText = data2;
}
//creation of decrement function
function decrement2() {
    data2 = data2 - 2;
    document.getElementById("counter1").innerText = data2;
}