/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findKth(A, Astart, B, Bstart, k) {
	if (Astart >= A.length)
		return B[Bstart + k - 1];

	if (Bstart >= B.length)
		return A[Astart + k - 1];

	if (k == 1)
		return Math.min(A[Astart], B[Bstart]);

	var Akey = Astart + parseInt(k / 2) - 1 < A.length? A[Astart + parseInt(k / 2) - 1] : Number.MAX_VALUE;
	var Bkey = Bstart + parseInt(k / 2) - 1 < B.length? B[Bstart + parseInt(k / 2) - 1] : Number.MAX_VALUE;

	if (Akey < Bkey)
		return findKth(A, Astart + parseInt(k / 2), B, Bstart, k - parseInt(k / 2));
	else 
		return findKth(A, Astart, B, Bstart + parseInt(k / 2), k - parseInt(k / 2));
}

var findMedianSortedArrays = function(nums1, nums2) {
    var len = nums1.length + nums2.length;
    if (len % 2 == 1) 
    	return findKth(nums1, 0, nums2, 0, parseInt(len / 2) + 1);
    else 
    	return (findKth(nums1, 0, nums2, 0, len / 2) + findKth(nums1, 0, nums2, 0, len / 2 + 1)) / 2.0;
};