function generatePassword() {
  // Get the user input
  var length = document.getElementById("length").value;
  var uppercase = document.getElementById("uppercase").checked;
  var lowercase = document.getElementById("lowercase").checked;
  var numbers = document.getElementById("numbers").checked;
  var symbols = document.getElementById("symbols").checked;

  // Define the character sets
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var symbolChars = "%\|={}<>{}@#$_&-+()*':;!?€₹¥£ĀāãÃâÂáÁÀàÄäÅåÆæÇçēĒÉéÊêëËèÈīĪÍíÎîïÏìÌïÑñ";

  // Build the character set based on user input
  var chars = "";
  if (uppercase) {
    chars += uppercaseChars;
  }
  if (lowercase) {
    chars += lowercaseChars;
  }
  if (numbers) {
    chars += numberChars;
  }
  if (symbols) {
    chars += symbolChars;
  }

  // Generate the password
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * chars.length);
    password += chars.charAt(randomIndex);
  }

  // Update the password field
  document.getElementById("password").value = password;
}

function copypassword() {
    // Get the text field
    var copyText = document.getElementById("password");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, length); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text");
  }
