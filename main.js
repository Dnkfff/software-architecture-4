// functions from lectures
const eventLoop = {};

eventLoop.push = {

}

eventLoop.pull = {

}



const pull = (item) => {
	eventLoop.pop(item)
}

/*
loop 
post
start functions that have to be here
*/

const palindrom = (string) => {
	const test = string.split('').reverse('').join('')
	return string + test
}

const test = palindrom('hello');
console.log(test);
console.log(eventLoop);