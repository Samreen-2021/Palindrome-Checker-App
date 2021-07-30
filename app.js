function check(){
    let inputWordEnter = document.querySelector('input').value;
    console.log(inputWordEnter);
    let inputWord= inputWordEnter.toLowerCase();
    console.log(inputWord) 
    let reverseWord= ""; 
    for(let i=inputWord.length-1;i>=0; i--){
        reverseWord = reverseWord + inputWord[i];
        } 
    if(inputWord == reverseWord){
        document.querySelector('p').innerHTML=  "Oh yes, given word is a palindrome";
    } 
    else{
        document.querySelector('p').innerHTML= inputWordEnter + " is not a palindrome";
    } 
} 
