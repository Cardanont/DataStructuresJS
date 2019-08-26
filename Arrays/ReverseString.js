// [Hello My Name is Cardanont]

function reverse(str) {
    
    // Check input
    if(!str || str.length < 2 || typeof str !== "string"){
        return 'Something is not ok with the imput string'
    }

    reversed = [];

    for(let i = str.length -1; i >= 0; i--){
        reversed.push(str[i]);
    }

    return(reversed.join(""))
}

reverse("Hello My Name is Cardananont")