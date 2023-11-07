const word = prompt('Inserisci una parola');

function isPalindrome(word) {
    let palindrome = '';

    for (let i = word.length - 1; i >= 0; i--) {
        
        separa = word[i];
        palindrome += separa;
    }

    return palindrome;
}

verifyWord = isPalindrome(word);

if (word == verifyWord) {

    alert('Questa è una parola palindroma')
    console.log('Questa è una parola palindroma');

}else{

    alert('Questa non è una parola palindroma')
    console.log('Questa non è una parola palindroma');
    
}