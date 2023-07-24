function fibs(n) {
	arr = [0, 1]
	for (i = 2; i < n; i++) {
		arr.push(arr[i - 1] + arr[i - 2])
	}
	return arr
}

function fibsRec(n, arr = [0, 1]) {
	if (n < 2) return n
	else return fibsRec(n - 1) + fibsRec(n - 2)
}

console.log(fibsRec(20)) //6765
