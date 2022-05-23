
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

Node* takeInputLevelWise() {
  int rootNode;
  cout<<"enter data"<< endl;
  cin>>rootNode;
  queue<Node*> pendingNodes;
  Node *root = new Node(rootNode);
  pendingNodes.push(root);

  while(pendingNodes.size() !=0){
    Node *front = pendingNodes.front();
    pendingNodes.pop();
    cout<<"enter the number of children "<<front->key<< endl;
    int numChild;
    cin>>numChild;
    for(int i=0;i<numChild;i++){
    int childData;
    cout<< "enter "<< i << "the child of " <<front->key <<endl;
      cin>>childData;
      Node *child = new Node(childData);
      front->child.push_back(child);
      pendingNodes.push(child);
    }
  }
  return root;
}

void printLevelWise(Node* root) {
    queue<Node*> pendingNodes;
    pendingNodes.push(root);
    
    while(!pendingNodes.empty()) {
        Node *front = pendingNodes.front();
        cout<< front->key << ":";
        pendingNodes.pop();
        
        for(int i = 0; i < front->child.size(); i++) {
            if(i + 1 == front->child.size()) cout<< front->child[i]->key; 
            else cout<< front->child[i]->key << ",";
            pendingNodes.push(front->child[i]);
        }
        cout<< endl;
    }
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
  // }3,9
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
  Node *root = takeInputLevelWise();
  cout<< findHeight(root);
}