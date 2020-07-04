interface toDo {
    text: string;
    checked: boolean;
}

var toDoList: toDo[] = [
    { text: "Wake Up",
    checked: true },
    { text: "Survive",
    checked: true },
    { text: "Sleep",
    checked: false }
];

var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;

window.addEventListener("load", function(): void {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});

function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";
    for (let index: number = 0; index < toDoList.length; index++) {
        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML =  "<span class='check " + toDoList[index].checked + "'><i class='fas fa-check'></i></span>"
                            + toDoList[index].text +
                            "<span class='trash fas fa-trash-alt'></span>";

        todo.querySelector(".check").addEventListener("click", function(): void {
            toggleCheckState(index);
        });

        todo.querySelector(".trash").addEventListener("click", function(): void {
            deleteTodo(index);
        });

        todosDOMElement.appendChild(todo);
    }
    updateCounter();
}


function updateCounter(): void {
    var openTasks: number = 0;
    var doneTasks: number = 0;

    for (let index = 0; index < toDoList.length; index++) {
        if (toDoList[index].checked == true) {
            doneTasks++;
        }
        else {
            openTasks++;
        }
        counterDOMElement.innerHTML = toDoList.length + " in total " + "<br>" + openTasks + " open " + "<br>" + doneTasks + " done";
    }
}

function addTodo(): void {
    if (inputDOMElement.value != "") {
        toDoList.unshift(
            { text: inputDOMElement.value,
            checked: false
            }
        );

        inputDOMElement.value = "";
        drawListToDOM();
    }
}

function toggleCheckState(index: number): void {
    toDoList[index].checked = !toDoList[index].checked;
    drawListToDOM();
}

function deleteTodo(index: number): void {
    toDoList.splice(index, 1);
    drawListToDOM();
}