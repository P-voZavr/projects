let ToDo = [];

function addtodo() {
  if (document.querySelector(".inpt").value !== "") {
    ToDo.push(document.querySelector(".inpt").value);
    refresh();
    document.querySelector(".inpt").value = "";
  }
}

function del(par) {
  ToDo.splice(par, 1);
  refresh();
}

function refresh() {
  let list = "";
  for (let s = 0; s < ToDo.length; s++) {
    if (ToDo[s].includes("<")) {
      list += `<div class="tododiv"> ${ToDo[s]}
       <button class="delButton" onclick="del(${s})">delete</button>
       <button class="renameButton" onclick="rename(${s})">rename</button></div>`;
    } else {
      list += `<div class="tododiv"><p class="todo">${s + 1}. ${
        ToDo[s]
      }</p> <button class="delButton" onclick="del(${s})">delete</button>
    <button class="renameButton" onclick="rename(${s})">rename</button></div>`;
    }
  }
  document.querySelector(".td").innerHTML = list;
}

function rename(par) {
  ToDo[
    par
  ] = `<input class="renameInpt" onkeydown='rename2(${par})' placeholder="Rename" >`;
  refresh();
}

function rename2(par) {
  if (event.key === "Enter") {
    ToDo[par] = document.querySelector(".renameInpt").value;
    refresh();
  }
}

function dopact() {
  if (event.key === "Enter") {
    addtodo();
  }
}
