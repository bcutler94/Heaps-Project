class MaxHeap {
    constructor() {
        this.array = [];
    }

    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }

    removeMax() {

    }

    siftUp(idx) {
        if (idx === 1) return;
        const parentIdx = this.getParentIdx;

        if (parent > this.array[idx]) {
            [ this.array[parentIdx], this.array[idx] ] = [ this.array[idx], this.array[parentIdx] ];
        }
    }

    siftDown(idx) {

    }

    getParentIdx(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChildIdx(idx) {
        return idx * 2;
    }

    getRightChildIdx(idx) {
        return idx * 2 + 1;
    }
}

module.exports = {
    MaxHeap
};