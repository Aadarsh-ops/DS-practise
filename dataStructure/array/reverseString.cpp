#include <iostream>
#include <cstring>

void reverseString(char a[],int i,int size){
 if(i==size){
  return;
 }
 
 std::swap(a[i],a[size]);
 reverseString(a, i+1,size-1);
}

int main() {

  char a[100];
  std::cin.getline(a,100);
  int length = strlen(a);
  reverseString(a,0,length-1);
  std::cout<<a;
} 