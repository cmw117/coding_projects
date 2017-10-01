var test= [];
newArray=[24323, "checking", 5655, "apple", "cherry", 2132];	
if (newArray[1] === 'number'){
	console.log("That's a number!");
}else {
	console.log("That's not a number!");
}

	for (i=0; i<=newArray.length; i++){
		if (typeof newArray[i] === "number"){
			var test=[];
			test= test.unshift(newArray[i]);
	} else {
		console.log('That was not a number!');
	}
 }console.log(test);
numbersOnly([243, "checking", 5655, "apple", "cherry", 2132]);