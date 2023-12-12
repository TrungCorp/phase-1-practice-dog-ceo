console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function(){
    const dogList = document.getElementById("dog-image-container")
    const list = document.createElement('ul')
    const testItem = document.createElement('li')
    const dogBreedList = document.getElementById('dog-breeds')
    const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    //fetch('https://dog.ceo/api/breeds/image/random/4')
    //=============CHALLENGE 1===========//
    fetch(imgUrl)
        .then(res =>{
            if (res.ok)
            {
               
               return res.json()
            }
            throw new Error ('NETWORK RESPONSE FAIL #1')
        })
            .then(data =>{
           
                console.log(data)
                data.message.forEach(key =>{
                    const newImgItem = document.createElement('img')
                    console.log(key)
                    newImgItem.src = key
                    console.log(newImgItem.src)
                    dogList.appendChild(newImgItem)
                    
                })
                

            })

    //===============CHALLENGE 2=======//
    fetch(breedUrl)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('NETWORK RESPONSE FAIL #2')
        })
        .then(result => {
            console.log(result)
            for(let elem in result.message){
                if(Array.isArray(result.message[elem])&& result.message[elem].length !==0)
                {
                    result.message[elem].forEach(breeds =>{
                        
                            console.log(`${elem} ${breeds}`)
                        
                    })
                }
                else{
                    console.log('1')
                }
            }
        })
})