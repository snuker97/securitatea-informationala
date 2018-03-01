let decrypt_2_text;
let decrypt_2_key;

document.getElementById('decrypt-2-text').addEventListener('keyup', () => {
    decrypt_2_text = document.getElementById('decrypt-2-text').value.toUpperCase();
    decrypt_2_key = document.getElementById('decrypt-2-key').value.toUpperCase();

    if (String(decrypt_2_key).length) {
        if (de_key_check(decrypt_2_key)) {
            decrypt_2_text_fn();
        }
        else {
            de_key_err();
        }
    }

    // log
    console.log(decrypt_2_text);
});

document.getElementById('decrypt-2-key').addEventListener('keyup', () => {

    decrypt_2_text = document.getElementById('decrypt-2-text').value.toUpperCase();
    decrypt_2_key = document.getElementById('decrypt-2-key').value.toUpperCase();


    if (String(decrypt_2_key).length) {
        if (de_key_check(decrypt_2_key)) {
            decrypt_2_text_fn();
        }
        else {
            de_key_err();
        }
    }

    // log
    console.log(decrypt_2_key);
});

document.getElementById('decrypt-2-decrypt-copy').addEventListener('click', () => {
    let decryptedText = document.getElementById("decrypt-2-crypt");
    decryptedText.removeAttribute('disabled');

    decryptedText.select();

    document.execCommand("Copy");

    decryptedText.disabled = true;

    decryptedText.classList.remove('invalid');
});

const decrypt_2_text_fn = () => {
    de_key_valid();

    let decryptToTextChar = [];
    let decryptOutputText = '';

    decrypt_2_text = document.getElementById('decrypt-2-text').value.toUpperCase();
    console.log(decrypt_2_text);

    decrypt_2_key = document.getElementById('decrypt-2-key').value;
    console.log(decrypt_2_key);

    for (let i = 0; i < decrypt_2_text.length; i++) {
        if (decrypt_2_text.charCodeAt(i) >= 65 && decrypt_2_text.charCodeAt(i) <= 90) {
            decryptToTextChar.push(decrypt_2_text.charCodeAt(i) - 65);
        }
    }

    for (let i = 0; i < decryptToTextChar.length; i++) {
        let keyPosition = i % decrypt_2_key.length;

        decryptOutputText += String.fromCharCode(+(decryptToTextChar[i]) - +(decrypt_2_key[keyPosition]) + 65);
    }

    console.log(decryptOutputText);

    if (decryptOutputText.length) {
        document.querySelector('label[for="decrypt-2-decrypt"]').classList.add('active');
        document.getElementById('decrypt-2-decrypt').value = decryptOutputText;
    }
    else {
        document.querySelector('label[for="decrypt-2-decrypt"]').classList.remove('active');
        document.getElementById('decrypt-2-decrypt').value = '';
    }
};

const de_key_err = () => {
    document.getElementById('decrypt-2-key').classList.add('invalid');
    document.getElementById('decrypt-2-key').classList.remove('valid');
    document.getElementById('decrypt-2-key').classList.remove('validate');
};

const de_key_valid = () => {
    document.getElementById('decrypt-2-key').classList.remove('invalid');
    document.getElementById('decrypt-2-key').classList.add('valid');
    document.getElementById('decrypt-2-key').classList.add('validate');
};

const de_key_check = key => {
    if (key.length <= decrypt_2_text.length ) {
        return +(key) > 0;
    }
    return false;
};




