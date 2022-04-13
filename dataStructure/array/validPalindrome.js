var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi, '');
    s = s.split(" ").join(""); 
    s = s.toLowerCase();
 
    let i =0,l = s.length - 1;
    while(i <= l){
        if(s[i] != s[l]) return false;
        i++;
        l--;
    }
        return true;
};