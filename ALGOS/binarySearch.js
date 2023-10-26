function searchInsert(nums, target) {
    let beg = 0;
    let end = nums.length - 1;

    while (beg <= end) {
        const mid = Math.floor((beg + end) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            beg = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return beg; 
}


const nums1 = [1, 3, 5, 6];
const target1 = 5;
console.log(searchInsert(nums1, target1)); 

const nums2 = [1, 3, 5, 6];
const target2 = 2;
console.log(searchInsert(nums2, target2)); 

const nums3 = [1, 3, 5, 6];
const target3 = 7;
console.log(searchInsert(nums3, target3)); 