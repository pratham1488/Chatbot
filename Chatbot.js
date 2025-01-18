<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    body {
    background-color: #f8f9fa;
  }
  
  .chatbox {
    max-width: 500px;
    margin: auto;
    background: white;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.2);
  }
  
  .message {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 10px;
  }
  
  .bot-message {
    background-color: #e9ecef;
    color: black;
    text-align: left;
  }
  
  .user-message {
    background-color: #007bff;
    color: white;
    text-align: right;
  }
  
  </style>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Intelligent Customer Chatbot</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <div class="chatbox mt-5">
      <div class="chat-header text-white bg-primary p-2">
        <h4>Customer Support Chatbot</h4>
      </div>
      <div id="chat-body" class="chat-body p-3" style="height: 400px; overflow-y: scroll; border: 1px solid #ccc;">
        <div class="message bot-message">Hello! How can I assist you today?</div>
      </div>
      <div class="chat-footer d-flex">
        <input type="text" id="user-input" class="form-control" placeholder="Type your message here..." />
        <button id="send-btn" class="btn btn-primary ml-2">Send</button>
      </div>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
<script>
  document.getElementById('send-btn').addEventListener('click', function() {
    var userInput = document.getElementById('user-input').value.trim();
    if (userInput !== "") {
      displayMessage(userInput, 'user');
      getBotResponse(userInput);
      document.getElementById('user-input').value = ""; // Clear input
    }
  });
  
  // Display messages in chat
  function displayMessage(message, sender) {
    var chatBody = document.getElementById('chat-body');
    var messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + (sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.innerText = message;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight; // Auto scroll to bottom
  }
  
  // Simulate bot responses with predefined logic
  function getBotResponse(userInput) {
    var botMessage = "";
    var lowercaseInput = userInput.toLowerCase();
  
    if (lowercaseInput.includes("hello")) {
      botMessage = "Hello! How can I assist you?";
    } else if (lowercaseInput.includes("what will be the weather today")) {
      botMessage = "Mostly cloudy☁️";
    } else if (lowercaseInput.includes("Weekend weather")) {
      botMessage = "";
    } else if (lowercaseInput.includes("Namaste ")) {
      botMessage = "Namaste.";
    } else {
      botMessage = "I'm not sure how to respond to that. Could you rephrase?";
    }
  
    setTimeout(function() {
      displayMessage(botMessage, 'bot');
    }, 1000); // Simulate typing delay
  }
  
</script>
