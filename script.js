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
},

{
name: "Perplexity",
category: "Search"
},

{
name: "Cursor",
category: "Coding"
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
const toolsContainer = document.getElementById("toolsContainer");
for (let tool of tools) {

toolsContainer.innerHTML += `

<div class="card">

<h3>${tool.name}</h3>

<p>${tool.category}</p>

<a href="#">Visit Website</a>

</div>

`;

}
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
