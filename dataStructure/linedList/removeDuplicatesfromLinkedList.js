/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let lists = new ListNode();
    let list = lists;
    let previous = head;
   while (head && head.next){
      let current = head;
       head = head.next
       if(current.val == head.val){
         while(current && head && current.val == head.val){
            head = head.next;
           }   
            current = head;
           if( head && head.next){
               if(current.val != head.next.val){
            lists.next= current;
                   lists = lists.next;
           }
           }else{
               lists.next=current;
               lists = lists.next;
           }
       }else{
           lists.next = current;
           lists = lists.next;
       }
  }
    return list.next;
};