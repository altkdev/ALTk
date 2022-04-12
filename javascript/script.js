var secrets = true;
var keylog = "";
var didcolors = false;
var temp = document.getElementById("vid");

function rand(min, max) {
  return Math.floor(Math.random() * max) + min;
}

$.backstretch("background/" + String(rand(1, 8)) + ".jpeg", {duration: 0, fade: 750})
$("#vid").hide();

setInterval(() => {
	$.backstretch("background/" + String(rand(1, 8)) + ".jpeg", {duration: 0, fade: 750});
}, 30000);


document.getElementById("vid").addEventListener("ended", function(){
    if($("#vid").is(":visible")){
        $("#vid").fadeToggle("slow", "linear");
    }
});

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

function skipnav() {
    document.getElementById("main").style.visibility = "hidden";
    document.getElementById("main-text").innerHTML = "PRESS ALT K !!"
    document.getElementById("main-text").style.mixBlendMode = "difference";
    document.getElementById("main-text").style.color = "white"
    
    didcolors = false;
    secrets = false;

    $("#vid").pause();
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

function a(e) {
    if (e.key.toLowerCase() === 'k' && e.altKey) {
        e.preventDefault();

        // please dont 
        alert('Look');
        play(69);

    }
    if (e.ctrlKey && secrets) {
        if (e.key.toLowerCase() === 'a') {
            e.preventDefault();

            // please dont 
            alert('Look at me');
            play(9);
        }
        if (e.key.toLowerCase() === 'b') {
            e.preventDefault();

            // please dont 
            alert('Look at me');
            play(4);
        }
        if (e.key.toLowerCase() === 'c') {
            e.preventDefault();

            // please dont 
            alert('Look at me');
            play(10);
        }
        if (e.key.toLowerCase() === 'd') {
            e.preventDefault();
            // please dont 
            alert('Look at me');
            play(6);
        }
        if (e.key.toLowerCase() === 'e') {
            e.preventDefault();

            // please dont 
            alert('Look at me');
            play(8);
        }
        if (e.key.toLowerCase() === 'f') {
            e.preventDefault();

            // please dont 
            alert('Look at me');
            play(7);
        }
    }
}
