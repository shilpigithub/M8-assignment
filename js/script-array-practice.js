//STEP 1

// let movies = ["Wonder", "The Persuit of Happyness", "Home Alone", "Babies Day Out", "Yes Day" ]
// console.log(movies[1]);

//STEP 2

// let movies = new Array(5)
// movies[0] = "Wonder"
// movies[1] = "The Persuit of Happyness"
// movies[2] = "Home Alone"
// movies[3] = "Babies Day Out"
// movies[4] = "Yes Day"
// console.log(movies[0])

//STEP 3

// let movies = new Array(5)
// movies[0] = "Wonder"
// movies[1] = "The Persuit of Happyness"
// movies[2] = "Home Alone"
// movies[3] = "Babies Day Out"
// movies[4] = "Yes Day"

// movies.splice(2,0,"Titanic")
// console.log(`No of movies: ${movies.length}`)
// console.log(movies)

//STEP 4

// let movies = []
// movies[0] = "Wonder"
// movies[1] = "The Persuit of Happyness"
// movies[2] = "Home Alone"
// movies[3] = "Babies Day Out"
// movies[4] = "Yes Day"

// delete movies[0]
// console.log(movies)

//STEP 5

// let movies = []
// movies = ["Wonder", "The Persuit of Happyness", "Home Alone", "Babies Day Out", "Yes Day", "Stuart Little", "The Incredibles" ]

// for(let index in movies)
//     console.log(movies[index])



//STEP 6
// let movies = []
// movies = ["Wonder", "The Persuit of Happyness", "Home Alone", "Babies Day Out", "Yes Day", "Stuart Little", "The Incredibles" ]

// for(let movie of movies)
//     console.log(movie)

//STEP 7

// let movies = []
// movies = ["Wonder", "The Persuit of Happyness", "Home Alone", "Babies Day Out", "Yes Day", "Stuart Little", "The Incredibles" ]

// movies.sort()
// for(let movie of movies)
//     console.log(movie)


//STEP 8

// let movies = []
// movies = ["Wonder", "The Persuit of Happyness", "Home Alone", "Babies Day Out", "Yes Day", "Stuart Little", "The Incredibles" ]
// leastFavMovies = ['RegMovie2', 'RegMovie3', 'RegMovie1'];

// console.log('Movies I like: ');
// console.log("");
// for (let movie of movies) {
//     console.log(movie);
// }
// console.log("");
// console.log('Movies I regret watching:');
// console.log("");
// for (let movie of leastFavMovies)
//     console.log(movie);


//STEP 9

// let movies = []
// movies = ["Wonder", "The Persuit of Happyness", "Home Alone", "Babies Day Out", "Yes Day", "Stuart Little", "The Incredibles" ]
// leastFavMovies = ['RegMovie2', 'RegMovie3', 'RegMovie1'];

// movies = movies.concat(leastFavMovies)
// movies.sort().reverse()

// for(let movie of movies)
//     console.log(movie)

//STEP 10
// let movies = []
// movies = ["Wonder", "The Persuit of Happyness", "Home Alone", "Babies Day Out", "Yes Day", "Stuart Little", "The Incredibles" ]
// leastFavMovies = ['RegMovie2', 'RegMovie3', 'RegMovie1'];

// movies = movies.concat(leastFavMovies)
// console.log(movies.pop())

//STEP 11

// let movies = []
// movies = ["Wonder", "The Persuit of Happyness", "Home Alone", "Babies Day Out", "Yes Day", "Stuart Little", "The Incredibles" ]
// leastFavMovies = ['RegMovie2', 'RegMovie3', 'RegMovie1'];

// movies = movies.concat(leastFavMovies)
// console.log(movies.shift())

//STEP 12

// let movies = []
// movies = ["Wonder", "The Persuit of Happyness", "Home Alone", "Babies Day Out", "Yes Day", "Stuart Little", "The Incredibles" ]
// leastFavMovies = ['RegMovie2', 'RegMovie3', 'RegMovie1'];

// movies = movies.concat(leastFavMovies)

// let index1 = movies.indexOf('RegMovie1');
// let index2 = movies.indexOf('RegMovie2');
// let index3 = movies.indexOf('RegMovie3');

// movies[index1] = 'NewMovie1';
// movies[index2] = 'NewMovie2';
// movies[index3] = 'NewMovie3';
// console.log(movies);

//STEP 13

// let movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]]

// for(let movie of movies){ 
//     let movieName = ""
//     movieName = movie.filter((item) => typeof(item) ===  'string')
//     console.log(movieName)
// }    
    


//STEP 14


// let showEmployees = (employees) => {
//     console.log("Employees: ")
//     console.log(" ")
//     for(let employee of employees){
//         console.log(employee)
//     }
// }

// let employees = ['ZAK', 'JESSICA', 'MARK', 'FRED', 'SALLY'];
// showEmployees(employees);


//STEP 15

// let filterValues =(data) =>{
//     if(typeof(data) !== null || !data || data !== 0 || data ==="")
//         return data
// }

// data = [58, '', 'abcd', true, null, false, 0]
// console.log(data.filter(filterValues))

//STEP 16

// let randomItem = (arr) => {
//     let index = Math.floor(Math.random() * arr.length -1 )
//     console.log(index)
//     return arr[index]
// }

// let numArr = [10,20,30,40,50,60,70,80,90,100]
// console.log(numArr)
// console.log(randomItem(numArr))


//STEP 17
let arr = [1007, 45, 0, 78, 80, -1 , -2, 4500, 12, 1];

let largest_num =(arr) => {
    let biggest = arr[0];
    for(let i=0 ; i < arr.length ; i++){
        biggest = Math.max(biggest, arr[i]);
    }
    return biggest;
}
console.log(arr);
console.log('Largest Num from array: ' + largest_num(arr)); 
