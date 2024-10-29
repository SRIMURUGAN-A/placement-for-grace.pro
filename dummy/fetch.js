// Function to toggle subtopics
function toggleSubTopics() {
    const subTopics = document.getElementById("subTopics");
    subTopics.style.display = subTopics.style.display === "none" ? "block" : "none";
}

// Function to load content from an external file
function loadContent(filename) {
    const mainContent = document.getElementById("mainContent");

    // Fetch the HTML file content
    fetch(filename)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then(html => {
            mainContent.innerHTML = html;
        })
        .catch(error => {
            mainContent.innerHTML = "<p>Content could not be loaded.</p>";
            console.error("There was a problem loading the content:", error);
        });
}
