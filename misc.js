function sumRange(n, total = 0) {
	if (n <= 0) {
		return total
	}
	return sumRange(n - 1, (total += n))
}

console.log('sum: ', sumRange(10))

function power(n, e) {
	if (e <= 0) {
		return 1
	}
	return n * power(n, e - 1)
}

console.log('power of 2: ', power(2, 10))

function factorial(n) {
	if (n <= 0) {
		return 1
	}
	return n * factorial(n - 1)
}

console.log('factorial of 8: ', factorial(8))

function productOfArray(arr) {
	if (arr.length === 0) {
		return 1
	}
	//Everytime we're calling the recursion we take the first element of the array with array.shift and then we multiply it by calling the function again, basically with every shift we're modifying the array by removing the first value, that way we're moving through the array but also multiplying that removed value by the next one in the data structure.
	return arr.shift() * productOfArray(arr)
}

console.log('product of [2,5,10]: ', productOfArray([2, 5, 10]))
