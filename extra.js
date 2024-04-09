document.getElementById('sum').onclick = function () {
	let n
	let first
	let second
	first = document.getElementById('first-input').value
	second = document.getElementById('second-input').value
	first = Number(first)
	second = Number(second)
	n = first + second

	return (document.getElementById('ans').innerHTML = 'Answer : ' + n)
}
