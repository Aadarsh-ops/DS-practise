#include <iostream>
#include <cstring>

void reverseString(char a[],int i,int size){
 if(i==size){
  return;
 }
 std::swap(a[i],a[size]);
 reverseString(a, i+1,size-1);
 }

 void reverseWords(char a[],int size){  
  int intial=1;
  for(int i=0;i<size-1;i++){ 
    if(a[i] == ' '){
      reverseString(a,intial-1,i);
      intial=i+1;
    }
  }
  reverseString(a,intial,size-1);
  }


int main() {

  char a[100];
  std::cin.getline(a,100);
  int length = strlen(a);
  reverseWords(a,length);
  reverseString(a,0,length-1);
  std::cout<<a;
} 