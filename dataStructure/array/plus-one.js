var plusOne = function(digits) {
    let size = digits.length - 1;
    digits[size] = digits[size] + 1;
    if(digits[size]>9){
        while(digits[size] >9 ){
         digits[size] = 0;
            if(size==0){
                digits.unshift(1);
            }
            else{
                size--;
            digits[size] = digits[size] + 1;
            }
        }
    }
    return digits;
};