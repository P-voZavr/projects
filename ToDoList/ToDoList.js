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
    list += `<div class="tododiv"><p class="todo">${s + 1}. ${
      ToDo[s]
    }</p> <button class="delButton" onclick="del(${s})">delete</button></div>`;
  }
  document.querySelector(".td").innerHTML = list;
}
