console.log("AI Studio Loaded");
function sendMessage(){

const input=document.getElementById("prompt");
const chat=document.getElementById("chatBox");

if(input.value.trim()=="") return;

chat.innerHTML +=
'<div class="user-msg">'+input.value+'</div>';

setTimeout(()=>{
chat.innerHTML +=
'<div class="ai-msg">🤖 AI: ابھی Gemini API بعد میں جوڑی جائے گی۔</div>';

chat.scrollTop=chat.scrollHeight;
},500);

input.value="";
}
function sendMessage(){

const input=document.getElementById("prompt");
const chat=document.getElementById("chatBox");

const message=input.value.trim();

if(message=="") return;

chat.innerHTML += `<div class="user-msg">${message}</div>`;

input.value="";

chat.innerHTML += `<div id="typing" class="ai-msg">🤖 Typing...</div>`;

chat.scrollTop=chat.scrollHeight;

setTimeout(()=>{

document.getElementById("typing").remove();

chat.innerHTML += `
<div class="ai-msg">
🤖 This is a demo reply.

Next we will connect Gemini AI.
</div>
`;

chat.scrollTop=chat.scrollHeight;

},1500);

}
const menuBtn = document.getElementById("menuBtn");

if (menuBtn) {
    menuBtn.onclick = function () {
        const menu = document.getElementById("menu");

        if (menu.style.display === "none") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    };
}
function generateImage(){

const prompt=document.getElementById("imagePrompt").value;

if(prompt==""){
alert("Please enter a prompt.");
return;
}

document.getElementById("imageResult").innerHTML=
`
<div class="ai-msg">
🖼️ Image generation will be connected in the next step.<br><br>
Prompt:<br><b>${prompt}</b>
</div>
`;

}
function login(){

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

if(email==="" || password===""){
alert("Please fill all fields");
return;
}

localStorage.setItem("user",email);

window.location.href="dashboard.html";

}