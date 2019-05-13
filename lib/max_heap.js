class MaxHeap {
    constructor() {
        this.array = [ null ];
    }

    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }

    deleteMax() {
        if (this.array.length === 2) return this.array.pop();
        if (this.array.length === 1) return null;
        let max = this.array[1];
        this.array[1] = this.array.pop()
        this.siftDown(1);
        return max;
    }

    siftUp(idx) {
        if (idx === 1) return;
        const parentIdx = this.getParent(idx);
        if (this.array[parentIdx] < this.array[idx]) {
            [ this.array[parentIdx], this.array[idx] ] = [ this.array[idx], this.array[parentIdx] ];
            this.siftUp(parentIdx);         
        }  
    }

    siftDown(idx) {

    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return idx * 2 + 1;
    }
}



module.exports = {
    MaxHeap
};