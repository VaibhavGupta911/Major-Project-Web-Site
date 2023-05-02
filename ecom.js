


function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    localStorage.setItem(username, password)
    if (username == "Vaibhav Gupta" && password == "pass@123" || username == "htmlcssjs" && password == "password111") {
      
        window.location = "home.html";
        
    }
    else {
        alert("Wrong Username and Password")
return false
    }
   
}


/*
localStorage.setItem("flage",flag)
flag=Boolean(localStorage.getItem("flag"))

if(Boolean(flag)){
    alert("true")
}
else{
    alert("false")
}*/




var myIndex = 0;
carousel();//calling func

function carousel() {
    var x = document.getElementsByClassName("slides");
    for (var i = 0; i < x.length; i++) {//looping over the len of slides ie no of img
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 3 seconds
}


//scroll function
//shop button
function scrollfunshop() {
    window.scrollTo(0, findposfunc(document.getElementById("section2")));
}
//our product button
function scrollfunproduct() {
    window.scrollTo(0, findposfunc(document.getElementById("section2")));
}
//contact button
function scrollfuncontact() {
    window.scrollTo(0, findposfunc(document.getElementById("footer0")));
}
function findposfunc(id) {
    var currenttop = 0;
    if (id.offsetParent) {
        do {
            currenttop += id.offsetTop;
        } while ((id = id.offsetParent));
        return [currenttop];
    }
}

/*
//let num=0;
let a = { 1: 6 }
function test() {

    let x = document.getElementById('test1');
    x.innerHTML = num;
    num = num + 1;
}
/*
var btns = document.getElementsByClassName("td1");
var x= document.getElementById("as1");
function test2(){
    let x=document.getElementById("as1");
    x.innerHTML=655;
}
*/

//let num = document.querySelector('#td1');

/*
let num = document.querySelector('#num');

// Handle number changes
num.addEventListener('input', function () {

    // As a string
    let val = num.value;

    // As a number
    let valAsNumber = parseFloat(num.value);
    let x = document.getElementById("hr4");
    x.innerHTML = val;
    //console.log(typeof val, val);
    //console.log(typeof valAsNumber, valAsNumber);
});

*/


