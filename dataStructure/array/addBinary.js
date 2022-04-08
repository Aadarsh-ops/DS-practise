var addBinary = function(a, b) {
    let i = a.length-1;
    let j = b.length-1;
    let carry = 0;
    let res ="";
    while(i>=0||j>=0){
       let sum = carry;
       if(i>=0)
           sum+=(a[i])-0;
        
       if(j>=0)
            sum+=(b[j])-0;
        
       res = parseInt(sum%2)+res;
        
       carry =parseInt(sum/2);
      
        
        i--;
        j--;
    }
    if(carry!=0)
        res = 1+res;
    
    return res;
};