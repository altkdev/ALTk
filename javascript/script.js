var secrets = true;
var keylog = "";
var didcolors = false;
var mobile = false;
var temp = document.getElementById("vid");
var message = "Do you want to delete the world?";

function rand(min, max) {
  return Math.floor(Math.random() * max) + min;
}

if(navigator.userAgentData.mobile) {
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
        if(document.getElementById("secretText").value == "69420"){
	    play(420);
        }
	if(document.getElementById("secretText").value == "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99"){
	    play(800);
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
        alert(message);
	document.getElementById("vid").style.visibility = "visible";
        play(69);
    }
    if (d == "c" && secrets) {
        if (e == 'a') {
            alert(message);
            document.getElementById("vid").style.visibility = "visible";
            play(9);
        }
        if (e == 'b') {
            alert(message);
	    document.getElementById("vid").style.visibility = "visible";
            play(4);
        }
        if (e == 'c') {
            alert(message);
	    document.getElementById("vid").style.visibility = "visible";
            play(10);
        }
        if (e == 'd') {
            alert(message);
	    document.getElementById("vid").style.visibility = "visible";
            play(6);
        }
        if (e == 'e') {
            alert(message);
	    document.getElementById("vid").style.visibility = "visible";
            play(8);
        }
        if (e == 'f') {
            alert(message);
	    document.getElementById("vid").style.visibility = "visible";
            play(7);
        }
    }
}

function a(e) {
    if (e.key == 'k' && e.altKey) {
        e.preventDefault();
        alert(message);
        play(69);
    }
    if (e.ctrlKey && secrets) {
        if (e.key == 'a') {
            e.preventDefault();
            alert(message);
            play(9);
        }
        if (e.key == 'b') {
            e.preventDefault();
	    alert(message);
            play(4);
        }
        if (e.key == 'c') {
            e.preventDefault();
            alert(message);
            play(10);
        }
        if (e.key == 'd') {
            e.preventDefault();
            alert(message);
            play(6);
        }
        if (e.key == 'e') {
            e.preventDefault();
            alert(message);
            play(8);
        }
        if (e.key == 'f') {
            e.preventDefault();
            alert(message);
            play(7);
        }
    }
}
