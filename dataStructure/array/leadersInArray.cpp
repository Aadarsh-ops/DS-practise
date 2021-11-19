#include <iostream>

using namespace std;

void leadersInArray(int arr[],int n){
  int i,j;
for(int i=0;i<n;i++){
  for(j=i+1;j<n;j++){
    if(arr[i]<=arr[j])
    break;
  }
  if(j==n){
    cout<<arr[i]<<" ";
}
}
}

int main() {
  int n;
  cin>>n;
  int arr[n];
  for(int i=0;i<n;i++){
    cin>>arr[i];
  }
  leadersInArray(arr,n);
} 