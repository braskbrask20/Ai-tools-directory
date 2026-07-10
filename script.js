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
name: "Cursor",
category: "Coding"
},
{
name: "Perplexity",
category: "Search"
}
];

const searchInput = document.getElementById("searchInput");
const toolsContainer = document.getElementById("toolsContainer");

function displayTools(toolList) {

toolsContainer.innerHTML = "";

for (let tool of toolList) {

toolsContainer.innerHTML += `
<div class="card">
<h3>${tool.name}</h3>
<p>${tool.category}</p>
<a href="#">Visit Website</a>
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