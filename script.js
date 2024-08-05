document.getElementById('generateButton').addEventListener('click', generatePassword);
document.getElementById('copyButton').addEventListener('click', copyToClipboard);

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSpecialChars = document.getElementById('specialChars').checked;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let charPool = '';
    if (includeUppercase) charPool += uppercaseChars;
    if (includeLowercase) charPool += lowercaseChars;
    if (includeNumbers) charPool += numberChars;
    if (includeSpecialChars) charPool += specialChars;

    if (charPool === '') {
        alert('Please select at least one character type.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }

    document.getElementById('passwordOutput').textContent = password;
}

function copyToClipboard() {
    const passwordOutput = document.getElementById('passwordOutput').textContent;
    if (passwordOutput) {
        navigator.clipboard.writeText(passwordOutput).then(() => {
            alert('Password copied to clipboard.');
        });
    }
}