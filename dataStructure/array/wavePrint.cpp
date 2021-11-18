#include <iostream>
using namespace std;
const int M = 3;

void wavePrint(int n,int m,int (arr[][M])){
  for(int i=0;i<m;i++){
    for(int j=0;j<n;j++){
      cout<<arr[j][i];
    }
  }
}

int main() {
  int n,m;
   cin>>n;
   cin>>m;

   int arr[n][m];
   for(int i=0;i<n;i++){
     for(int j=0;j<m;j++){
     cin>>arr[i][j];
     }}
  //  for showing how array is saved in 2d MAtrinx
    //   for(int i=0;i<n;i++){
    //  for(int j=0;j<m;j++){
    //  cout<<arr[i][j]<<" ";
    //  }
    //  cout<<endl;
    //  }

  for(int i=0;i<n;i++){
    if(i%2==0){
     for(int j=0;j<m;j++){
      cout<<arr[j][i]<<" ";
      }
    }else{
      for(int j=m-1;j>=0;j--){
        cout<<arr[j][i]<<" ";
      }
    }
      }
   return 0;
}