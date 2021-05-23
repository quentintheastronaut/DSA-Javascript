class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor(capacity,head = null) {
        this.head = head;
        this.count = 0;
        this.capacity = capacity;
    }

    push(data){
        if(this.count == this.capacity){
            console.log('Stack overflow');
        }
        else{
            var node = new Node(data);
            node.next = this.head;
            this.head = node;
            this.count++;
        }
    }

    pop(){
        if(this.count == 0){
            console.log('Stack underflow');
        }
        else {
            this.head = this.head.next ;
            this.count--;
        }

    }

    front(){
        return this.head;
    }

    empty(){
        return this.count == 0 ? true : false;
    }

    size(){
        return this.count;
    }

}

function main(){

    var s = new Stack(10);

    for(var i =0;i<5;i++){
        s.push(i);
    }

    s.pop();

    console.log(s.front());
    console.log(s.size());
    console.log(s.empty());


    return s;


}