console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function(){
    const dogList = document.getElementById("dog-image-container")
    const dogBreeds = document.getElementsByClassName('breed-item')
    const dogBreedList = document.getElementById('dog-breeds')
    const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    
    const selectElem = document.getElementById('breed-dropdown')
    //fetch('https://dog.ceo/api/breeds/image/random/4')
    console.log(selectElem.options.selectedIndex)
    function searchArray(element)
    {
        if(element.charAt(0) === selectElem.options[selectElem.selectedIndex])
        {
            console.log('it works!')
        }
    }
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
           
                
                data.message.forEach(key =>{
                    const newImgItem = document.createElement('img')
                    
                    newImgItem.src = key
                    
                    dogList.appendChild(newImgItem)
                    
                })
                

            })

    //===============CHALLENGE 2 & 3=======//
    fetch(breedUrl)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('NETWORK RESPONSE FAIL #2')
        })
        .then(result => {
            //console.log(result)
            for(let elem in result.message){
                if(Array.isArray(result.message[elem])&& result.message[elem].length !==0)
                {
                    result.message[elem].forEach(breeds =>{
                            
                            //console.log(`${elem} ${breeds}`)
                            const newItem = document.createElement('li')
                            newItem.addEventListener('click', function () {
                                newItem.style.color = 'cyan'
                            })
                            newItem.classList.add('breed-item')
                            newItem.textContent = `${elem} ${breeds}`
                            dogBreedList.appendChild(newItem) 
                            
                            
                            

                    })
                }
                else{
                    
                    const newItem = document.createElement('li')
                    newItem.addEventListener('click', function () {
                        newItem.style.color = 'cyan'
                    })

                    newItem.classList.add('breed-item')
                    newItem.textContent = elem
                    //console.log(newItem)
                    dogBreedList.appendChild(newItem)

                    
                    

                }
            }
        })

        .then(function(){
            console.log(selectElem.options[selectElem.options.selectedIndex].textContent)
            if(selectElem.options[selectElem.options.selectedIndex].textContent === 'a')
            {
                
                //console.log(selectElem.option[selectElem.selectedIndex])
                for (let elem of dogBreeds) {
                    //console.log(elem.innerHTML+ '232')
                    if (elem.innerHTML.startsWith('a')) {
                        console.log(elem.innerHTML)
                        elem.style.visibility = 'visible'
                    }
                    else {
                        elem.style.visibility = 'hidden'
                    }
                }
            }
            
          
        })

        selectElem.addEventListener('change',() =>{
            for(let elem of dogBreeds){
                //console.log(selectElem.options[selectElem.options.selectedIndex].textContent)
                if (elem.innerHTML.startsWith(selectElem.options[selectElem.options.selectedIndex].textContent)){
                    elem.style.visibility = 'visible'
                    elem.style.position = 'static'
                    console.log(elem.innerHTML+'visible')
                    
                }
                else
                {
                    elem.style.visibility = 'hidden'
                    elem.style.position = 'absolute'
                    console.log('second option')
                    console.log(elem.innerHTML +'hidden')

                }
            }
        })
        //dogBreedList.filter(searchArray)
       
       
            
        
        
})