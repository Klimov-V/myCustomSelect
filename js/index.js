(function () {

    const select = document.querySelector('.select'),
          selectArea = document.querySelector('.select__area'),
          selectList = document.querySelector('.select__list'),
          selectItems = document.getElementsByClassName('select__item');


    selectArea.addEventListener('click', oppenSelect);

    for (selectItem of selectItems) {
        selectItem.addEventListener('click', oppenSelect)
    }

    function oppenSelect () {
        selectList.classList.toggle('select__list--opened');
    }


})();