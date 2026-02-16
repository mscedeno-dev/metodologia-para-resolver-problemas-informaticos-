"use strcit";
let nums = [5,7,4,9,8];

for (let i=0; i<nums.length; i++) {
    
    for (let j=(i+1); j<nums.length; j++){

       if (nums[j] > nums[i]){
        aux = nums[i];
        nums[i] = nums[j];
        nums[j] = aux;
       }


    }
}
alert(nums)