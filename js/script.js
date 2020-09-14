const txtelement = ['Web desain', 'Marketing', 'Freelancer'];
let count = 0;
let txtIndex = 0;
let currentxt = '';
let word = '';

(function ngetik() {

    if (count == txtelement.length) {
        count = 0;
    }

    currentxt = txtelement[count];

    words = currentxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;

    if (words.length == currentxt.length) {
        count++;
        txtIndex = 0;
    }

    setTimeout(ngetik, 500)


})();