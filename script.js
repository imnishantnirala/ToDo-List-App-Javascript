const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("dataList");


const addTask = () => {
    if(inputBox.value === ''){
        window.alert(' Please add something ');
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();