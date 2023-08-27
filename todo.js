class Node{
    constructor(data){
        this.data= data;
        this.next= null;
    }
}
class LinkedList{
    constructor (){
        this.head=null;
        this.size=0;
    }

    //add new Node
    add(ele){
        let newNode= new Node(ele);
        let temp;
        if(this.head==null){
            this.head=newNode;
        }else{
            temp= this.head;
            while(temp.next){
                temp= temp.next;
            }
            temp.next= newNode;
        }
        this.size++;
    }
    removeElement(ele){
        let curr= this.head;
        let prev=null;

        while(curr != null){
            if(curr.data==ele){
                if(prev==null){
                    this.head= curr.next;
                }else{
                    prev.next=curr.next;
                }
                this.size--;
            }
            prev=curr;
            curr=curr.next;
        }
        return -1;
    }
    displayList(){
        let temp=this.head;
        let array=[];
        while(temp){
            array.push(temp.data);
            temp=temp.next
        }

        return array;
    }
}