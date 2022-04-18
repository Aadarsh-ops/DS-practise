var hammingWeight = function(n) {
    let count= 0;
    while(n){
        count += n%2;
       n = parseInt(n/2);   
    }
    return count;
};