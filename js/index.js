(function () {

    const select        = document.querySelector('.select'),
          container     = document.querySelector('.container'),
          selectArea    = document.querySelector('.select__area'),
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
                        return new Promise((resolve, reject) => {
                            resolve(data)
                        }); 
                    })
                    
    data.then(clientData => {
        initial(clientData, selectList)
    })
                    
    selectArea.addEventListener('click', oppenSelect);

    async function initial(data, list) {
        let selectItemsist = []
        data.forEach((obj) => {
            let li = document.createElement("li")

            li.classList.add('select__item')
            li.innerHTML = obj.name

            list.appendChild(li)
            selectItemsist.push(li)
        })

        selectItemsist.forEach(item => {
            addEvent(item)
        })
    }
    async function addEvent(target) {
        target.addEventListener('click', addMainItem)
    }
    
    function oppenSelect () {
        selectList.classList.toggle('select__list--opened');
    }

    function addMainItem (e) {
        (selectArea.innerHTML = e.target.innerHTML)

        createSubmenu()
        
        oppenSelect();
    }

    function createSubmenu () {
        let subSelect = document.createElement("div"),
            subMenu = document.createElement("ul")

        subSelect.classList.add("select__area", "select__area_sub")
        subMenu.classList.add("select__list", "select__list_sub")

        initial(data, subMenu)

        container.appendChild(subSelect)
        container.appendChild(subMenu)
    }

})();