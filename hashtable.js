class HashTable {
    constructor(size=50) {
        this.table = new Array(size);
        this.size = size;
    }
    //hash key generator function
    hash(key) {
        return key.toString().length % this.size;
    }
    insertData(key,value) {
        let hashkey = this.hash(key);
        if (!this.table[hashkey]) {
            this.table[hashkey] = [];
        }
        this.table[hashkey].push([key,value]);
        return hashkey;
    }
    getData(key) {
        let hashkey = this.hash(key);
        if (!this.table[hashkey]) {
            return null;
        }

        for (let x of this.table[hashkey]) {
            if (x[0] === key) {
                return x[1];
            }
        }
    }
}