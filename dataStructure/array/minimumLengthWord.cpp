#include <iostream>

#include <cstring>
void MinimumLengthWord(char s[],int length){
  int count=0,counter=100;
for(int i=0;i<length;i++){ 
    count += 1;
    if(s[i] == ' '){
    count-= 1;;
      if(count < counter){
         counter = count;
         count=0;
       }
    }
  }
   if(count < counter){
      counter = count;
      }
  std::cout<<counter;
}

int main() {
  char s[100];
  std::cin.getline(s,100);
  int length = strlen(s);
  MinimumLengthWord(s,length);
  } 