const tools = [
{
name: "ChatGPT",
category: "AI Assistant",
image: "asset/images/chatgpt.png",
website: "https://chatgpt.com"
},
{
name: "Claude",
category: "AI Assistant",
image: "asset/images/claude.png",
website: "https://claude.ai"
},
{
name: "Gemini",
category: "AI Assistant",
image: "asset/images/gemini.png",
website: "https://gemini.google.com"
},
{
name: "Cursor",
category: "Coding",
Image: "asset/images/Cursor.png",
website: "https://cursor.com"
},
{
name: "Perplexity",
category: "Search",
image: "asset/images/Perplexity.png",
website: "https://www.perplexity.ai"
},
{
name: "Canva AI",
category: "Design",
image: "asset/images/Canva Ai.png",
website: "https://www.canva.com"
},
{
name: "Midjourney",
category: "Image",
image: "asset/images/Midjourney.png",
website: "https://www.Midjourney.com"
},
{
name: "Notion AI",
category: "productivity",
image: "asset/images/Notion Ai.png",
website: "https://www.notion.so"
}
];

const searchInput = document.getElementById("searchInput");
const toolsContainer = document.getElementById("toolsContainer");

function displayTools(toolList) {

toolsContainer.innerHTML = "";

for (let tool of toolList) {

toolsContainer.innerHTML += `
<div class="card">
<img src="${tool.image}" alt="${tool.name}" class="tool-logo">
<h3>${tool.name}</h3>
<p class="category">${tool.category}</p>
<a href="${tool.website}" target="_blank">Visit Website</a>
</div>
`;

}

}

// Display all tools when the page loads
displayTools(tools);

// Search tools
searchInput.addEventListener("input", function () {

let text = searchInput.value.toLowerCase();

let filteredTools = [];

for (let tool of tools) {

if (
tool.name.toLowerCase().includes(text) ||
tool.category.toLowerCase().includes(text)
) {

filteredTools.push(tool);

}

}

displayTools(filteredTools);

});