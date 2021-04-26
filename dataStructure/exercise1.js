/**
 * Exercise: 
 * Given an array of words split into characters, reverse the words in the same array
 * for example 
 * const message1 = ['l', 'i', 'e', ' ', 'a', ' ', 'i', 's', ' ', 't', 'h', 'i', 's'];
 * should become ['t', 'h', 'i', 's', ' ',  'i', 's', ' ', 'a', ' ', l', 'i', 'e', ];
 */


/**
 * To solve this problem: 
 * Make a reverse char function 
 * Reverse the original array and get a totally reversed chars
 * Loop through the chars and if you find a space or it is the end of the array
 * Use the reverse char function with the updated index of the beginning of the word 
 * and the character just before the space 
 * (or exact character if you've just reached the end)
 */

 const message = ['l', 'i', 'e', ' ', 
 'a', ' ', 
 'i', 's', ' ', 
 'c', 'a', 'k', 'e', ' ', 
 't', 'h', 'e'];

const reverse_chars = (chars, i, j) => {
    while(i < j){
        const temp = chars[i]; 
        chars[i] = chars[j]; 
        chars[j] = temp; 
        i++; 
        j--; 
    }

    return chars; 
}

const reverse_word = (message) => {
    let i = 0; 
    let j = message.length - 1; 
    reverse_chars(message, i, j); 

    console.log(`Array after inversion ${message}`);
    
    for(let k = 0; k < message.length; k++){
        const char = message[k]; 
        if(char ===  ' ' ) {
            reverse_chars(message, i, k - 1);
            i = k + 1; 
        }
        if(k === message.length - 1){
            reverse_chars(message, i, k); 
        }
    }
    console.log(`Array after turning the words back to place ${message}`);
    return message; 
}

reverse_word(message);