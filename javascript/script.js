var secrets = true;
var keylog = "";
var didcolors = false;
var mobile = false;
var temp = document.getElementById("vid");

function rand(min, max) {
  return Math.floor(Math.random() * max) + min;
}

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.getElementById("mobile").style.visibility = "visible";
    mobile = true;
}

$.backstretch("background/" + String(rand(1, 8)) + ".jpeg", {duration: 0, fade: 750})
$("#vid").hide();

setInterval(() => {
	$.backstretch("background/" + String(rand(1, 8)) + ".jpeg", {duration: 0, fade: 750});
}, 30000);


document.getElementById("vid").addEventListener("ended", function(){
    if($("#vid").is(":visible")){
        $("#vid").fadeOut("slow", "linear");
    }
});

document.getElementById("vid").onpause = function(){
    if($("#vid").is(":visible")){
        $("#vid").fadeOut("slow", "linear");
    }
};

document.onkeydown = function (e){
    if(secrets){
        keylog += e.key;
        if(keylog.includes("awesome")){
            didcolors = !didcolors;
            keylog = "";
        }
        if(didcolors){
            document.getElementById("main-text").style.mixBlendMode = "normal";
            setInterval(() => 
            {
                if(!didcolors){
                    return;
                }
                document.getElementById("main-text").style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
            }, 1);
        }
        else{
            document.getElementById("main-text").style.mixBlendMode = "difference";
	    document.getElementById("main-text").style.color = "white"
        }
    }
    a(e);
};

document.getElementById("secretText").addEventListener("input", () => {secretText();})
document.getElementById("mobile-only").addEventListener("input", () => {
    c=document.getElementById("mobile-only");
    if(c.value.includes('c ')){
        a_mobile(c.value[2], "c");
    }else if(c.value.includes('a ')){
        a_mobile(c.value[2], "a")
    }
});
function skipnav() {
    document.getElementById("main").style.visibility = "hidden";
    document.getElementById("main-text").innerHTML = "PRESS ALT K !!"
    document.getElementById("main-text").style.mixBlendMode = "difference";
    document.getElementById("main-text").style.color = "white"
    
    didcolors = false;
    secrets = false;

    try{
        $("#vid").pause();
    }catch(Exception){
        return;
    }
}

function secretChecked(){
    if(document.getElementById('secret').checked && secrets){
        console.log("checked");
        alert("YoU haVe fOUnD A scErEt");
        play(5);
    }
}

function secretText() {
    if(secrets){
        if (document.getElementById("secretText").value == "text") {
            play(1);
        }
        if (document.getElementById("secretText").value == "abcdefghijklmnopqrstuvwxyz") {
            play(2);
        }
        if(document.getElementById("secretText").value == "something random"){
            play(3);
        }
    }
}


function play(file){
    var vid = document.getElementById("vid");

    if(!$("#vid").is(":visible") && !(vid.currentTime > 0 && !vid.paused && !vid.ended && vid.readyState > 2)){
        $("#vid").fadeToggle("slow", "linear");
    }

    vid.src = "videos/" + file.toString() + ".mp4";

    vid.play();
}

function a_mobile(e, d) {
    if (e == 'k' && d == "a") {

        // please dont 
        alert('Look');
        play(69);

    }
    if (d == "c" && secrets) {
        if (e == 'a') {
            // please dont 
            alert('Look at me');
            play(9);
        }
        if (e == 'b') {
            // please dont 
            alert('Look at me');
            play(4);
        }
        if (e == 'c') {
            // please dont 
            alert('Look at me');
            play(10);
        }
        if (e == 'd') {
            // please dont 
            alert('Look at me');
            play(6);
        }
        if (e == 'e') {
            // please dont 
            alert('Look at me');
            play(8);
        }
        if (e == 'f') {
            // please dont 
            alert('Look at me');
            play(7);
        }
    }
}

function a(e) {
    if (e.key == 'k' && e.altKey) {
        e.preventDefault();

        // please dont 
        alert('Look');
        play(69);

    }
    if (e.ctrlKey && secrets) {
        if (e.key == 'a') {
            e.preventDefault();

            // please dont 
            alert('Look at me');
            play(9);
        }
        if (e.key == 'b') {
            e.preventDefault();

            // please dont 
            alert('Look at me');
            play(4);
        }
        if (e.key == 'c') {
            e.preventDefault();

            // please dont 
            alert('Look at me');
            play(10);
        }
        if (e.key == 'd') {
            e.preventDefault();
            // please dont 
            alert('Look at me');
            play(6);
        }
        if (e.key == 'e') {
            e.preventDefault();

            // please dont 
            alert('Look at me');
            play(8);
        }
        if (e.key == 'f') {
            e.preventDefault();

            // please dont 
            alert('Look at me');
            play(7);
        }
    }
}
