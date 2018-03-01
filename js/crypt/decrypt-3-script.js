let decrypt_3_text = '';
let decrypt_3_key = '';

document.getElementById('decrypt-3-text').addEventListener('keyup', () => {
    decrypt_3_text = document.getElementById('decrypt-3-text').value.toUpperCase();
    decrypt_3_key = document.getElementById('decrypt-3-key').value.toUpperCase();

    let decrypt_3_text_to_code = [];
    let decrypt_3_key_to_code = [];

    let decrypt_3_decrypt_code = [];
    let decrypt_3_decrypt_text = '';

    for (let i = 0; i < decrypt_3_text.length; i++) {
        decrypt_3_text_to_code.push(decrypt_3_text.charCodeAt(i) - 65);
        decrypt_3_key_to_code.push(decrypt_3_key.charCodeAt(i) - 65);
    }

    for (let i = 0; i < decrypt_3_text_to_code.length; i++) {
        if (decrypt_3_text_to_code[i] >= decrypt_3_key_to_code[i]) {
            console.log(decrypt_3_text_to_code[i] - decrypt_3_key_to_code[i]);
            decrypt_3_decrypt_code.push(decrypt_3_text_to_code[i] - decrypt_3_key_to_code[i]);
        }
        else {
            console.log((decrypt_3_text_to_code[i] + 26) - decrypt_3_key_to_code[i]);
            decrypt_3_decrypt_code.push((decrypt_3_text_to_code[i] + 26) - decrypt_3_key_to_code[i]);
        }
    }

    for (let i = 0; i < decrypt_3_decrypt_code.length; i++) {
        decrypt_3_decrypt_text += String.fromCharCode(decrypt_3_decrypt_code[i] + 65);
    }

    if (decrypt_3_text.trim().length && decrypt_3_key.trim().length) {
        document.querySelector('label[for="decrypt-3-decrypt"]').classList.add('active');
        document.getElementById('decrypt-3-decrypt').value = decrypt_3_decrypt_text;
    }
    else {
        document.querySelector('label[for="decrypt-3-decrypt"]').classList.remove('active');
        document.getElementById('decrypt-3-decrypt').value = '';
    }

    console.log(decrypt_3_decrypt_code);
    console.log(decrypt_3_decrypt_text);

    // console.log(decrypt_3_text);
    // console.log(decrypt_3_key);
});

document.getElementById('decrypt-3-key').addEventListener('keyup', () => {
    decrypt_3_text = document.getElementById('decrypt-3-text').value.toUpperCase();
    decrypt_3_key = document.getElementById('decrypt-3-key').value.toUpperCase();

    let decrypt_3_text_to_code = [];
    let decrypt_3_key_to_code = [];

    let decrypt_3_decrypt_code = [];
    let decrypt_3_decrypt_text = '';

    for (let i = 0; i < decrypt_3_text.length; i++) {
        decrypt_3_text_to_code.push(decrypt_3_text.charCodeAt(i) - 65);
        decrypt_3_key_to_code.push(decrypt_3_key.charCodeAt(i) - 65);
    }

    for (let i = 0; i < decrypt_3_text_to_code.length; i++) {
        if (decrypt_3_text_to_code[i] >= decrypt_3_key_to_code[i]) {
            console.log(decrypt_3_text_to_code[i] - decrypt_3_key_to_code[i]);
            decrypt_3_decrypt_code.push(decrypt_3_text_to_code[i] - decrypt_3_key_to_code[i]);
        }
        else {
            console.log((decrypt_3_text_to_code[i] + 26) - decrypt_3_key_to_code[i]);
            decrypt_3_decrypt_code.push((decrypt_3_text_to_code[i] + 26) - decrypt_3_key_to_code[i]);
        }
    }

    for (let i = 0; i < decrypt_3_decrypt_code.length; i++) {
        decrypt_3_decrypt_text += String.fromCharCode(decrypt_3_decrypt_code[i] + 65);
    }

    if (decrypt_3_text.trim().length && decrypt_3_key.trim().length) {
        document.querySelector('label[for="decrypt-3-decrypt"]').classList.add('active');
        document.getElementById('decrypt-3-decrypt').value = decrypt_3_decrypt_text;
    }
    else {
        document.querySelector('label[for="decrypt-3-decrypt"]').classList.remove('active');
        document.getElementById('decrypt-3-decrypt').value = '';
    }

    // console.log(decrypt_3_decrypt_code);
    // console.log(decrypt_3_decrypt_text);

    // console.log(decrypt_3_text);
    // console.log(decrypt_3_key);
});


document.getElementById('decrypt-3-decrypt-copy').addEventListener('click', () => {
    let cryptedText = document.getElementById("decrypt-3-decrypt");
    cryptedText.removeAttribute('disabled');

    cryptedText.select();

    document.execCommand("Copy");

    cryptedText.disabled = true;

    cryptedText.classList.remove('invalid');
});