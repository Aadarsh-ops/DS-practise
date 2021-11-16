#include <iostream>

 void reverseArray(int arr[],int s,int e){
   if(s>=e){
     return;
   }
   
   int t = arr[s];
   arr[s] = arr[e];
   arr[e] = t;
   
   reverseArray(arr,s+1,e-1);
  }

  void printArray(int arr[],int n){
    for(int i = 0;i<n;i++){
    std::cout<<arr[i]<<" ";
    }
  }

int main() {
  // this is for taking input
  int t,n,d;
  int arr[100];
   std::cin>>t;
  for(int i=0;i<t;i++){
    std::cin>>n;
    for(int j=0;j<n;j++){
      std::cin>>arr[j];
    }
    std::cin>>d;
  }
  reverseArray(arr,0,d-1);
  reverseArray(arr,d,n-1);
  reverseArray(arr,0,n-1);
  printArray(arr,n);
  std::cout << "Hello World!\n";
} 