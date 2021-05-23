class Node {

    constructor(data){
        this.data = data
        this.next = null
    }

}

class LinkedList {

    constructor(head = null) {
        this.head = head
        this.count = 0
    }

    add(data){
        
        var node = new Node(data);

        if(this.count == 0){
            this.head = node;
            this.count++
        }
        else {
            var cur = this.head;
            while(cur.next != null){
                cur = cur.next;
            }
            cur.next = node;
            this.count++;
        }
        

    }

    addNode(node){

        if(this.count == 0){
            this.head  = node;
            this.count++;
        }
        else{
            var cur = this.head;
            while(cur.next){
                cur = cur.next;
            }
            cur.next = node;
            this.count++;
        }
    }

    size(){
        return this.count
    }

    empty(){
        return this.count == 0 ? true : false;
    }

    get(index){
        if(index >= this.count || index < 0){
            return -1;
        }
        var cur = this.head;

        for(var i=0;i < index ;i++){
            cur = cur.next;
        }
        return cur.data;
    }

    set(index, data){
        if(index >= this.count || index < 0){
            return -1;
        }
        var cur = this.head;

        for(var i=0;i < index ;i++){
            cur = cur.next;
        }
        cur.data = data;
    }

    indexOf(data){
        var cur = this.head;
        var count = 0;
        while(cur){
            if(cur.data == data){
                return count;
            }
            count++;
        }
        return -1;
    }

    contains(data){
        var cur = this.head;
        var count = 0;
        while(cur){
            if(cur.data == data){
                return true;
            }
            count++;
        }
        return false;
    }

    clear(){
        this.count = 0
        this.head = null
    }

    


}


function main(){

    var list = new LinkedList();
    var node = new Node(0);
    var node1 = new Node(1);
    var node2 = new Node(2);
    var node3 = new Node(3);

    
    
    list.add('zero');
    list.add('one');
    list.add('two');
    list.add('three');
    list.add('four');
    
    list.set(3, 'five');

    console.log(list.get(3));

    console.log(list);

}