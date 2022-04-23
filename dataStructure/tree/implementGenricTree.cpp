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

Node* takeInoutLevelWise() {
  int rootNode;
  cout<<"enter data"<< endl;
  cin>>rootNode;
  queue<Node*> pendingNodes;
  Node *root = new Node(rootNode);
  pendingNodes.push(root);

  while(pendingNodes.size() !=0){
    Node *front = pendingNodes.front();
    pendingNodes.pop();
    cout<<"enter the number of children"<<front->key<<endl;
    int numChild;
    cin>>numChild;
    for(int i=0;i<numChild;i++){
    
      
    }
  }
  
}

Node* takeInput(){
  int rootNode;
  cout<<"enter data"<< endl;
  cin>>rootNode;
  
  Node *root = new Node(rootNode);
  int n;
  cout<<"enter the number of child you want of"<<rootNode<<":";
  cin>>n;
  for(int i=0;i<n;i++){
  Node *children =  takeInput();
  root->child.push_back(children);
  }
  return root;
}

void printTree(Node* root){
  // if(root->key = null){
  //    return;
  // }3
  cout<<root->key<<":";

  for(int i=0;i<root->child.size();i++){
    cout<<root->child[i]->key<<",";
  }
  for(int i =0;i<root->child.size();i++){
    printTree(root->child[i]);
  }
}

int main() {
  //  Node *root = new Node(10);
  //  Node *node1 = new Node(11);
  //  Node *node2 = new Node(12);

  // root->child.push_back(node1);
  // root->child.push_back(node2);
  
  // printTree(root);
  Node *root = takeInput();
  printTree(root);
}