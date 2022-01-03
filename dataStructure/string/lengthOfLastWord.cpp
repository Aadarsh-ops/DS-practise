class Solution {
public:
    int lengthOfLastWord(string s) {
        int length = 0;
        for(int i=0;i<s.length();i++){
            if(s[i] != ' ') length=0;
            while(s[i] != ' ' && i<s.length()){
                i++;
                length++;
            }
        }
        return length;
    }
};