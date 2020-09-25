const artists = [
    {
      first: 'René',
      last: 'Magritte'
    },
    {
      first: 'Chaim',
      last: 'Soutine'
    },
    {
      first: 'Henri',
      last: 'Matisse'
    }
  ];


function printFromArray(inputArray){
    i = 0;
    while(i < inputArray.length){
        console.log(`${inputArray[i].first}  ${inputArray[i].last} `);
        i++
    }  
}

printFromArray(artists);


