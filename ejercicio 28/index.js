"use strict"
let nums = [4,9,6,2] ;
let aux; 
aux = nums[0];
nums[0] = nums [1]
nums [1] = aux
alert(nums);