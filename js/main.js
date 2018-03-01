const hide = btn => {
    for (let i = 0; i < document.getElementsByClassName('navigation-btn').length; i++) {
        if (btn === document.getElementsByClassName('navigation-btn')[i]) {
            document.getElementsByClassName('cards')[i].style.display = 'block';
        }
        else {
            document.getElementsByClassName('cards')[i].style.display = 'none';
        }
    }
};

// Page init
hide(document.getElementById('crypt-1-btn'));


// Cesar
document.getElementById('crypt-1-btn').addEventListener('click', () => {
    hide(document.getElementById('crypt-1-btn'));
});

// BB
document.getElementById('crypt-2-btn').addEventListener('click', () => {
    hide(document.getElementById('crypt-2-btn'));
});

// Vernam
document.getElementById('crypt-3-btn').addEventListener('click', () => {
    hide(document.getElementById('crypt-3-btn'));
});

// SI
// document.getElementById('crypt-4-btn').addEventListener('click', () => {
//     hide(document.getElementById('crypt-4-btn'));
// });

setTimeout(function() {
    for (let i = 0; i < document.getElementsByClassName('indicator').length; i++) {
        document.getElementsByClassName('indicator')[i].style = 'right: 450px; left: 0px;';
    }

    // Drop-down color change
    document.getElementById('crypt-1-direction').childNodes[1].childNodes[2].childNodes[1].childNodes[0].style.color = '#4caf50';
    document.getElementById('crypt-1-direction').childNodes[1].childNodes[2].childNodes[2].childNodes[0].style.color = '#4caf50';

    document.getElementById('decrypt-1-direction').childNodes[1].childNodes[2].childNodes[1].childNodes[0].style.color = '#4caf50';
    document.getElementById('decrypt-1-direction').childNodes[1].childNodes[2].childNodes[2].childNodes[0].style.color = '#4caf50';
}, 250);

