const getElement = (id) => {
    const element = document.getElementById(id);
    return element;
}


const handleSUbmit = () => {
    const inputText = getElement('todo-text').value;
    // inputText.innerText = '';
    // console.log("click");
    // const input = document.getElementById('todo-text');
    // console.log(inputText);
    const ul =getElement('todo-list');
     const li =document.createElement("li");
     li.innerText = inputText;
     ul.appendChild(li);


}