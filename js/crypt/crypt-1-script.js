let crypt_1_text;
let crypt_1_direction = 'stanga';
let crypt_1_shift = 13;

document.getElementById('crypt-1-text').addEventListener('keyup', () => {
    crypt_1_text_fn();

    // log
    console.log(crypt_1_text);
});

// Cesar drop-down crypt menu direction left
document.getElementById('crypt-1-direction').childNodes[1].childNodes[2].childNodes[1].childNodes[0].addEventListener('click', () => {
    crypt_1_direction = 'stanga';
    crypt_1_shift = 26 - +(document.getElementById('crypt-1-shift').value);

    crypt_1_text_fn();

    // log
    console.log(crypt_1_direction);
});

// Cesar drop-down crypt menu direction right
document.getElementById('crypt-1-direction').childNodes[1].childNodes[2].childNodes[2].childNodes[0].addEventListener('click', () => {
    crypt_1_direction = 'dreapta';
    crypt_1_shift = +(document.getElementById('crypt-1-shift').value);

    crypt_1_text_fn();

    // log
    console.log(crypt_1_direction);
});

// Cesar range shift value
document.getElementById('crypt-1-shift').addEventListener('mouseup', () => {
    crypt_1_shift = +(document.getElementById('crypt-1-shift').value);

    if (crypt_1_direction === 'stanga') {
        crypt_1_shift = 26 - crypt_1_shift;
    }

    crypt_1_text_fn();

    // log
    console.log(crypt_1_shift);
});

// Cesar copy crypted text button
document.getElementById('crypt-1-crypt-copy').addEventListener('click', () => {
    let cryptedText = document.getElementById("crypt-1-crypt");
    cryptedText.removeAttribute('disabled');

    cryptedText.select();

    document.execCommand("Copy");

    cryptedText.disabled = true;

    cryptedText.classList.remove('invalid');
});

const crypt_1_text_fn = () => {
    crypt_1_text = document.getElementById('crypt-1-text').value.toUpperCase();
    let cryptTextChar = [];
    let cryptOutputText = '';

    for (let i = 0; i < crypt_1_text.length; i++) {
        if (crypt_1_text.charCodeAt(i) >= 65 && crypt_1_text.charCodeAt(i) <= 90) {
            cryptTextChar.push((crypt_1_text.charCodeAt(i) + crypt_1_shift - 65) % 26 + 65);
        }
        else {
            cryptTextChar.push(crypt_1_text.charAt(i));
        }
    }

    for (let i = 0; i < cryptTextChar.length; i++) {
        cryptTextChar[i] = String.fromCharCode(cryptTextChar[i]);
        cryptOutputText += cryptTextChar[i];
    }

    if (cryptOutputText.length) {
        document.querySelector('label[for="crypt-1-crypt"]').classList.add('active');
        document.getElementById('crypt-1-crypt').value = cryptOutputText;
    }
    else {
        document.querySelector('label[for="crypt-1-crypt"]').classList.remove('active');
        document.getElementById('crypt-1-crypt').value = '';
    }
};