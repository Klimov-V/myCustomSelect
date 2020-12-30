(function () {

    const body          = document.querySelector('body'),
          select        = document.querySelector('.select'),
          selectArea    = document.querySelector('.select__area'),
          selectItems   = document.querySelectorAll('.select__item'),
          selectedItem  = document.querySelector('.selected__item'),
          deleteItemBtn = document.querySelector('.deleteItemBtn');

    let selectList = document.querySelector('.select__list')

    const dataUrl = './js/data.json'

    async function fetchData(url) {
        try {
            const response = await fetch(url)
            const data = response.json()

            return data;

        } catch (e) {
            console.error(e);
        }
    }

    let data = fetchData(dataUrl)
                    .then(data => {
                        return data; 
                    })
    console.log(data);

    selectArea.addEventListener('click', oppenSelect);

    function initial(data) {
        data.forEach((obj) => {
            let li = document.createElement("li")

            li.classList.add('select__item')
            li.innerHTML = obj.name

            console.log(li);
            selectList.push(li)
        })
    }


    for (selectItem of selectItems) {
        selectItem.addEventListener('click', addItem)
    }
    
    function oppenSelect (e) {
        selectList.classList.toggle('select__list--opened');
    }

    function addItem (e) {
        (select.hasAttribute('data-multy') && 
            (selectArea.innerHTML += item(e.target.innerHTML))) || 
            (selectArea.innerHTML = e.target.innerHTML)
        
        oppenSelect();
    }

    // function item (value) {
    //     return `<div class="selected__item">
    //                 ${value} 
    //                 <button class="deleteItemBtn">&#10006;</button>
    //             </div>`
    // }

})();