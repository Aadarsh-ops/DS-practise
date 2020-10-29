#include <iostream>
int upperBound(int arr[],int low,int high, int x){
    while(low<high){
   int  m = low +(high-low) /2;
    if(arr[m]<=x)
     low = m + 1;
     else
     high = m;
    }
    return low;
}
int main() {
  int arry[] = {2,4,6,8,10,12,14};
   int n = sizeof(arry) / sizeof(arry[0]); 
  int result = upperBound(arry,0,n,2)  ;
  if(result == n)
   std::cout << "upperBound Doesn't exist";
  else
  std::cout << arry[result];
}