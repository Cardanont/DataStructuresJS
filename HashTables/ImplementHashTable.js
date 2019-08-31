class HashTable {
    constructor(size){
        this.data = new Array(size);
    }


    _hash(key) {
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        let addres = this._hash(key);
        if(!this.data[addres]) {
            this.data[addres] = [];
        }
        this.data[addres].push([key, value]);
    }
}

const myHashTable = new HashTable(50);
// Create a method for get and set.
myHashTable.set('grapes', 10000);
myHashTable.get('grapes');