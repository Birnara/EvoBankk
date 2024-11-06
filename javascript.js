// Calculator functionality
function calculateInterest() {
    const amount = document.getElementById("amount").value;
    if (amount) {
        const interest = amount * 0.05; // Sample interest rate
        document.getElementById("result").innerText = `Estimated interest: $${interest.toFixed(2)}`;
    } else {
        document.getElementById("result").innerText = "Please enter a valid amount.";
    }
}

// Chat popup functionality
function openChat() {
    document.getElementById("chatPopup").style.display = "block";
}

function closeChat() {
    document.getElementById("chatPopup").style.display = "none";
}

function sendMessage() {
    alert("Message sent! Our support team will respond shortly.");
    document.querySelector(".chat-popup textarea").value = ""; // Clear the text area
}
