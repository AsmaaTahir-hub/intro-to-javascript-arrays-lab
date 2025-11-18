
const myStudents= ['Mohammad','Sarah','Ahmad', 10, null, false, [1,4,7]]
// accessing a value in an array 
console.log(myStudents[6])



//push(): adds an element to the end of the array
myStudents.push('Hussain')
console.log(myStudents)

myStudents.pop()
console.log(myStudents)

myStudents.shift()
console.log(myStudents)

myStudents.unshift('Mohammad')
console.log(myStudents)

const technologies = ['HTML', 'CSS', 'Javascript']
technologies.push('Python')
console.log(technologies)
technologies.unshift('Node')
console.log(technologies)


//splice(start, deleteCount means how many elements you want to delete)
myStudents.splice(1,0, 11, 'Taha')
console.log(myStudents)

console.log(myStudents[1])
for(let i=0; i<myStudents.length; i++){
    console.log(myStudents[i])
}

//for of
for(let oneStudent of myStudents){
    console.log(oneStudent)
}

//forEAch(); it will take another function as an argument
myStudents.forEach(function(){
    console.log('Execute forEach')
})

myStudents.forEach(function(student){
    console.log('student')
})

console.log(myStudents[myStudents.length -1])

console.log(myStudents.at(-1))

//includes and indexof
 console.log(myStudents)

 console.log(myStudents.includes('taha'))
 console.log(myStudents.indexOf('Mariam'))

 //slice
 const sliceArr = myStudents.slice(1,3)
 console.log(sliceArr)

 //split
 const welcome= 'welcome to SEB'
 const splitArr = welcome.split('')
console.log(splitArr)

//join
console.log(myStudents.join(''))

/*
Methods that change(mutate) the original array:
forEach()
slice()

*/

const copiedArr = myStudents

console.log('myStudents', myStudents)
console.log('copiedStudents', copiedArr)


console.log('myStudents', myStudents)
console.log('copiedStudents',copiedArr)

myStudents.pop()
console.log('myStudents', myStudents)
console.log('copiedStudents', copiedArr)

