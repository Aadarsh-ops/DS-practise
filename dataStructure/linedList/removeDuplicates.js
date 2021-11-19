var deleteDuplicates = function(head) {
    let list = head;
    while(head && head.next){
           if(head.val == head.next.val){
            head.next = head.next.next;
           } else {
                head = head.next;
           }
       
        }
    return list;
};