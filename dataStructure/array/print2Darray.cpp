#include <iostream>
using namespace std;

int main() {
 int row,col;
 cin>>row>>col;
 int arr[100][100];
 for(int i = 0; i < row; i++){

   for(int j = 0; j < col; j++){
    cin>>arr[i][j];
   }
   cout<<endl;
 }

 for( int i=0,k=0;i<3;k++){
   for(int j=0;j<3;j++){
     cout<<arr[i][j]<<" ";
   }
   cout<<endl;
   if(k==2){
    i+=1;
    k=i-1;
   } 
   }
} 