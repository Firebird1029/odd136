var nums = [];

Array.prototype.sum = function () {
	// Arrays can only hold one kind of variable type, so check that the first element is an integer.
	if (isNaN( this[0] )) {
		return "";
	}
	
	// Use a for loop to add all the elements.
	var sum = 0;
	for (var i = 0; i < this.length; i++) {
		sum += this[i];
	}
	
	// Return the answer.
	return sum;
}

function setup () {
	var c = 1;
	for (var i = 0; i < 4; i++) {
		nums.push(c);
		c += 2;
	}
}
setup();

function addTwo () {
	while (nums.sum() < 136) {
		for (var i = 0; i < nums.length; i++) {
			nums[i] = nums[i] + 2;
		}
	}
}
addTwo();

function shiftAndPush () {
	while (nums.sum() < 136) {
		nums.shift();
		nums.push(nums[nums.length - 1] + 2);
	}
}
// shiftAndPush();

function changeElements () {
	while (nums.sum() < 136) {
		for (var i = 0; i < 3; i++) {
			nums[i] = nums[i + 1];
		}
		nums[3] += 2;
	}
}
// changeElements();

document.writeln(nums);
document.writeln(nums.sum());