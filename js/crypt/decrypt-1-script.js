let decrypt_1_text;
let decrypt_1_direction = 'stanga';
let decrypt_1_shift = 13;

document.getElementById('decrypt-1-text').addEventListener('keyup', () => {
    cryptText();

    // log
    console.log(decrypt_1_text);
});

// Cesar drop-down crypt menu direction left
document.getElementById('decrypt-1-direction').childNodes[1].childNodes[2].childNodes[1].childNodes[0].addEventListener('click', () => {
    decrypt_1_direction = 'stanga';
    decrypt_1_shift = 26 - +(document.getElementById('decrypt-1-shift').value);

    cryptText();

    // log
    console.log(decrypt_1_direction);
});

// Cesar drop-down crypt menu direction right
document.getElementById('decrypt-1-direction').childNodes[1].childNodes[2].childNodes[2].childNodes[0].addEventListener('click', () => {
    decrypt_1_direction = 'dreapta';
    decrypt_1_shift = +(document.getElementById('decrypt-1-shift').value);

    cryptText();

    // log
    console.log(decrypt_1_direction);
});

// Cesar range shift value
document.getElementById('decrypt-1-shift').addEventListener('mouseup', () => {
    decrypt_1_shift = document.getElementById('decrypt-1-shift').value;

    if (decrypt_1_direction === 'stanga') {
        decrypt_1_shift = 26 - decrypt_1_shift;
    }

    cryptText();

    // log
    console.log(decrypt_1_shift);
});

// Cesar copy crypted text button
document.getElementById('decrypt-1-decrypt-copy').addEventListener('click', () => {
    let decryptedText = document.getElementById("decrypt-1-decrypt");
    decryptedText.removeAttribute('disabled');

    decryptedText.select();

    document.execCommand("Copy");

    decryptedText.disabled = true;

    decryptedText.classList.remove('invalid');
});

const cryptText = () => {
    decrypt_1_text = document.getElementById('decrypt-1-text').value.toUpperCase();
    let decryptTextChar = [];
    let decryptOutputText = '';

    for (let i = 0; i < decrypt_1_text.length; i++) {
        if (decrypt_1_text.charCodeAt(i) >= 65 && decrypt_1_text.charCodeAt(i) <= 90) {
            decryptTextChar.push((decrypt_1_text.charCodeAt(i) - decrypt_1_shift - 65) % 26 + 65);
        }
        else {
            decryptTextChar.push(decrypt_1_text.charAt(i));
        }
    }

    console.log(decryptTextChar);

    for (let i = 0; i < decryptTextChar.length; i++) {
        decryptTextChar[i] = String.fromCharCode(decryptTextChar[i]);
        decryptOutputText += decryptTextChar[i];
    }

    if (decryptOutputText.length) {
        document.querySelector('label[for="decrypt-1-decrypt"]').classList.add('active');
        document.getElementById('decrypt-1-decrypt').value = decryptOutputText;
    }
    else {
        document.querySelector('label[for="decrypt-1-decrypt"]').classList.remove('active');
        document.getElementById('decrypt-1-decrypt').value = '';
    }
};