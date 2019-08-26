// [Hello My Name is Cardanont]

last = "Hello My name is";

function reverse(str) {
    
    reversed = [];

    for(let i = str.length -1; i >= 0; i--){
        reversed.push(str[i]);
    }

    return(reversed.join(""))
}

reverse("Hello My Name is Cardananont")