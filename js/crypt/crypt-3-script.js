let crypt_3_text = '';

document.getElementById('crypt-3-text').addEventListener('keyup', () => {
    let crypt_3_text_to_code = [];

    let generated_key_code = [];
    let generated_key_word = '';

    let crypt_code = [];
    let crypt_word = '';

    crypt_3_text = document.getElementById('crypt-3-text').value.toUpperCase();

    for (let i = 0; i < crypt_3_text.length; i++) {
        let random_num = Math.floor(Math.random() * 26);

        if (crypt_3_text.charCodeAt(i) >= 65 && crypt_3_text.charCodeAt(i) <= 90) {
            crypt_3_text_to_code.push(crypt_3_text.charCodeAt(i) - 65);

            // Generarea cuvintelor unice pentru cheie
            while (generated_key_code.indexOf(random_num) !== -1) {
                random_num = Math.floor(Math.random() * 26);
            }

            generated_key_code.push(random_num);
        }
    }

    for (let i = 0; i < generated_key_code.length; i++) {
        generated_key_word += String.fromCharCode(generated_key_code[i] + 65);
    }

    for (let i = 0; i < generated_key_code.length; i++) {
        crypt_code.push((crypt_3_text_to_code[i] + generated_key_code[i]) % 26);
    }

    for (let i = 0; i < crypt_code.length; i++) {
        crypt_word += String.fromCharCode(crypt_code[i] + 65);
    }

    if (crypt_3_text.trim().length) {
        document.querySelector('label[for="crypt-3-key"]').classList.add('active');
        document.getElementById('crypt-3-key').value = generated_key_word;

        document.querySelector('label[for="crypt-3-crypt"]').classList.add('active');
        document.getElementById('crypt-3-crypt').value = crypt_word;
    }
    else {
        document.querySelector('label[for="crypt-3-key"]').classList.remove('active');
        document.getElementById('crypt-3-key').value = '';

        document.querySelector('label[for="crypt-3-crypt"]').classList.remove('active');
        document.getElementById('crypt-3-crypt').value = '';
    }
    // console.log(crypt_3_text);
    //
    // console.log(generated_key_code);
    // console.log(generated_key_word);
    //
    // console.log(crypt_code);
    // console.log(crypt_word);
});

document.getElementById('crypt-3-key-copy').addEventListener('click', () => {
    let cryptedText = document.getElementById("crypt-3-key");
    cryptedText.removeAttribute('disabled');

    cryptedText.select();

    document.execCommand("Copy");

    cryptedText.disabled = true;

    cryptedText.classList.remove('invalid');
});

document.getElementById('crypt-3-crypt-copy').addEventListener('click', () => {
    let cryptedText = document.getElementById("crypt-3-crypt");
    cryptedText.removeAttribute('disabled');

    cryptedText.select();

    document.execCommand("Copy");

    cryptedText.disabled = true;

    cryptedText.classList.remove('invalid');
});