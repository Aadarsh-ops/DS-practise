#include <iostream>

int countZero(int n){
   if(n == 0) {
        return 1;
    }
    if(n < 10) {
        return 0;
    } else if(n % 10 == 0) {
            return 1 + countZero(n / 10);
        } else {
            return countZero(n / 10);
        }
}

int main() {
  int num;
  std::cin>>num;
  std::cout<<countZero(num);
} 