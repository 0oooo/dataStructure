const chars = ['a', 'b', 'c', 'd', 'e'];

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
const message1 = ['l', 'i', 'e', ' ', 
            'a', ' ', 
            'i', 's', ' ', 
            'c', 'a', 'k', 'e', ' ', 
            't', 'h', 'e'];

const message2 = ['a', 'b', ' ', 
            'i', 's'];

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

reverse_word(message1);