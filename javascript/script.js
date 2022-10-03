$(document).ready(function() {
//#region Setting Visibility For Elements
$("#if-script").show();
$("#if-script").css('visibility', 'visible');
$("#vid").hide();
document.getElementById("destroyed").style.visibility = "hidden";
//#endregion

//#region Variables
var secretsAreOn = true;
var keyLog = "";
var hasDoneRainbowText = false;
var pageIsDestroyed = false;
var isOnMobile = false;
var timesVisitedWebsite = 0;
var isOnApple = false;
const messages = ["Do you want to delete the world?", "luigi is coming to steal your soul", "Do you want to delete all the beans in the world?", "Its a bird, its a plane, its another video", "What did you just say to me boy?", " Mario is coming to steal your liver", "your gay (happy)"];

//#region Zalgo Variables
const zalgo_up = [
	'\u030d', /*     ̍     */		'\u030e', /*     ̎     */		'\u0304', /*     ̄     */		'\u0305', /*     ̅     */
	'\u033f', /*     ̿     */		'\u0311', /*     ̑     */		'\u0306', /*     ̆     */		'\u0310', /*     ̐     */
	'\u0352', /*     ͒     */		'\u0357', /*     ͗     */		'\u0351', /*     ͑     */		'\u0307', /*     ̇     */
	'\u0308', /*     ̈     */		'\u030a', /*     ̊     */		'\u0342', /*     ͂     */		'\u0343', /*     ̓     */
	'\u0344', /*     ̈́     */		'\u034a', /*     ͊     */		'\u034b', /*     ͋     */		'\u034c', /*     ͌     */
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
	'\u0315', /*     ̕     */		'\u031b', /*     ̛     */		'\u0340', /*     ̀     */		'\u0341', /*     ́     */
	'\u0358', /*     ͘     */		'\u0321', /*     ̡     */		'\u0322', /*     ̢     */		'\u0327', /*     ̧     */
	'\u0328', /*     ̨     */		'\u0334', /*     ̴     */		'\u0335', /*     ̵     */		'\u0336', /*     ̶     */
	'\u034f', /*     ͏     */		'\u035c', /*     ͜     */		'\u035d', /*     ͝     */		'\u035e', /*     ͞     */
	'\u035f', /*     ͟     */		'\u0360', /*     ͠     */		'\u0362', /*     ͢     */		'\u0338', /*     ̸     */
	'\u0337', /*     ̷     */		'\u0361', /*     ͡     */		'\u0489' /*     ҉_     */		
];
//#endregion

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

//#endregion

//#region helpme/play function/randAlert/destroyPage functions
function helpme() {
	alert ("go to https://github.com/dr-comeemeememem/ALTk#readme for help");
	window.location.replace("https://github.com/dr-comeemeememem/ALTk#readme");
}

function play(file) {
	var vid = document.getElementById("vid");

	if (!$("#vid").is(":visible") && !(vid.currentTime > 0 && !vid.paused && !vid.ended && vid.readyState > 2)) {
		$("#vid").fadeToggle("slow", "linear")
	}

	vid.src = "videos/" + file.toString() + ".mp4"
	vid.play()
}

function randAlert() {
	alert(messages[Math.floor(Math.random() * (messages.length + 1))]);
}

function destroyPage(message) {
	$.backstretch("destroy")
	//$.backstretch("background/destroy.png");
	document.getElementById("all-the-stuff").style.visibility = "hidden";
	document.getElementById("all-the-stuff").style.position = "none";
	try {
		$("#vid").pause()
	} catch (Exception) {
		return
	}
	if(isOnApple){
		document.title = zalgo("CMDk");
	}
	else{
		document.title = zalgo("ALTk");
	}
	document.body.style.background = "black";
	document.getElementById("destroyed").style.visibility = "visible";
	alert(message);
}
//#endregion

//#region Secrets
function skipNav() {
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

function secretChecked() {
	console.log("checked");
	alert("YoU haVe fOUnD A scErEt");
	play("The_Funeral");
}

function secretText() {
	if (secretsAreOn) {
		if (document.getElementById("secretText").value == "text") {
			play(1);
		}else if (document.getElementById("secretText").value == "abcdefghijklmnopqrstuvwxyz") {
			play(2);
		}else if (document.getElementById("secretText").value == "something random") {
			window.open("/pages/hELLO.html")
		}else if (document.getElementById("secretText").value == "69420") {
			play(420);
		}else if (document.getElementById("secretText").value == "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99") {
			play(800);
		}else if (document.getElementById("secretText").value == "I like trains") {
            play(11);
        }
	}
}

//#endregion

//#region Commands for video
function playVideoMobile(key, command) {
	if(pageIsDestroyed)
		return;
	if (key == 'k'.toLowerCase() && command == "a".toLowerCase()) {
		randAlert();
		document.getElementById("vid").style.visibility = "visible";
		play(69); 
		timesVisitedWebsite += 1;
		if (timesVisitedWebsite == 42){
			alert("I like trains if you like trains share ALTk with your friends!");
			timesVisitedWebsite = 0;
		}
		
	}
	if (command == "c".toLowerCase() && secretsAreOn) {
		if (key == 'a'.toLowerCase()) {
			randAlert();
			document.getElementById("vid").style.visibility = "visible";
			play(9);
		}
		if (key == 'b'.toLowerCase()) {
			randAlert();
			document.getElementById("vid").style.visibility = "visible";
			play(4);
		}
		if (key == 'c'.toLowerCase()) {
			randAlert();
			document.getElementById("vid").style.visibility = "visible";
			play(10);
		}
		if (key == 'd'.toLowerCase()) {
			randAlert();
			document.getElementById("vid").style.visibility = "visible";
			play(6);
		}
		if (key == 'e'.toLowerCase()) {
			randAlert();
			document.getElementById("vid").style.visibility = "visible";
			play(8);
		}
		if (key == 'f'.toLowerCase()) {
			randAlert();
			document.getElementById("vid").style.visibility = "visible";
			play(7);
		}
	}
}

function playVideo(key) {
	if(pageIsDestroyed)
		return;
		
	key.preventDefault();
	if (key.key == 'k' && (key.altKey || event.keyCode === 55)) {
		play(69);
		timesVisitedWebsite += 1; 
		if (timesVisitedWebsite == 42){
			alert("I like trains if you like trains share ALTk with your friends!");
			timesVisitedWebsite = 0;
		}
	}
	if (key.ctrlKey && secretsAreOn) {
		if (key.key == 'a') {
			randAlert();
			play(9);
		}
		if (key.key == 'b') {
			randAlert();
			play(4);
		}
		if (key.key == 'c') {
			randAlert();
			play(10);
		}
		if (key.key == 'd') {
			randAlert();
			play(6);
		}
		if (key.key == 'e') {
			randAlert();
			play(8);
		}
		if (key.key == 'f') {
			randAlert();
			play(7);
		}
	}
}
//#endregion
//#endregion

//#region Platform specific
if (navigator.userAgent.toLowerCase().match(/mobile/i)){
	document.getElementById("mobile").style.visibility = "visible";
	isOnMobile = true;
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
$.backstretch("background/" + String(Math.floor(Math.random() * 8) + 1) + ".jpeg", {
	duration: 0,
	fade: 750
});
//#endregion

//#region Intervals
setInterval(() => {
	if(!pageIsDestroyed){
		$.backstretch("background/" + String(Math.floor(Math.random() * 8) + 1) + ".jpeg", {
			duration: 0,
			fade: 750
		})
	}
}, 30000);

setInterval(() =>{
	if(pageIsDestroyed){
		if(isOnApple){
			document.title = zalgo("CMDk");
		}
		else{
			document.title = zalgo("ALTk");
		}
		document.getElementById("mobile").style.visibility = "hidden";
	}
}, 100);
//#endregion

//#region Listeners
document.onkeydown = function (key) {
	if (secretsAreOn && !pageIsDestroyed) {
		keyLog += key.key;
		if (keyLog.includes("awesome")) {
			hasDoneRainbowText = !hasDoneRainbowText;
			keyLog = "";
		}
		if (keyLog.includes("break")) {
			keyLog = "";
			pageIsDestroyed = true;
			destroyPage(zalgo("You have destroyed this page"));
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
	}
});

document.getElementById("skipNav").addEventListener("click", () => {
	skipNav();
});
	
document.getElementById("secretCheckbox").addEventListener("change", () => {
	if(!secretsAreOn){
		try {
			$("#vid").pause()
		} catch (Exception) {
			return;
		}
		if(document.getElementById("secret").checked){
			secretChecked();
		}
	}
	
});
	
document.getElementById("secretText").addEventListener("input", () => {
	secretText();
});

document.getElementById("main-text").addEventListener("click", () =>{
	helpme();
})
//#endregion

});
