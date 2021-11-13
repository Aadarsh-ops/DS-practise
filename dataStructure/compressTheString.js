 let s="aaaabbbccdde";
 let size =s.length;
compressTheString(s,size);

function compressTheString(s,size){
  let count=1;
  for(let i=0;i<s.length;i++){
    let temp=s[i];
    if(temp == s[i+1]){
     let j=i+1;
    while(temp==s[j]){
      count++;
      j++;
    }
    s = s.slice(0,i+1)+ count.toString() + s.slice(j,s.length);
    console.log(i);
    console.log(j);
      count=1;
    }
  }
  console.log(s);
}