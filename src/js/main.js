const addBtn = document.querySelector('#add');
const rotateBtn = addBtn.querySelector('#rotate');
const modal = document.querySelector('#modal');
const taskInput = document.querySelector('#taskInput');
const taskDescr = document.querySelector('#taskDescr');
const addTaskBtn = document.querySelector('#addTaskButton');
const taskList = document.querySelector('#taskList');
const title = document.querySelector('#title');
const total = document.querySelector('#total');

let currentTask = 0;

function openModal(){
    rotateBtn.classList.toggle('origin-center');
    rotateBtn.classList.toggle('rotate-45');
    modal.classList.toggle('hidden');
    modal.classList.toggle('flex');
    checkText();
}

function hideModal(){
    modal.classList.toggle('hidden');
    modal.classList.toggle('flex');
    rotateBtn.classList.toggle('origin-center');
    rotateBtn.classList.toggle('rotate-45');
}

function checkText(){
    if(taskInput.value === "") addTaskBtn.setAttribute('disabled', 'true');
    else addTaskBtn.removeAttribute('disabled', 'true');
}

function checkList(){
    setTimeout(() => {
        if(taskList.children.length > 1) title.classList.add('hidden');
        if(taskList.children.length === 1) title.classList.remove('hidden');;
    }, 10);
}

setInterval(() => checkText(), 300);

function addTask(){
    const task = document.createElement('div');
    task.classList.add('task','flex','justify-between','border-b-2','border-gray-400','py-2','px-4');
    task.innerHTML = `<h2 class="text-3xl text-gray-8000">${taskInput.value}</h2> <p class="text-gray-700 text-base leading-relaxed mt-2 mb-4">${taskDescr.value}</p> <div class="flex gap-2"><button class="text-3xl text-gray-800" onclick="deleteTask(event)"><span class="material-symbols-outlined text-red-600 font-bold text-2xl">close</span></button> <button class="text-3xl text-gray-800" onclick="completeTask(event)"><span class="material-symbols-outlined text-green-500 font-bold text-2xl">check</span></button>`;
    taskList.prepend(task);
    total.textContent = taskList.children.length - 1;
    taskInput.value = '';
    taskDescr.value = '';
    checkList();
    hideModal();
}

function deleteTask(e){
    const target = e.target;
    let task = target.parentElement.parentElement.parentElement;
    taskList.removeChild(task);
    total.innerHTML = taskList.children.length - 1;
    checkList();
}


function completeTask(e){
    const target = e.target;
    const task = target.parentElement.parentElement.parentElement;
    task.classList.add('bg-gray-200', 'text-gray-500', 'line-through', 'p-4', 'rounded-md', 'shadow-md');
}

function initLisnteners(){
    addBtn.addEventListener('click', openModal);
    addTaskBtn.addEventListener('click', addTask);
    editBtn.addEventListener('click', addTask);
}
function init(){
    initLisnteners()
}

init();
