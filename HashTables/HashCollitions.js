let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function() {
        console.log('aahhhhhh!');
    }
}

user.age // O(1)
user.spell = 'abra kadabra'; // O(1)
user.scream(); // O(1)

//Collision stores more data on the same memory space this due to the limited amount of memory and it slows de input and output.
// O(n/k) -> O(n)
