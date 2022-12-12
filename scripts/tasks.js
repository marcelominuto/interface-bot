const tasksWrapperRef = document.querySelector(".tasksWrapper");
const addTaskBtnRef = document.getElementById("addTaskBtn");
const tasksNumberRef = document.getElementById("tasksNumber");
let tasksNumber = 0;

const deleteTasksRef = document.getElementById("deleteTasks");

addTaskBtnRef.addEventListener("click", (event) =>{
    createTask("Produto Teste", "R$ 0,00", "Marcelo", "Cartão Topate", "Oculus", "Pronto");
    tasksNumberRef.innerHTML = tasksNumber + " Tarefas"
    //createEventListener();
})

deleteTasksRef.addEventListener("click", (event) =>{
    deleteAllTasks();
    tasksNumberRef.innerHTML = tasksNumber + " Tarefas"
})

function createTask(produto, preco, nomeConta, pagamento, proxyNome, status){
    //Cria task
    const task = document.createElement("div");
    task.classList.add("task");

    //Cria taskProduct
    const taskProduct = document.createElement("div");
    taskProduct.classList.add("taskProduct")
    //Cria productName
    const productName = document.createElement("span");
    productName.setAttribute("id", "productName");
    productName.innerHTML = produto;

    taskProduct.appendChild(productName); //Coloca productName dentro de taskProduct
    //Cria price
    const price = document.createElement("div");
    price.classList.add("price");

    const productPrice = document.createElement("span");
    productPrice.setAttribute("id", "productPrice");
    productPrice.innerHTML = preco;
    price.appendChild(productPrice); //Coloca productPirce dentro de price

    taskProduct.appendChild(price) //Coloca price dentro de taskProduct

    //Cria taskInfo
    const taskInfo = document.createElement("div");
    taskInfo.classList.add("taskInfo");
    // Cria conta
    const conta = document.createElement("div");
    conta.classList.add("conta");

    const contaNome = document.createElement("span");
    contaNome.innerHTML = nomeConta;
    conta.appendChild(contaNome); //Coloca contaNome dentro de conta

    taskInfo.appendChild(conta); //Coloca conta dentro de taskInfo
    //Cria payment
    const payment = document.createElement("div");
    payment.classList.add("payment");

    const paymentInfo = document.createElement("span");
    paymentInfo.innerHTML = pagamento;
    payment.appendChild(paymentInfo); //Coloca paymentInfo dentro de payment

    taskInfo.appendChild(payment); //Coloca payment dentro de taskInfo
    //Cria proxy
    const proxy = document.createElement("div");
    proxy.classList.add("proxy");

    const proxyInfo = document.createElement("span");
    proxyInfo.innerHTML = proxyNome;
    proxy.appendChild(proxyInfo); //Coloca proxyInfo dentro de proxy

    taskInfo.appendChild(proxy); //Coloca proxy dentro de taskInfo
    //Cria sku
    const sku = document.createElement("div");
    sku.classList.add("proxy");

    const skuValue = document.createElement("input");
    skuValue.setAttribute("type", "text");
    skuValue.setAttribute("name", "sku");
    skuValue.setAttribute("id", "skuInput");
    skuValue.setAttribute("placeholder", "SKU");
    sku.appendChild(skuValue); //Coloca skuValue dentro de sku

    taskInfo.appendChild(sku); //Coloca sku dentro de taskInfo

    //Cria taskStatus
    const taskStatus = document.createElement("div");
    taskStatus.classList.add("taskStatus");
    //Cria currentStatus
    const currentStatus = document.createElement("span");
    currentStatus.innerHTML = status;

    taskStatus.appendChild(currentStatus); //Coloca currentStatus dentro de taskStatus

   //Cria taskActions
   const taskActions = document.createElement("div");
   taskActions.classList.add("taskActions");
   //Cria buttonStart
   const buttonStart = document.createElement("button");
   buttonStart.classList.add("actionBtn");
   buttonStart.classList.add("insideTaskBtn");
   buttonStart.setAttribute("id", "start");
   const startIcon = document.createElement("i");
   startIcon.classList.add("fa-solid");
   startIcon.classList.add("fa-play");
   buttonStart.appendChild(startIcon); //Coloca startIcon dentro de buttonStart
   //Cria buttonStop
   const buttonStop = document.createElement("button");
   buttonStop.classList.add("actionBtn");
   buttonStop.classList.add("insideTaskBtn");
   buttonStop.setAttribute("id", "stop");
   const stopIcon = document.createElement("i");
   stopIcon.classList.add("fa-solid");
   stopIcon.classList.add("fa-stop");
   buttonStop.appendChild(stopIcon); //Coloca stopIcon dentro de buttonStop
   //Cria buttonClear
   const buttonClear = document.createElement("button");
   buttonClear.classList.add("actionBtn");
   buttonClear.classList.add("insideTaskBtn");
   buttonClear.setAttribute("id", "clear");
   const clearIcon = document.createElement("i");
   clearIcon.classList.add("fa-solid");
   clearIcon.classList.add("fa-cart-shopping");
   buttonClear.appendChild(clearIcon); //Coloca clearIcon dentro de buttonClear
   //Cria buttonEdit
   const buttonEdit = document.createElement("button");
   buttonEdit.classList.add("actionBtn");
   buttonEdit.classList.add("insideTaskBtn");
   buttonEdit.setAttribute("id", "edit");
   const editIcon = document.createElement("i");
   editIcon.classList.add("fa-solid");
   editIcon.classList.add("fa-pen-to-square");
   buttonEdit.appendChild(editIcon); //Coloca editIcon dentro de buttonEdit
   //Cria buttonDelete
   const buttonDelete = document.createElement("button");
   buttonDelete.classList.add("actionBtn");
   buttonDelete.classList.add("insideTaskBtn");
   buttonDelete.classList.add("delete");
   const deleteIcon = document.createElement("i");
   deleteIcon.classList.add("fa-solid");
   deleteIcon.classList.add("fa-trash");
   buttonDelete.appendChild(deleteIcon); //Coloca deleteIcon dentro de buttonDelete

   taskActions.appendChild(buttonStart); //Coloca buttonStart dentro de taskActions
   taskActions.appendChild(buttonStop); //Coloca buttonStop dentro de taskActions
   taskActions.appendChild(buttonClear); //Coloca buttonClear dentro de taskActions
   taskActions.appendChild(buttonEdit); //Coloca buttonEdit dentro de taskActions
   taskActions.appendChild(buttonDelete); //Coloca buttonEdit dentro de taskActions

    //Organiza a task
    task.appendChild(taskProduct); //Coloca taskProduct dentro de task
    task.appendChild(taskInfo); //Coloca taskInfo dentro de task
    task.appendChild(taskStatus); //Coloca taskStatus dentro de task
    task.appendChild(taskActions); //Coloca taskActions dentro de task

    tasksWrapperRef.appendChild(task); //Coloca task dentro de tasksWrapperRef
    tasksNumber++;
}

function deleteAllTasks(){
    var child = tasksWrapperRef.lastElementChild; 
        while (child) {
            if(child.id != "taskFields"){
                tasksWrapperRef.removeChild(child);
                child = tasksWrapperRef.lastElementChild;
                tasksNumber--;
            } else {
                return;
            }
        }
}

//Não está funcionando
function deleteTask(){
    const deleteSingleTaskRef = document.querySelector(".delete");
    var pai = deleteSingleTaskRef.parentElement
    var vo = pai.parentElement;
    
    console.log(vo);
    tasksWrapperRef.removeChild(vo);
    tasksNumber--;
}

function createEventListener() {
    const deleteSingleTaskRef = document.querySelector(".delete");
    if (deleteSingleTaskRef) {
        deleteSingleTaskRef.addEventListener("click", (event) =>{
            deleteTask()
        })
    } else {
            console.log(Error('fail'));
    }
}