function generatePassword() {
  var length = document.getElementById("length").value;
  var uppercase = document.getElementById("uppercase").checked;
  var lowercase = document.getElementById("lowercase").checked;
  var numbers = document.getElementById("numbers").checked;
  var symbols = document.getElementById("symbols").checked;
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var symbolChars = "%\|={}<>{}@#$_&-+()*':;!?€₹¥£ĀāãÃâÂáÁÀàÄäÅåÆæÇçēĒÉéÊêëËèÈīĪÍíÎîïÏìÌïÑñ";
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

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * chars.length);
    password += chars.charAt(randomIndex);
  }
  document.getElementById("password").value = password;
  document.getElementById('copy-btn').querySelector('i.fa-regular').classList.add('fa-beat');
}

function copypassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, length); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
    copyText.value = '';
    document.getElementById('copy-btn').querySelector('i.fa-regular').classList.remove('fa-beat');
  }
