(function () {

    const select        = document.querySelector('.select'),
          selectArea    = document.querySelector('.select__area'),
          selectList    = document.querySelector('.select__list'),
          selectItems   = document.querySelectorAll('.select__item'),
          selectedItem  = document.querySelector('.selected__item'),
          deleteItemBtn = document.querySelector('.deleteItemBtn');

    selectArea.addEventListener('click', oppenSelect);

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

    function item (value) {
        return `<div class="selected__item">
                    ${value} 
                    <button class="deleteItemBtn">&#10006;</button>
                </div>`
    }

})();