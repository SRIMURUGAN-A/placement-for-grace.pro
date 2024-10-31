let currentTopic = ""; // To track the current topic
let isTextContent = true; // Track whether we're showing text or video content

function loadContent(topic) {
    currentTopic = topic;
    isTextContent = true; // Reset to text content when a new topic is loaded
    updateContent();
}



function updateContent() {
    const contentDisplay = document.getElementById("contentDisplay");
    const fileToLoad = isTextContent ? `${currentTopic}_text.html` : `${currentTopic}_video.html`;

    fetch(fileToLoad)
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.text();
        })
        .then(html => {
            contentDisplay.innerHTML = html;
        })
        .catch(error => {
            contentDisplay.innerHTML = "<p>Content could not be loaded.</p>";
            console.error("There was a problem loading the content:", error);
        });
}


function toggleContent() {
    isTextContent = !isTextContent;
    const toggleButton = document.getElementById("toggleContentButton");
    toggleButton.textContent = isTextContent ? "Switch to Video" : "Switch to Text";
    updateContent();
}
