#include <iostream>
using namespace std;

void findMaximumMatchStick(int stick) {
  if(stick % 2 == 0) {
     while(stick > 0){
      cout<<1;
       stick -=2;
     }
  }else{
    stick = stick-3;
    cout<<7;
    while(stick > 0){
      cout<<1;
      stick -= 2;
     }
  }
}

int main() {
 findMaximumMatchStick(8);
  return 0;
}