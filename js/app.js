

var inputField = document.querySelector('input');
var todoList = document.querySelector('.todo_list');

inputField.addEventListener('keypress', createList);

function createList(event){
    if(event.key === 'Enter'){
       var listItems = document.createElement('li');
       listItems.classList.add('todo_list--items');
       var checkBtn = '<input type="checkbox">';
       todoList.appendChild(listItems);
       listItems.innerHTML = checkBtn + ' ' + inputField.value;
       inputField.value = '';   
    }
}



