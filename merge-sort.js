//Divide and conquer logic
const mergeSort = arr => {
	if (arr.length <= 1) {
		return arr
	}
	const left = arr.slice(0, Math.ceil(arr.length / 2))
	const right = arr.slice(Math.ceil(arr.length / 2))
	return merge(mergeSort(left), mergeSort(right))
}

//Merge selected arrays back together, in sorted order, Select the minimum of the two values, Add the selected value to the sorted array, When one list becomes empty, copy all values from the remaining array into the sorted array, Finished merging, Select the smallest value from the front of each list (excluding values already in the sorted array), Select the minimum of the two values, Add the selected value to the sorted array, When one list becomes empty, copy all values from the remaining array into the sorted array
const merge = (left, right) => {
	sorted = []
	// console.log(`left: ${left}, right: ${right}`)
	while (right.length && right.length) {
		if (left[0] < right[0]) {
			// console.log(`is ${left[0]} < ${right[0]}  ? || `, sorted)
			sorted.push(left.shift())
		} else {
			// console.log(`is ${right[0]} < ${left[0]}  ? || `, sorted)
			sorted.push(right.shift())
		}
	}
	return sorted.concat(left, right)
}

console.log(mergeSort([6, 5, 9, 1, 99, 15, 554, 43, 22, 3]))
