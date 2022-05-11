var secrets = true;
var keylog = "";
var didcolors = false;
var mobile = false;
var temp = document.getElementById("vid");
var message1 = "Do you want to delete the world?";
var message2 = "Do you want to delete all the beans in the world?";
var message3 = "Its a bird, its a plane, its another video";

function rand(min, max) {
  return Math.floor(Math.random() * max) + min;
}
function randalert() {
	alert(mesage + rand(1, 3))
}

if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))  {
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
        randalert();
	document.getElementById("vid").style.visibility = "visible";
        play(69);
    }
    if (d == "c" && secrets) {
        if (e == 'a') {
            randalert();
            document.getElementById("vid").style.visibility = "visible";
            play(9);
        }
        if (e == 'b') {
            randalert();
	    document.getElementById("vid").style.visibility = "visible";
            play(4);
        }
        if (e == 'c') {
            randalert();
	    document.getElementById("vid").style.visibility = "visible";
            play(10);
        }
        if (e == 'd') {
            randalert();
	    document.getElementById("vid").style.visibility = "visible";
            play(6);
        }
        if (e == 'e') {
            randalert();
	    document.getElementById("vid").style.visibility = "visible";
            play(8);
        }
        if (e == 'f') {
            randalert();
	    document.getElementById("vid").style.visibility = "visible";
            play(7);
        }
    }
}

function a(e) {
    if (e.key == 'k' && e.altKey) {
        e.preventDefault();
        randalert();
        play(69);
    }
    if (e.ctrlKey && secrets) {
        if (e.key == 'a') {
            e.preventDefault();
            randalert();
            play(9);
        }
        if (e.key == 'b') {
            e.preventDefault();
	    randalert();
            play(4);
        }
        if (e.key == 'c') {
            e.preventDefault();
            randalert();
            play(10);
        }
        if (e.key == 'd') {
            e.preventDefault();
            randalert();
            play(6);
        }
        if (e.key == 'e') {
            e.preventDefault();
            randalert();
            play(8);
        }
        if (e.key == 'f') {
            e.preventDefault();
            randalert();
            play(7);
        }
    }
}

function destroyPage(message){
	
}
