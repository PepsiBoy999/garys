window.onload = function() {
    // Add event listener to search button
    document.getElementById("search-button").addEventListener("click", searchFunction);
};

function searchFunction() {
    var input = document.getElementById('search-input').value.toLowerCase();
    
    // Debug log to check if input is captured
    console.log("Search term:", input);

    if (!input.trim()) {
        alert('Please enter a search term.');
        return;  // Exit if input is empty
    }

    var elements = document.querySelectorAll('p, div, span');  // Searching in p, div, span elements
    var found = false;

    elements.forEach(function (element) {
        var originalText = element.textContent.toLowerCase();
        
        // Clear previous highlights
        element.innerHTML = element.textContent; 

        if (originalText.includes(input)) {
            found = true;
            var regex = new RegExp(`(${input})`, 'gi');  // Regular expression to find the word
            var highlightedText = element.innerHTML.replace(regex, `<span class="highlight">$1</span>`);
            element.innerHTML = highlightedText;  // Replace the element's HTML with the highlighted text
            console.log("Match found:", originalText);
        }
    });

    if (!found) {
        alert('No matching text found.');
    }
}

