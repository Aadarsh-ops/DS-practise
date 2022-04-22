var maxArea = function(height) {
    let area=0,maxArea=0;
    let l=0,r = height.length -1;
    while(l < r){
     let h = Math.min(height[l],height[r]);
     area = h * (r - l);
     maxArea = Math.max(area,maxArea);
     height[l] < height[r] ? l++ : r--;
    }
    return maxArea;
};