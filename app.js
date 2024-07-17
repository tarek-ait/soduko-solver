const puzzle = document.querySelector('#puzzle')
const solveButton = document.querySelector('#solve-button')
const squares = 81  // (9*9)
let submission = []


for ( let i = 0; i< squares; i++ ) {
    const square = document.createElement('input') // creating an input
    square.type = 'number' // setting the type
    square.setAttribute('min', '0')
    square.setAttribute('max', '9')
    puzzle.appendChild(square) // add it inside the puzzle div 
}

// getting all the values from the inputs 

const joinValues = () => {
    submission = []
    const inputs = document.querySelectorAll('input')
    inputs.forEach( (input ) => {
        if (input.value){
            submission.push(input.value)
        }else{
            submission.push('.') // the dot represent the empty square in the api request
        }
    })
    console.log('the sudoku array : ',submission)
}


const solve = async () => {  // calling the api 
    // calling the join values 
    joinValues()

    const options = {
        method: 'POST',
        url: 'https://solve-sudoku.p.rapidapi.com/',
        headers: {
          'x-rapidapi-key': '38f0d8a998mshcd269ef4718d0e8p1c4defjsn54f5a2567007',
          'x-rapidapi-host': 'solve-sudoku.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        data: {
          '0': '{',
          '1': '"',
          '2': 'p',
          '3': 'u',
          '4': 'z',
          '5': 'z',
          '6': 'l',
          '7': 'e',
          '8': '"',
          '9': ':',
          '10': ' ',
          '11': '"',
          '12': '2',
          '13': '.',
          '14': '.',
          '15': '.',
          '16': '.',
          '17': '.',
          '18': '.',
          '19': '.',
          '20': '.',
          '21': '.',
          '22': '.',
          '23': '.',
          '24': '.',
          '25': '.',
          '26': '6',
          '27': '2',
          '28': '.',
          '29': '.',
          '30': '.',
          '31': '.',
          '32': '1',
          '33': '.',
          '34': '.',
          '35': '.',
          '36': '.',
          '37': '7',
          '38': '.',
          '39': '.',
          '40': '.',
          '41': '6',
          '42': '.',
          '43': '.',
          '44': '8',
          '45': '.',
          '46': '.',
          '47': '.',
          '48': '3',
          '49': '.',
          '50': '.',
          '51': '.',
          '52': '9',
          '53': '.',
          '54': '.',
          '55': '.',
          '56': '7',
          '57': '.',
          '58': '.',
          '59': '.',
          '60': '6',
          '61': '.',
          '62': '.',
          '63': '4',
          '64': '.',
          '65': '.',
          '66': '.',
          '67': '4',
          '68': '.',
          '69': '.',
          '70': '.',
          '71': '.',
          '72': '8',
          '73': '.',
          '74': '.',
          '75': '.',
          '76': '.',
          '77': '5',
          '78': '2',
          '79': '.',
          '80': '.',
          '81': '.',
          '82': '.',
          '83': '.',
          '84': '.',
          '85': '.',
          '86': '.',
          '87': '.',
          '88': '.',
          '89': '.',
          '90': '.',
          '91': '.',
          '92': '3',
          '93': '"',
          '94': '}'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }

}





solveButton.addEventListener('click', solve) // calling the function when clicking the button 

