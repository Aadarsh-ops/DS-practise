#include <iostream>
#include <bits/stdc++.h>

void pushZeroToEnd(int arr[],int size){
  int counter = size;
  for(int i=0;i<size-1;i++){
    if(arr[i]==0){
      for(int j=i+1;j<counter;j++){
        if(arr[j]!=0){
    std::swap(arr[i],arr[j]);  
    break;   
        }
       }
    }
  }
}

void printArray(int arr[],int size){
  for(int i=0;i<size;i++){
    std::cout<<arr[i]<<" ";
  }
}

int main() {
  int size = 7;
  int a[7] = {2,0,0,1,3,0,0};
  int size2 = 5;
  int b[5] ={9,0,0, 8, 2};
  pushZeroToEnd(a,size);
  printArray(a,size);
  std::cout<<"\n";
  pushZeroToEnd(b,size2);
  printArray(b,size2);
  return  0;
} 