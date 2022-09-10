const getElement = (id) => {
    const element = document.getElementById(id);
    return element;
}


const handleSUbmit = () => {
    const todos = JSON.parse(localStorage.getItem("TODOS"));
    const inputText = getElement('todo-text').value;
    if(!todos){
        const todoList = [
            {
                title : inputText,
                completed : false,
            },
        ];
        localStorage.setItem("TODOS",JSON.stringify (todoList));
    } else{
        const todoList = [
            ...todos,
            
                {
                    title : inputText,
                    completed : false,
                },
            
            
        ];
        localStorage.setItem("TODOS",JSON.stringify (todoList));
    }
    // inputText.innerText = '';
    // console.log("click");
    // const input = document.getElementById('todo-text');
    // console.log(inputText);
    // const ul =getElement('todo-list');
    //  const li =document.createElement("li");
    //  li.classList.add("py-2");
    //  li.innerText = inputText;
    //  ul.appendChild(li);

    render();
};
const render = () => {
    const todos = JSON.parse(localStorage.getItem("TODOS"));
    // console.log(todos);
    const ul = getElement("todo-list");
    ul.innerHTML = '';

    todos.forEach((item) => {
        // console.log(item);
        const li =document.createElement("li");
        li.classList.add('py-4')
        li.innerText = item.title;
        ul.appendChild(li);
    })
}




render();
const handleDelet = () => {
    localStorage.removeItem("TODOS");
    render();
};