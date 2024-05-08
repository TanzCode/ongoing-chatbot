// Selecting necessary elements from the DOM
const chatContain = document.querySelector(".chat-contain");
const msgInput = document.querySelector("#msgInput");
const msgSend = document.querySelector(".msgSend");
const loadingEle = document.querySelector(".loading");

// Starting message from the bot
const startingMessage = "Hi there!👋🏻<br><img src='giphy.gif' alt='' width='100' height='100'><br>Im <b>YumYum</b>, your personal meal assistant. <br> can I please know <b>your name?</b>";

// Initialize the chat with the starting message
function initializeChat() {
    renderMessage(startingMessage, 'bot'); // Render the starting message from the bot
    setScrollPosition(); // Set scroll position to the bottom
}

// Event listener for when the send button is clicked
msgSend.addEventListener("click", renderUserMessage); 

// Event listener for when the Enter key is pressed in the message input field
msgInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) { // Check if the key pressed is Enter
        renderUserMessage(); // Render the user's message
        setScrollPosition(); 
    }
});
// Function to render user's message
function renderUserMessage() {
    const userInput = msgInput.value; // Get user input from the input field
    renderMessage(userInput, "user"); // Render the user's message in the chat interface
    msgInput.value = ""; // Clear the input field
    toggleLoading(false); // Hide the loading indicator
    setTimeout(() => {
        
        setScrollPosition(); // Adjust scroll position after rendering messages
        renderChatbotResponse(userInput); // Render the chatbot's response after a delay
        toggleLoading(true); // Show the loading indicator
        setScrollPosition();
    }, 900); // Delay before showing the chatbot's response
}

// Function to render chatbot's response
function renderChatbotResponse(userInput) {
    const res = getChatbotResponse(userInput); // Get chatbot's response based on user input
    toggleLoading(false);
    renderMessage(res); // Render chatbot's response in the chat interface
   /////////////////////////////////////////////////////////////////////////////////////////// 

    const suggestions = suggestedQuestions[userInput.toLowerCase()] || [];
    const suggestionContainer = document.querySelector('.suggestion-container');
    suggestionContainer.innerHTML = "";

    // Create new suggestion buttons
    suggestions.forEach(suggestion => {
        const button = document.createElement('button');
        button.textContent = suggestion;
        button.classList.add('suggestion-button');
        button.onclick = () => handleSuggestionClick(suggestion);
        suggestionContainer.appendChild(button);});

        suggestionContainer.style.display = suggestions.length > 0 ? "block" : "none";
   ////////////////////////////////////////////////////////////////////////////////////////////     
}

// Function to render a message element in the chat interface
function renderMessage(html, type = "bot") {
    const className = type === "user" ? "user-message" : "bot-message";
    const messageElement = document.createElement("div");
    messageElement.classList.add(className);
    messageElement.innerHTML = html;
    chatContain.appendChild(messageElement);
}

// Function to get chatbot's response based on user input
function getChatbotResponse(userInput) {
    return getChatbotResponse(userInput) ;
}

// Function to set scroll position to the bottom of the chat container
function setScrollPosition() {
    chatContain.scrollTop = chatContain.scrollHeight;
}

// Function to toggle loading indicator
function toggleLoading(show) {
    loadingEle.classList.toggle("hide", show);
}


 


// Initialize the chat with the starting message
initializeChat();


//suggesions 
const suggestedQuestions = {
    "dinner": ["What's the recipe?", "Is this good for health?"],
    "lunch": ["What's the recipe?", "Is this good for health?"],
    "dinner": ["What's the recipe?", "Is this good for health?"],
    "snack": ["What's the recipe?", "Is this good for health?"],
};

function handleSuggestionClick(suggestion) {
    renderMessage(suggestion, 'user');
    renderChatbotResponse(suggestion); // Get chatbot's response for the suggestion
    setScrollPosition(); // Scroll to bottom after rendering messages
}