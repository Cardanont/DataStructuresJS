class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lasItem = this.data[this.length -1]
        delete this.data[this.length - 1]
        this.length--;
        return lasItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return lasItem;
    }

    shiftItems(index) {
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}