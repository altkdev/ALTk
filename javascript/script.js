$(document).ready(function() {
console.log("Welcome to ALTk!");
$("#if-script").show();
$("#if-script").css('visibility', 'visible');
var secrets = true;
var keylog = "";
var didcolors = false;
var mobile = false;
var temp = document.getElementById("vid");
var times = 0
const messages = ["Do you want to delete the world?", "Do you want to delete all the beans in the world?", "Its a bird, its a plane, its another video", "What did you just say to me boy?", " Mario is coming to steal your liver"];
let cookies = navigator.cookieEnabled;
function welcome(){
	  function setCookie(cname, cvalue, exdays) {
	    const d = new Date();
	    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	    let expires = "expires="+d.toUTCString();
	    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	  }

	  function getCookie(cname) {
	    let name = cname + "=";
	    let ca = document.cookie.split(';');
	    for(let i = 0; i < ca.length; i++) {
	      let c = ca[i];
	      while (c.charAt(0) == ' ') {
		c = c.substring(1);
	      }
	      if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	      }
	    }
	    return "";
	  }

	function checkCookie() {
	  let user = getCookie("username");
	  if (user != "") {
	    alert("Welcome again " + user);
	  } else {
	    user = prompt("Please enter your name:", "");
	    if (user != "" && user != null) {
	      setCookie("username", user, 365);
	    }
	  }
	}
	if (cookies = true){
	  checkCookie();	
	}
}

function rand(min, max, other) {
	if (other = 1) {
		return Math.floor(Math.random() * (max - min + 1)) + min
	} else {
		if (other = 2) {
			return Math.floor(Math.random() * max) + min
		}
	}
}

function randalert() {
	alert(messages[rand(0, 4, 1)]);
}

if (navigator.userAgent.toLowerCase().match(/mobile/i)){
	document.getElementById("mobile").style.visibility = "visible";
	mobile = true;
	console.log("You are using a mobile browser")
}
$.backstretch("background/" + String(rand(1, 8, 2)) + ".jpeg", {
	duration: 0,
	fade: 750
});
$("#vid").hide();
setInterval(() => {
	$.backstretch("background/" + String(rand(1, 8, 2)) + ".jpeg", {
		duration: 0,
		fade: 750
	})
}, 3e4);
document.getElementById("vid").addEventListener('pause', function () {
	if ($("#vid").is(":visible")) {
		$("#vid").fadeOut("slow", "linear");
	}
});
document.onkeydown = function (e) {
	if (secrets) {
		keylog += e.key;
		if (keylog.includes("awesome")) {
			didcolors = !didcolors;
			keylog = "";
		}
		if (keylog.includes("break")) {
			keylog = "";
			destroyPage("Y̴̮͛o̸̠̯͝u̸̳͙̒ ̸̧̜́h̵̤̜̅̐a̴̧̧͗v̶̲̔͜è̶̗ ̴̨̇̕d̶̠̆e̶̖͆s̸̙͘t̴̩̒̈́r̴̫̂͜o̶̧͔̾̈́y̷̦͌ę̴͉̿́d̴͖̹̍ ̵̝͛̀ẗ̷͖́h̴̡̹̏͝ì̶̘̱s̴̫̳͛ ̷̘͋̈́p̷̖͖̉͠ȃ̵̱g̶̝̖͐̏ẻ̸̢͖̌");
		}
		if (didcolors) {
			document.getElementById("main-text").style.mixBlendMode = "normal";
			setInterval(() => {
				if (!didcolors) {
					return;
				}
				document.getElementById("main-text").style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
			}, 1)
		} else {
			document.getElementById("main-text").style.mixBlendMode = "difference";
			document.getElementById("main-text").style.color = "white";
		}
	}
	a(e)
};
document.getElementById("skip-nav").addEventListener("click", () => {
	skipnav();
});
	
document.getElementById("secret").addEventListener("change", () => {
	if(!secret){
		try {
			$("#vid").pause()
		} catch (Exception) {
			return
		}
	}
	if(document.getElementById("secret").checked){
		secretChecked();
	}
});
	
document.getElementById("secretText").addEventListener("input", () => {
	secretText();
});
	
document.getElementById("mobile-only").addEventListener("input", () => {
	c = document.getElementById("mobile-only");
	if (c.value.includes('c ')) {
		a_mobile(c.value[2], "c")
	} else if (c.value.includes('a ')) {
		a_mobile(c.value[2], "a")
	}
});

setTimeout(welcome(), 1);

function skipnav() {
	document.getElementById("main").style.visibility = "hidden";
	document.getElementById("main-text").innerHTML = "PRESS ALT K !!";
	document.getElementById("main-text").style.mixBlendMode = "difference";
	document.getElementById("main-text").style.color = "white";
	didcolors = false;
	secrets = false;
	$("a").attr("href", "#");
	try {
		document.getElementById("vid").pause()
	} catch (Exception) {
		return
	}
}

function secretChecked() {
	if (document.getElementById('secret').checked && secrets) {
		console.log("checked");
		alert("YoU haVe fOUnD A scErEt");
		play("The_Funeral", 0)
	}
}

function secretText() {
	if (secrets) {
		if (document.getElementById("secretText").value == "text") {
			play(1, 0)
		}
		if (document.getElementById("secretText").value == "abcdefghijklmnopqrstuvwxyz") {
			play(2, 0)
		}
		if (document.getElementById("secretText").value == "something random") {
			window.open("/ALTk/pages/hELLO.html")
		}
		if (document.getElementById("secretText").value == "69420") {
			play(420, 0)
		}
		if (document.getElementById("secretText").value == "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99") {
			play(800, 0)
		}
	}
}

function play(file, other) {
	var vid = document.getElementById("vid");
	if (!$("#vid").is(":visible") && !(vid.currentTime > 0 && !vid.paused && !vid.ended && vid.readyState > 2)) {
		$("#vid").fadeToggle("slow", "linear")
	}
	if (other = "0") {
		vid.src = "videos/" + file.toString() + ".mp4"
	} else {
		vid.src = "videos/" + file.toString() + other.toString()
	}
	vid.play()
}

function a_mobile(e, d) {
	if (e == 'k' && d == "a") {
		randalert();
		document.getElementById("vid").style.visibility = "visible";
		play(69, 0); 
		var times = times + 1; 
		if (times = 42){
			alert("I like trains if you like trains share ALTk with your friends!");
			times = 0;
		}
		
	}
	if (d == "c" && secrets) {
		if (e == 'a') {
			randalert();
			document.getElementById("vid").style.visibility = "visible";
			play(9, 0)
		}
		if (e == 'b') {
			randalert();
			document.getElementById("vid").style.visibility = "visible";
			play(4, 0)
		}
		if (e == 'c') {
			randalert();
			document.getElementById("vid").style.visibility = "visible";
			play(10, 0)
		}
		if (e == 'd') {
			randalert();
			document.getElementById("vid").style.visibility = "visible";
			play(6, 0)
		}
		if (e == 'e') {
			randalert();
			document.getElementById("vid").style.visibility = "visible";
			play(8, 0)
		}
		if (e == 'f') {
			randalert();
			document.getElementById("vid").style.visibility = "visible";
			play(7, 0)
		}
	}
}

function a(e) {
	if (e.key == 'k' && e.altKey) {
		e.preventDefault();
		randalert();
		play(69, 0)
		var times = times += 1; 
		if (times = 42){
			alert("I like trains if you like trains share ALTk with your friends!");
			times = 0;
		}
	}
	if (e.ctrlKey && secrets) {
		if (e.key == 'a') {
			e.preventDefault();
			randalert();
			play(9, 0)
		}
		if (e.key == 'b') {
			e.preventDefault();
			randalert();
			play(4, 0)
		}
		if (e.key == 'c') {
			e.preventDefault();
			randalert();
			play(10, 0)
		}
		if (e.key == 'd') {
			e.preventDefault();
			randalert();
			play(6, 0)
		}
		if (e.key == 'e') {
			e.preventDefault();
			randalert();
			play(8, 0)
		}
		if (e.key == 'f') {
			e.preventDefault();
			randalert();
			play(7, 0)
		}
	}
}

function destroyPage(message) {
	alert(message);
        txt = "a";
        while(1){
          txt = txt += "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
}
}
});
