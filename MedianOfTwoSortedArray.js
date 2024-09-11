/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let fullArray = nums1.concat(nums2);
    let length = fullArray.length;
    fullArray = mergeSort(fullArray);
    if (length % 2 === 1) {
        return fullArray[Math.floor(length / 2)];
    } else {
        let midIndex = length / 2;
        return (fullArray[midIndex] + fullArray[midIndex - 1]) / 2;
    }
};

function mergeSort(array) {
    // Base case: If the array has only one element, return it (already sorted)
    if (array.length <= 1) {
        return array;
    }

    // Divide the array into two halves
    const middle = Math.floor(array.length / 2); // Find the middle index
    const left = array.slice(0, middle); // Split the array into left half
    const right = array.slice(middle); // Split the array into right half

    // Recursively call mergeSort on the left and right halves
    return merge(
        mergeSort(left), // Recursively sort the left half
        mergeSort(right) // Recursively sort the right half
    );
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Merge the two sorted arrays into a single sorted array
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate any remaining elements in the left or right array
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
