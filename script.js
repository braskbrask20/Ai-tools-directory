const tools = [

{
name: "ChatGPT",
category: "AI Assistant"
},

{
name: "Claude",
category: "AI Assistant"
},

{
name: "Gemini",
category: "AI Assistant"
}

];

console.log(tools);

for (let tool of tools) {
    console.log(tool.name);
}

const searchInput = document.getElementById("searchInput");
const chatgptCard = document.getElementById("chatgptCard");
const claudeCard = document.getElementById("claudeCard");
const geminiCard = document.getElementById("geminiCard");
searchInput.addEventListener("keyup", function () {

let text = searchInput.value.toLowerCase();

if (text === "") {

chatgptCard.style.display = "block";
claudeCard.style.display = "block";
geminicard.style.display = "block";

}

else if (text === "chatgpt") {

chatgptCard.style.display = "block";
claudeCard.style.display = "none";
geminiCard.style.display = "none";

}

else if (text === "claude") {

chatgptCard.style.display = "none";
claudeCard.style.display = "block";
geminiCard.style.display = "none"
}

else  if (text === "gemini") {

chatgptCard.style.display = "none";
claudeCard.style.display = "none";
geminiCard.style.display = "block";
}

});
