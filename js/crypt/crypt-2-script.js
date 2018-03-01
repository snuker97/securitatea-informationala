let crypt_2_text;
let crypt_2_key;

document.getElementById('crypt-2-text').addEventListener('keyup', () => {
    crypt_2_text = document.getElementById('crypt-2-text').value.toUpperCase();
    crypt_2_key = document.getElementById('crypt-2-key').value.toUpperCase();

    if (String(crypt_2_key).length) {
        if (key_check(crypt_2_key)) {
            crypt_2_text_fn();
        }
        else {
            key_err();
        }
    }

    // log
    console.log(crypt_2_text);
});

document.getElementById('crypt-2-key').addEventListener('keyup', () => {

    crypt_2_text = document.getElementById('crypt-2-text').value.toUpperCase();
    crypt_2_key = document.getElementById('crypt-2-key').value.toUpperCase();


    if (String(crypt_2_key).length) {
        if (key_check(crypt_2_key)) {
            crypt_2_text_fn();
        }
        else {
            key_err();
        }
    }

    // log
    console.log(crypt_2_key);
});

document.getElementById('crypt-2-crypt-copy').addEventListener('click', () => {
    let cryptedText = document.getElementById("crypt-2-crypt");
    cryptedText.removeAttribute('disabled');

    cryptedText.select();

    document.execCommand("Copy");

    cryptedText.disabled = true;

    cryptedText.classList.remove('invalid');
});

const crypt_2_text_fn = () => {
   key_valid();

    let cryptToTextChar = [];
    let cryptOutputText = '';

    crypt_2_text = document.getElementById('crypt-2-text').value.toUpperCase();
    console.log(crypt_2_text);

    crypt_2_key = document.getElementById('crypt-2-key').value;
    console.log(crypt_2_key);

    for (let i = 0; i < crypt_2_text.length; i++) {
        if (crypt_2_text.charCodeAt(i) >= 65 && crypt_2_text.charCodeAt(i) <= 90) {
            cryptToTextChar.push(crypt_2_text.charCodeAt(i) - 65);
        }
    }

    for (let i = 0; i < cryptToTextChar.length; i++) {
        let keyPosition = i % crypt_2_key.length;

        cryptOutputText += String.fromCharCode(+(cryptToTextChar[i]) + +(crypt_2_key[keyPosition]) + 65);
    }

    console.log(cryptOutputText);

    if (cryptOutputText.length) {
        document.querySelector('label[for="crypt-2-crypt"]').classList.add('active');
        document.getElementById('crypt-2-crypt').value = cryptOutputText;
    }
    else {
        document.querySelector('label[for="crypt-2-crypt"]').classList.remove('active');
        document.getElementById('crypt-2-crypt').value = '';
    }
};

const key_err = () => {
    document.getElementById('crypt-2-key').classList.add('invalid');
    document.getElementById('crypt-2-key').classList.remove('valid');
    document.getElementById('crypt-2-key').classList.remove('validate');
};

const key_valid = () => {
    document.getElementById('crypt-2-key').classList.remove('invalid');
    document.getElementById('crypt-2-key').classList.add('valid');
    document.getElementById('crypt-2-key').classList.add('validate');
};

const key_check = key => {
    if (key.length <= crypt_2_text.length ) {
        return +(key) > 0;
    }
    return false;
};




