
#include <bits/stdc++.h>
using namespace std;

class Node{

  public:
    int key;
    vector<Node*> child;

    Node(int key){
    this->key = key;   
}
};

int sumNode(Node* root){
   static int sum = root->key;
  for(int i=0;i<root->child.size();i++){
    sum += root->child[i]->key;
   sumNode(root->child[i]);
  }
  return sum;
}

int maxKeyNode(Node* root){
  static int max = 0;

  max = std::max(max,root->key);
  for(int i=0;i < root->child.size();i++){    
    maxKeyNode(root->child[i]);
  }
  return max;
}

int findHeight(Node* root){
  int maxheight = 0;
  for(int i=0;i<root->child.size();i++){
   int  height = findHeight(root->child[i]);
    maxheight = max(maxheight,height);
  }
  return maxheight + 1;
}

int countLeadNode(Node* root){
  static int leaf =0;
  for(int i=0;i<root->child.size();i++){
    
  }
}