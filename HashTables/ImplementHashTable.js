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

    get(key) {
        let addres = this._hash(key);
        const currentBucket = thhis.data[addres];

        if(currentBucket) {
            for(let i = 0; i < currentBucket.length; i++ ){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined
    }

    keys() {
        const keysArray = [];

        for( let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray;
    }
}

const myHashTable = new HashTable(50);
// Create a method for get and set.
myHashTable.set('grapes', 10000);
myHashTable.get('grapes');