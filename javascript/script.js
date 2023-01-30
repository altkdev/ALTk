$(document).ready(function() {
//#region Variables
var secretsAreOn = true;
var keyLog = "";
var image = 0;
var hasShownAllSecretsAlert = false;
var hasDoneRainbowText = false;
var hasLoaded = false;
var pageIsDestroyed = false;
var timesVisitedWebsite = 0;
var isOnApple = false;
var autoPlay = false;
var himerflab = 0;
var slideshow = 30000;
var vidToPlay = "";
var noVidOption = false;
var metaThemeColor = document.querySelector("meta[name=theme-color]");
var a = ""; var b = ""; var c = ""; var d = ""; var e = ""; var f = ""; var g = ""; var h = ""; var i = ""; var j = ""; var k = ""; var l = ""; var m = ""; var n = ""; var o = ""; var p = ""; var q = ""; var r = ""
const urlParams = new URLSearchParams(new URL(window.location.href).search);
const da = new Date();
const date = da.getMonth();
const themeColor = ["#b847c1", "#a0989f", "#032b49", "#7c859c", "#7d6443", "#30272a", "#6d7c26", "#45343e"]
const themeColorChristmas = ["#414745", "#5b3920", "#957790", "#485dd1", "#dfa437", "#a58158", "#977c63"]
const games = ["https://mashpoe.github.io/1D-Game/", "http://jcw87.github.io/c2-sans-fight/", "https://altk.xyz/pages/lowres.html/?game=2048%20Classic"]
const messages = ["Do you want to delete the world?", "luigi is coming to steal your soul", "Do you want to delete all the beans in the world?", "Its a bird, its a plane, its another video", "What did you just say to me boy?", " Mario is coming to steal your liver", "your gay (having or showing a merry, lively mood)", "The duolingo bird is coming for your family", "undefined", "hehehe ha", "Rick astley did consider giving you up once", "mort is coming to steal your toes"];

//#region Zalgo Variables
const zalgo_up = [
	'\u030d', /*     ̍     */		'\u030e', /*     ̎     */		'\u0304', /*     ̄     */		'\u0305', /*     ̅     */
	'\u033f', /*     ̿     */		'\u0311', /*     ̑     */		'\u0306', /*     ̆     */		'\u0310', /*     ̐     */
	'\u0352', /*     ͒     */		'\u0357', /*     ͗     */		'\u0351', /*     ͑     */		'\u0307', /*     ̇     */
	'\u0308', /*     ̈     */		'\u030a', /*     ̊     */		'\u0342', /*     ͂     */		'\u0343', /*     ̓     */
	'\u0344', /*     ̈́     */		'\u034a', /*     ͊     */		'\u034b', /*     ͋     */		'\u034c', /*     ͌     */
	'\u0303', /*     ̃     */		'\u0302', /*     ̂     */		'\u030c', /*     ̌     */		'\u0350', /*     ͐     */
	'\u0300', /*     ̀     */		'\u0301', /*     ́     */		'\u030b', /*     ̋     */		'\u030f', /*     ̏     */
	'\u0312', /*     ̒     */		'\u0313', /*     ̓     */		'\u0314', /*     ̔     */		'\u033d', /*     ̽     */
	'\u0309', /*     ̉     */		'\u0363', /*     ͣ     */		'\u0364', /*     ͤ     */		'\u0365', /*     ͥ     */
	'\u0366', /*     ͦ     */		'\u0367', /*     ͧ     */		'\u0368', /*     ͨ     */		'\u0369', /*     ͩ     */
	'\u036a', /*     ͪ     */		'\u036b', /*     ͫ     */		'\u036c', /*     ͬ     */		'\u036d', /*     ͭ     */
	'\u036e', /*     ͮ     */		'\u036f', /*     ͯ     */		'\u033e', /*     ̾     */		'\u035b', /*     ͛     */
	'\u0346', /*     ͆     */		'\u031a' /*     ̚     */
];

//those go DOWN
const zalgo_down = [
	'\u0316', /*     ̖     */		'\u0317', /*     ̗     */		'\u0318', /*     ̘     */		'\u0319', /*     ̙     */
	'\u031c', /*     ̜     */		'\u031d', /*     ̝     */		'\u031e', /*     ̞     */		'\u031f', /*     ̟     */
	'\u0320', /*     ̠     */		'\u0324', /*     ̤     */		'\u0325', /*     ̥     */		'\u0326', /*     ̦     */
	'\u0329', /*     ̩     */		'\u032a', /*     ̪     */		'\u032b', /*     ̫     */		'\u032c', /*     ̬     */
	'\u032d', /*     ̭     */		'\u032e', /*     ̮     */		'\u032f', /*     ̯     */		'\u0330', /*     ̰     */
	'\u0331', /*     ̱     */		'\u0332', /*     ̲     */		'\u0333', /*     ̳     */		'\u0339', /*     ̹     */
	'\u033a', /*     ̺     */		'\u033b', /*     ̻     */		'\u033c', /*     ̼     */		'\u0345', /*     ͅ     */
	'\u0347', /*     ͇     */		'\u0348', /*     ͈     */		'\u0349', /*     ͉     */		'\u034d', /*     ͍     */
	'\u034e', /*     ͎     */		'\u0353', /*     ͓     */		'\u0354', /*     ͔     */		'\u0355', /*     ͕     */
	'\u0356', /*     ͖     */		'\u0359', /*     ͙     */		'\u035a', /*     ͚     */		'\u0323' /*     ̣     */
];

//those always stay in the middle
const zalgo_mid = [
	'\u0315', /*     ̕     */		'\u031b', /*     ̛     */		'\u0340', /*     ̀     */		'\u0341', /*     ́     */
	'\u0358', /*     ͘     */		'\u0321', /*     ̡     */		'\u0322', /*     ̢     */		'\u0327', /*     ̧     */
	'\u0328', /*     ̨     */		'\u0334', /*     ̴     */		'\u0335', /*     ̵     */		'\u0336', /*     ̶     */
	'\u034f', /*     ͏     */		'\u035c', /*     ͜     */		'\u035d', /*     ͝     */		'\u035e', /*     ͞     */
	'\u035f', /*     ͟     */		'\u0360', /*     ͠     */		'\u0362', /*     ͢     */		'\u0338', /*     ̸     */
	'\u0337', /*     ̷     */		'\u0361', /*     ͡     */		'\u0489' /*     ҉_     */		
];
//#endregion

//#endregion

//#region Setting Visibility For Elements and Other Stuff
$("#if-script").show();
$("#if-script").css('visibility', 'visible');
$("#clickLoader").hide();
$("#all-the-stuff").hide();
$("#vid").hide();
$("#destroyed").hide();
$("a").show()
$("a").css('visibility', 'visible');
if(urlParams.get('role') == "true" || urlParams.get('role') == "1") {
	autoPlay = true;
	noVidOption = true;
}

if(urlParams.has('slideshow')) {
	slideshow = parseInt(urlParams.get('slideshow'))
	$("#all-the-stuff").innerHTML = ""
}
	
if(urlParams.get('loop') == "true") {
	document.getElementById("vid").loop = true;
	document.getElementById("vid").load();
}

if(urlParams.has('vid') && !noVidOption){
    switch(urlParams.get('vid')) {
	    case '69' :
               urlParams.delete('vid')
               urlParams.append('role', 'true')
	       break;
	    case '1' :
	       vidToPlay = "1";
               break;
	    case '2' :
	       vidToPlay = "2";
	       break;
	    case '4' :
	       vidToPlay = "4";
	       break;
	    case '5' :
	       vidToPlay = "5";
	       break;
	    case '6' :
	       vidToPlay = "6";
	       break;
	    case '7' :
	       vidToPlay = "7";
	       break;
	    case '8' :
	       vidToPlay = "8";
	       break;
	    case '9' :
	       vidToPlay = "9";
	       break;
	    case '10' :
	       vidToPlay = "10";
	       break;
	    case '11' :
	       vidToPlay = "11";
	       break;
	    case '12' :
	       vidToPlay = "12";
	       break;
            case '13' :
               vidToPlay = "13";
               break;
	    case '420' :
	       vidToPlay = "420";
	       break;
	    case '800' :
	       vidToPlay = "800";
	       break;
	    case 'The_Funeral' :
	       vidToPlay = "The_Funeral";
	       break;
	    case 'no%20ones%20around%20to%20help' :
	       vidToPlay = "no ones around to help";
	       break;
	    default : 
	        alert("you or your friend tried to play a video but the 'vid' parameter is set to an unknown video")
		break;
	}
}
//#endregion

//#region Functions
//#region Zalgo
//https://codepen.io/captaincowtj/pen/dYzeWy?editors=1000
function is_zalgo_char(c)
{
	var i;
	for(i=0; i<zalgo_up.length; i++){
		if(c == zalgo_up[i])
			return true;
	}
	for(i=0; i<zalgo_down.length; i++){
		if(c == zalgo_down[i])
			return true;
	}
	for(i=0; i<zalgo_mid.length; i++){
		if(c == zalgo_mid[i])
			return true;
	}
	return false;
}

function zalgo(text){
	
	var newtxt = '';
	for(var i=0; i<text.length; i++){
		if(is_zalgo_char(text.substr(i, 1)))
      		continue;

		newtxt += text.substr(i, 1);
		
		for(var j=0; j<Math.floor(Math.random() * 8); j++)
			newtxt += randZalgoChar(zalgo_up);

		for(var j=0; j<Math.floor(Math.random() * 2); j++)
			newtxt += randZalgoChar(zalgo_mid);

		for(var j=0; j<Math.floor(Math.random() * 8); j++)
			newtxt += randZalgoChar(zalgo_down);
	}
	return newtxt;
}

function randZalgoChar(array)
{
	var ind = Math.floor(Math.random() * array.length);
	return array[ind];
}
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  return document.cookie = cname + "=" + cvalue.toString() + ";" + expires + ";path=/" + ";SameSite=Strict";
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

if (getCookie("firstTime") == ""){
  setCookie("a", "0", 10000000000);
  setCookie("b", "0", 10000000000);
  setCookie("c", "0", 10000000000);
  setCookie("d", "0", 10000000000);
  setCookie("e", "0", 10000000000);
  setCookie("f", "0", 10000000000);
  setCookie("g", "0", 10000000000);
  setCookie("h", "0", 10000000000);
  setCookie("i", "0", 10000000000);
  setCookie("j", "0", 10000000000);
  setCookie("k", "0", 10000000000);
  setCookie("l", "0", 10000000000);
  setCookie("m", "0", 10000000000);
  setCookie("n", "0", 10000000000);
  setCookie("o", "0", 10000000000);
  setCookie("p", "0", 10000000000);
  setCookie("q", "0", 10000000000);
  setCookie("r", "0", 10000000000);
  setCookie("firstTime", 0, 10000000000)
}
//#endregion
//#region Miscellaneous functions

function motd() {
	if(secretsAreOn){
		alert ("altk has a discord server at http://discord.altk.xyz");
		alert ("also try to press the tab key");
		window.location.replace("http://discord.altk.xyz");
		setCookie("a", 1, 1000000000)
	}
}

function play(file) {
	var vid = document.getElementById("vid");

	if (!$("#vid").is(":visible") && !(vid.currentTime > 0 && !vid.paused && !vid.ended && vid.readyState > 2)) {
		$("#vid").fadeToggle("slow", "linear")
		vid.muted = true
	}

	vid.src = "videos/" + file.toString() + ".mp4"
	vid.muted = false
	vid.play()
}

function randAlert() {
	alert(messages[Math.floor(Math.random() * messages.length)]);
}

function destroyPage(message) {
	$.backstretch("destroy")
	//$.backstretch("background/destroy.png");
	$("#all-the-stuff").hide();
	document.getElementById("christmasStuff").style.visibility = "hidden";
	snowStorm.stop();
	if(isOnApple){
		document.title = zalgo("CMDk");
	}
	else{
		document.title = zalgo("ALTk");
	}
	document.body.style.background = "black";
	$("#destroyed").show();
	try {
		$("#vid").pause()
	} catch (Exception) {
	}
	alert(message);
}
//#endregion
//#region Secrets
function josh() {
	$.backstretch("destroy")
	$.backstretch("background/josh.jpeg")
}
function skipNav() {
	if(secretsAreOn){
		document.getElementById("main").style.visibility = "hidden";

		if(!isOnApple){
			document.getElementById("main-text").innerHTML = "PRESS ALT K !!";
		}else{
			document.getElementById("main-text").innerHTML = "PRESS COMMAND K !!";
		}

		document.getElementById("main-text").style.mixBlendMode = "difference";
		document.getElementById("main-text").style.color = "white";

		hasDoneRainbowText = false;
		secretsAreOn = false;

		$("a").attr("href", "#");

		try {
			document.getElementById("vid").pause()
		} catch (Exception) {
			return
		}
	}
}

function secretChecked() {
	if(!secretsAreOn){
		try {
			$("#vid").pause();
		} catch (Exception) {
			return;
		}
	}
	if(document.getElementById("secretCheckbox").checked && secretsAreOn){
		console.log("checked");
		alert("YoU haVe fOUnD A sEcrEt");
		alert("try control+a it goes from control+a to control+h")
		play("The_Funeral");
		setCookie("b", 1, 1000000000000);
	}
}

function secretText() {
	if (secretsAreOn) {
		if (document.getElementById("secretText").value == "text") {
			play(1);
			setCookie("c", 1, 100000000000000);
		}else if (document.getElementById("secretText").value == "abcdefghijklmnopqrstuvwxyz") {
			play(2);
			setCookie("d", 1, 100000000000000);
		}else if (document.getElementById("secretText").value == "something random") {
			window.open("/pages/hELLO.html")
			setCookie("e", 1, 100000000000000);
		}else if (document.getElementById("secretText").value == "69420") {
			play(420);
			setCookie("f", 1, 100000000000000);
		}else if (document.getElementById("secretText").value == "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99") {
			play(800);
			setCookie("g", 1, 100000000000000);
		}else if (document.getElementById("secretText").value == "I like trains") {
            		play(11);
			setCookie("h", 1, 100000000000000);
        	}else if (document.getElementById("secretText").value == "GigaChad") {
			josh()
			setCookie("r", 1, 100000000000000);
		}
	}
}

//#endregion
//#region Commands for video
function playVideoMobile(key, command) {
	if(pageIsDestroyed)
		return;
	if (key.toLowerCase() == 'k'.toLowerCase() && command.toLowerCase() == "a".toLowerCase()) {
		document.getElementById("vid").style.visibility = "visible";
		play(69); 
		timesVisitedWebsite += 1;
		if (timesVisitedWebsite == 42){
			alert("I like trains if you like trains share ALTk with your friends!");
			timesVisitedWebsite = 0;
		}
		
	}
	if (command.toLowerCase() == "c" && secretsAreOn) {
		if (key.toLowerCase() == 'a') {
			randAlert();
			document.getElementById("vid").style.visibility = "visible";
			play(9);
			setCookie("i", 1, 100000000000000);
		}
		if (key.toLowerCase() == 'b') {
			randAlert();
			document.getElementById("vid").style.visibility = "visible";
			play(4);
			setCookie("j", 1, 100000000000000);
		}
		if (key.toLowerCase() == 'c') {
			randAlert();
			document.getElementById("vid").style.visibility = "visible";
			play(10);
			setCookie("k", 1, 100000000000000);
		}
		if (key.toLowerCase() == 'd') {
			randAlert();
			document.getElementById("vid").style.visibility = "visible";
			play(6);
			setCookie("l", 1, 100000000000000);
		}
		if (key.toLowerCase() == 'e') {
			randAlert();
			document.getElementById("vid").style.visibility = "visible";
			play(8);
			setCookie("m", 1, 100000000000000);
		}
		if (key.toLowerCase() == 'f') {
			randAlert();
			document.getElementById("vid").style.visibility = "visible";
			play(7);
			setCookie("n", 1, 100000000000000);
		}
                if (key.toLowerCase() == 'g') {
                        alert("Congrats you found ALTk games all of the games here are open source and you can even find them yourselves (if you look hard enough)")
			window.open(games[Math.floor(Math.random() * games.length)])
                }
		if (key.toLowerCase() == 'h') {
			randAlert();
                        document.getElementById("vid").style.visibility = "visible";
                        play(12)
                        setCookie("q", 1, 10000000000000);
                if (key.toLowerCase() == 'i') {
                        randAlert();
                        document.getElementById("vid").style.visibility = "visible";
                        play(13)
                }
	}
}

function playVideo(key) {
	if(pageIsDestroyed) {
		return;
	}
	if (key.key == 'q' && key.ctrlKey && key.shiftKey) {
		if (key.key == 'q' && key.ctrlKey && key.shiftKey) {
			key.preventDefault();
			if(confirm("do you want to log out?") == false) {
				return false;
			}else{
				return true;
			}
		}
	}
	if (key.key == 'k' && (key.altKey || event.keyCode === 75 && isOnApple)) {
		key.preventDefault();
		play(69);
		timesVisitedWebsite += 1; 
		if (timesVisitedWebsite == 42){
			alert("I like trains if you like trains share ALTk with your friends!");
			timesVisitedWebsite = 0;
		}
	}
	if (key.ctrlKey && secretsAreOn) {
		if (key.key == 'a') {
			key.preventDefault();
			randAlert();
			play(9);
			setCookie("i", 1, 100000000000000);
		}
		if (key.key == 'b') {
			key.preventDefault();
			randAlert();
			play(4);
			setCookie("j", 1, 100000000000000);
		}
		if (key.key == 'c') {
			key.preventDefault();
			randAlert();
			play(10);
			setCookie("k", 1, 100000000000000);
		}
		if (key.key == 'd') {
			key.preventDefault();
			randAlert();
			play(6);
			setCookie("l", 1, 100000000000000);
		}
		if (key.key == 'e') {
			key.preventDefault();
			randAlert();
			play(8);
			setCookie("m", 1, 100000000000000);
		}
		if (key.key == 'f') {
			key.preventDefault();
			randAlert();
			play(7);
			setCookie("n", 1, 100000000000000);
		}
		if (key.key == 'g') {
			alert("Congrats you found ALTk games all of the games here are open source and you can even find them yourselves (if you look hard enough)")
			window.open(games[Math.floor(Math.random() * games.length)])
                if (key.key == 'h') {
                        key.preventDefault();
                        randAlert();
                        play(12);
                        setCookie("q", 1, 100000000000000);
                }
                if (key.key == 'i') {
                        key.preventDefault();
                        randAlert();
                        play(13)
                }

	}
}
//#endregion
//#endregion

//#region Platform specific
if (navigator.userAgent.toLowerCase().match(/mobile/i)){
	document.getElementById("mobile").style.visibility = "visible";
	console.log("You are using a mobile browser")
}else if(navigator.platform.indexOf(("Mac") || ("IPad")) === 0){
	isOnApple = true;
	console.log("Welcome to CMDk!");
	document.title = "CMDk"
	document.getElementById("main-text").innerHTML = "PRESS COMMAND K !! There are also hidden ester eggs";
}else{
	console.log("Welcome to ALTk!");
}

document.getElementById("mobile-only").addEventListener("input", () => {
	c = document.getElementById("mobile-only");
	if (c.value.includes('c ')) {
		playVideoMobile(c.value[2], "c")
	} else if (c.value.includes('a ')) {
		playVideoMobile(c.value[2], "a")
	}
});

//#endregion

//#region Backstretch
image = Math.floor(Math.random() * 8) + 1
if (date.toString() < 11) {
	metaThemeColor.setAttribute("content", themeColor[image - 1]);
	$.backstretch("background/" + String(image) + ".jpeg", {
		duration: 0,
		fade: 750
	});
}else{
	metaThemeColor.setAttribute("content", themeColorChristmas[image - 1]);
	$.backstretch("background/christmas/" + String(image) + ".jpeg", {
		duration: 0,
		fade: 750
	});
}
//#endregion

//#region Intervals/Timouts
setTimeout(() => {
   document.addEventListener("visibilitychange", function () {
    if (document["hidden"]) {
        vid.play();
    }
   });
}, 100)

$("#clickLoader").fadeToggle();
document.onclick = function(){
	if(!hasLoaded){
		$("#clickLoader").fadeToggle();
		$("#all-the-stuff").fadeToggle();
		hasLoaded = true;
		if(autoPlay) {
			play(69);
        	}
		if(vidToPlay != "") {
        		play(vidToPlay)
		}
	}
};

window.addEventListener('keypress', function(_){
	if(!hasLoaded){
		$("#clickLoader").fadeToggle();
		$("#all-the-stuff").fadeToggle();
		hasLoaded = true;
		if(autoPlay) {
			play(69);
                }
		if(vidToPlay != "") {
                        play(vidToPlay)
		}
	}
});
	
setInterval(() => {
	image = Math.floor(Math.random() * 8) + 1
	if(!pageIsDestroyed){
		if (date.toString() < 11) {
			metaThemeColor.setAttribute("content", themeColor[image - 1]);
			$.backstretch("background/" + String(image) + ".jpeg", {
			duration: 0,
			fade: 750
		});
		}else{
			metaThemeColor.setAttribute("content", themeColorChristmas[image - 1]);
			$.backstretch("background/christmas/" + String(image) + ".jpeg", {
				duration: 0,
				fade: 750
			});
		}

	}
}, slideshow);

setInterval(() => {
	if(!hasShownAllSecretsAlert){
		a = parseInt(getCookie("a"));
		b = parseInt(getCookie("b"));
		c = parseInt(getCookie("c"));
		d = parseInt(getCookie("d"));
		e = parseInt(getCookie("e"));
		f = parseInt(getCookie("f"));
		g = parseInt(getCookie("g"));
		h = parseInt(getCookie("h"));
		i = parseInt(getCookie("i"));
		j = parseInt(getCookie("j"));
		k = parseInt(getCookie("k"));
		l = parseInt(getCookie("l"));
		m = parseInt(getCookie("m"));
		n = parseInt(getCookie("n"));
		o = parseInt(getCookie("o"));
		p = parseInt(getCookie("p"));
		q = parseInt(getCookie("q"));
		himerflab = a + b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q;
		if (himerflab == 17 && getCookie("secretsFoundShown") != "0") {
		  alert("congrats you have found all the secrets"); 
                  if(confirm("do you want to start over?") == true) {
                    document.cookie = "";
                    alert("you have started over");
		    hasShownAllSecretsAlert = false;
		    setCookie("secretsFoundShown", 1, 10000000000000);
                    keyLog = "secrets"
                  }else{
		    hasShownAllSecretsAlert = true;
                    setCookie("secretsFoundShown", 0, 10000000000000);
		  }
		}
	}
}, 100);
	
setInterval(() =>{
	if(pageIsDestroyed){
		document.getElementById("destroyed").style.visibility = "visible";
		if(isOnApple){
			document.title = zalgo("CMDk");
		}
		else{
			document.title = zalgo("ALTk");
		}
		document.getElementById("mobile").style.visibility = "hidden";
		document.getElementById("destroyed").innerHTML = zalgo("ALTk is now in self destruct mode...........");
		document.getElementById("vid").pause();
	}
}, 100);
//#endregion

//#region Listeners
document.onkeydown = function (key) {
	if (secretsAreOn && !pageIsDestroyed) {
		keyLog += key.key;
		if (keyLog.includes("secrets")) {
			alert("you have found " + himerflab + " secrets. only " + (17 - himerflab).toString() + " left to find");
			keyLog = "";
		}
		if (keyLog.includes("awesome")) {
			hasDoneRainbowText = !hasDoneRainbowText;
			keyLog = "";
			setCookie("o", 1, 100000000000000);
		}
		if (keyLog.includes("break")) {
			keyLog = "";
			pageIsDestroyed = true;
			destroyPage(zalgo("You have destroyed this page"));
			setCookie("p", 1, 100000000000000);
		}
		if (hasDoneRainbowText) {
			document.getElementById("main-text").style.mixBlendMode = "normal";
			setInterval(() => {
				if (!hasDoneRainbowText) {
					return;
				}
				document.getElementById("main-text").style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
			}, 1);
		} else {
			document.getElementById("main-text").style.mixBlendMode = "difference";
			document.getElementById("main-text").style.color = "white";
		}
	}
	playVideo(key);
};

document.getElementById("vid").addEventListener('pause', function () {
	if ($("#vid").is(":visible")) {
		$("#vid").fadeOut("slow", "linear");
	    document.getElementById("vid").src = "none";
		document.getElementById("vid").muted = true;
	}
});

document.getElementById("skipNav").addEventListener("click", () => {
	skipNav();
});
	
document.getElementById("secretText").addEventListener("input", () => {
	secretText();
});

document.getElementById("main-text").addEventListener("click", () =>{
	motd();
});

document.getElementById("secretCheckbox").addEventListener("change", () => {
	secretChecked();
});
//#endregion

//#region Miscellaneous
if(date == 11){
	snowStorm.start();
	document.getElementById("christmasStuff").style.visibility = "visible";
}
//#endregion

});
