class Solution {
public:
    int climbStairs(int n) {
    if (n < 4) return n;    
	int s1 = 1, s2 = 2;
	for(int i = n - 3; i >= 0; i--) {
		int curr = s1 + s2;
		s1 = s2;
		s2 = curr;
	}
	return s2;
    }
};