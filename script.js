var mic=document.querySelector(".mic");
var disp=document.querySelector(".display");
mic.addEventListener("click", voice);
function voice() {
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.onstart = function() {
console.log("Listening...");
};
recognition.onspeechend = function() {
console.log("Processing...");
recognition.stop();
}
recognition.onresult = function(event) {
var transcript = event.results[0][0].transcript;     
var voices=transcript.toLowerCase();
var txt=document.createElement("div");		
txt.classList.add("client");
txt.innerHTML=transcript;
txt.scrollIntoView();
disp.appendChild(txt);
if(voices=="hello" || voices=="hi" || voices=="hey") {
var com=document.createElement("div");		
com.classList.add("computer");
com.innerHTML="Hi";
com.scrollIntoView();
disp.appendChild(com);    
}
if(voices=="what is your name" || voices=="name" || voices=="your name") {
var com=document.createElement("div");		
com.classList.add("computer");
com.innerHTML="Myname is VimoWeb Iam your Assistant";
com.scrollIntoView();
disp.appendChild(com);    
}
};
recognition.start();
}
