function largestRangeSort(array) {
	//[2,70,3,78,5,4]	=> [2,5]
	array.sort((a,b) => a-b);
	//[2,3,4,5,70,78]

	let currFirst = array[0]; 
	let currLast = array[0];
	let range = [array[0], array[0]];
	
	for(let i = 1; i < array.length; i++){
		if(array[i] - array[i-1] === 1) {
			currLast = array[i];
		}
		if(array[i] - array[i-1] > 1 || i + 1 === array.length) {
			if(currLast - currFirst > range[1] - range[0]) {
				range = [currFirst, currLast];
			}
			currFirst = array[i];
			currLast =  array[i];
		}
	}
	return range;
	//currFirst = 2
	//keep checking the next numbers until I find one that isn't prev +=1
	// currLargest = [2,5]
}

function largestRange(array) {
	//[2,15,3,16,7,4] => {2: true, 15: true, 3: true, 16:true, 7:true, 4:true}
	let numHash = {};
	let currStart = array[0];
	let currEnd = array[0];
	let range = [array[0], array[0]];
	
	for(num in array){ //O(n)
		numHash[array[num]] = true;
	}
	console.log(numHash)
	for(const numb of array) {
		if(numHash[array[numb]]){
			currStart = numb;
			currEnd = numb;
			numHash[numb] = false;
			let number = numb;
			let num = numb;
			
			while(numHash[number-1]){
				currStart = number - 1;
				numHash[number -1] = false
				number--;
			}
			while(numHash[num+1]){
				currEnd = num + 1
				numHash[num + 1] = false
				num++;
			}
		if(currEnd - currStart > range[1] - range[0]) {
				range = [currStart, currEnd];
			}
			
		}
		
		}
	return range;
	}
