#include <iostream>
#include <cstring>
using namespace std;


bool isPalindrome(char a[],int size){
  for(int i=0, j=size;i<j;i++,j--){
  if(a[i]!=a[j])
  return false;
 }
  return true;
}


int main() {
char a[100];
cin.getline(a,100);
int size = strlen(a);
std::cout<<isPalindrome(a,size-1);
} 