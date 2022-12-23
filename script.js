//Node function: return node with value and next key that links to the next node.
const Node = (value) => {  
    let node = {value: null, next: null};
    let setValue = () => {
        node.value = value;
    }
    if(value != undefined) setValue();
    return node;
}
//LinkedList class that generates a linked list stance with auxiliary methods.
class LinkedList {

    constructor() {
        this.list = {};
    }
    // adds a node to the end of the list
    append(value, listCopy = this.list) { 
    
        if(Object.keys(listCopy).length === 0) {
            listCopy = Object.assign(listCopy, value);
            return listCopy;
        }
        else if(listCopy.next === null) {
            listCopy.next = value;
            return listCopy;
        }
        this.append(value, listCopy.next);
        return listCopy;
    }
    // adds a node to the beginning of the list
    prepend(value, listCopy = this.list) {
        if(Object.keys(listCopy).length === 0) {
            listCopy = Object.assign(listCopy, value);
            return listCopy;
        } 
        value.next = listCopy;
        this.list = value;
        return this.list;
    }
    // returns size of list
    size(listCopy = this.list, count = 0) {
        if(listCopy.next === null) {
            return 1;
        }
        count++;
        return count + this.size(listCopy.next)
    }
    // returns first node from the list
    head() {
        return {value: this.list.value, next: null}
    }
    // returns last node from the list
    tail(listCopy = this.list) {
        if(listCopy.next === null) {
            return listCopy;
        }
        return this.tail(listCopy.next);
    }
    // returns value that is at the inputed index
    at(index, listCopy = this.list, count = 0) { 
        if(index > this.size()) {
            return "Index > Size";
        }
        if(index === count) {
            return listCopy;
        }
        return this.at(index, listCopy.next, count + 1)
    }
    // removes last node from the list
    pop() {
        let index = this.size();
        let popSave = this.at(index - 2).next
        this.at(index - 2).next = null;
        return JSON.stringify(popSave) + " was deleted from list."
    }
    // returs if the inputed value exists inside the list
    contains(value, listCopy = this.list) {
        if(value === listCopy.value) {
            return true;
        }
        if(listCopy.next === null) {
            return false;
        }
        return this.contains(value, listCopy.next);
    }
    // returns node index of the inputed value
    find(value, listCopy = this.list) {
        let count = 0;
        if(this.contains(value) === false){
            return null;
        }
        if(listCopy.value === value) {
            return 0;
        }
        count++;
        return this.find(value, listCopy.next) + count;
    }
    // returns list in string format
    toString() {
        return JSON.stringify(this.list)
    }
    // inserts new node in given index
    insertAt(value, index) {

        if(index > this.size()) {
            return "Index > Size";
        }
        if(index === 0) {
            value.next = this.list;
            this.list = value;
            return this.toString();
        }
        let secondHalf = this.at(index);
        let firstHalf = this.at(index - 1);
        value.next = secondHalf;
        firstHalf.next = value;
        return this.toString()
    }
    // removes node at given index
    removeAt(index) {

        if(index > this.size()) {
            return "Index > Size";
        }
        if(index === 0) {
            this.list = this.list.next
            return this.toString();
        }
        let secondHalf = this.at(index + 1);
        let firstHalf = this.at(index - 1);
        firstHalf.next = secondHalf;
        return this.toString();

    }


}

let newList = new LinkedList()