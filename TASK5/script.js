const slider = document.getElementById("slider");
const lengthValue = document.getElementById("lengthValue");
const passwordDisplay = document.getElementById("passwordDisplay");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const copyBtn = document.getElementById("copyBtn");


const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}";

function generatePassword(length, useNumbers, useSymbols) {
  let charset = letters;
  if (useNumbers) charset += numbers;
  if (useSymbols) charset += symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomChar = charset[Math.floor(Math.random() * charset.length)];
    password += randomChar;
  }

  return password;
}


slider.addEventListener("input", () => {
  lengthValue.textContent = slider.value;
  updatePassword();
});

[slider, includeNumbers, includeSymbols].forEach(el =>
  el.addEventListener("input", updatePassword)
);

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordDisplay.value)
    .then(() => alert("Password copied!"))
    .catch(() => alert("Failed to copy"));
});

function updatePassword() {
  const length = parseInt(slider.value);
  const useNums = includeNumbers.checked;
  const useSyms = includeSymbols.checked;

  passwordDisplay.value = generatePassword(length, useNums, useSyms);
}

updatePassword();
