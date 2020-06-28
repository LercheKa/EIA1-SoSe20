window.addEventListener("load", function () {   
    let todoitems: string[] = ["Wake up", "Survive", "Sleep"];

    //To Do erstellen
    function todolist() {
        todofeld.innerHTML = "";
        for (var index = 0; index < todoitems.length; index++) {
            todofeld.innerHTML += "<div id='box'>" + "<input type='checkbox' id='checkbox'>"  + todoitems[index] + "<i class='fas fa-trash-alt'></i>" + "</div>";
        }
        var total: HTMLElement = document.querySelector("#total");
        total.innerHTML = todoitems.length;
    }

    var todofeld: HTMLElement = document.querySelector(".addlist");
    todolist();

    //Neue Aufgabe
    var input: HTMLElement = document.querySelector("#input");
    var button: HTMLElement = document.querySelector("#btn1");
    button.addEventListener("click", function () {
        todoitems.push(input.value);
        todolist();
        input.value = "";
    })

    //Trash
    var close: HTMLElement = document.getElementsByClassName("fas fa-trash-alt");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
})

//Inspiriert an Moritz Labza & Jasmin Basler