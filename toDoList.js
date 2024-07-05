const inputBox = document.getElementById('input-box');
const listContainar = document.getElementById('list-containar');

function addTask(){
    if (inputBox.value === ''){
        alert('you must write somthing')
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainar.appendChild(li)

        let span  = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainar.addEventListener("click", function(e){
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainar.innerHTML);
}

function showTask(){
    listContainar.innerHTML = localStorage.getItem("data");
}
showTask();

