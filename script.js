// ===============================
// AI Tools Directory v1.0
// ===============================

const tools = [

{
name: "ChatGPT",
category: "Productivity",
description: "AI assistant for writing, coding and research.",
pricing: "Freemium",
rating: "4.9",
image: "assets/images/chatgpt.png",
website: "https://chatgpt.com"
},

{
name: "Claude",
category: "Writing",
description: "AI assistant for writing, editing and long-form content.",
pricing: "Freemium",
rating: "4.8",
image: "assets/images/claude.png",
website: "https://claude.ai"
},

{
name: "Gemini",
category: "Productivity",
description: "Google's AI assistant for writing, research and productivity.",
pricing: "Freemium",
rating: "4.7",
image: "assets/images/gemini.png",
website: "https://gemini.google.com"
},

{
name: "Cursor",
category: "Coding",
description: "AI-powered code editor for developers.",
pricing: "Freemium",
rating: "4.9",
image: "assets/images/cursor.png",
website: "https://cursor.com"
},

{
name: "Perplexity",
category: "Search",
description: "AI search engine with cited answers.",
pricing: "Freemium",
rating: "4.8",
image: "assets/images/perplexity.png",
website: "https://www.perplexity.ai"
},

{
name: "Canva AI",
category: "Design",
description: "AI design platform for presentations and graphics.",
pricing: "Freemium",
rating: "4.8",
image: "assets/images/canva-ai.png",
website: "https://www.canva.com"
},

{
name: "Midjourney",
category: "Image",
description: "Create stunning AI-generated artwork from text prompts.",
pricing: "Paid",
rating: "4.9",
image: "assets/images/midjourney.png",
website: "https://www.midjourney.com"
},

{
name: "Notion AI",
category: "Productivity",
description: "AI workspace for notes, writing and project management.",
pricing: "Freemium",
rating: "4.8",
image: "assets/images/notion-ai.png",
website: "https://www.notion.so"
},

{
name: "agent-qa",
category: "Coding",
description: "Natural-language web and mobile testing with memidex persistent memory and validated self-improvement.",
pricing: "Free for FSL-permitted uses; model/device costs extra",
rating: "Not rated",
image: "assets/images/agent-qa.png",
website: "https://vostride.com"
}

];

// ===============================
// Elements
// ===============================

const toolsContainer = document.getElementById("toolsContainer");
const searchInput = document.getElementById("searchInput");
const toolCount = document.getElementById("toolCount");

// ===============================
// Display Tools
// ===============================

function displayTools(toolList) {

toolsContainer.innerHTML = "";

toolCount.textContent = toolList.length;

toolList.forEach(tool => {

toolsContainer.innerHTML += `

<div class="card">

<img
src="${tool.image}"
alt="${tool.name}"
class="tool-logo">

<h3>${tool.name}</h3>

<p class="category">
${tool.category}
</p>

<p class="description">
${tool.description}
</p>

<p class="rating">
⭐ ${tool.rating}
</p>

<p class="pricing">
${tool.pricing}
</p>

<a
href="${tool.website}"
target="_blank">
Visit Website
</a>

</div>

`;

});

}

// ===============================
// Show All Tools
// ===============================

displayTools(tools);

// ===============================
// Search
// ===============================

searchInput.addEventListener("input", function () {

const text = searchInput.value.toLowerCase();

const filteredTools = tools.filter(tool =>

tool.name.toLowerCase().includes(text) ||

tool.category.toLowerCase().includes(text) ||

tool.description.toLowerCase().includes(text)

);

displayTools(filteredTools);

});

// ===============================
// Category Filter
// ===============================

const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach(button => {

button.addEventListener("click", function () {

const category = this.dataset.category;

if (category === "All") {

displayTools(tools);

return;

}

const filteredTools = tools.filter(tool =>

tool.category === category

);

displayTools(filteredTools);

});

});

console.log("✅ AI Tools Directory Loaded Successfully");