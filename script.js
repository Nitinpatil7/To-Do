const taskinput=document.getElementById('inputfield');
const addbtn=document.getElementById('addbtn');
const tasklist=document.getElementById('tasklist');

function add(){
    const tasktext=taskinput.value.trim();
    if(tasktext===""){
        alert('Enter a Task');
        return;
    }
    //create a list element
    const li=document.createElement('li');
    //create a first element of list is checkbox
    const checkbox=document.createElement('input');
    checkbox.type='checkbox';
    //add checkbox into list
    li.appendChild(checkbox);
    //create a span which show tasktext in list
    const task=document.createElement('span');
    task.textContent=tasktext;
    //add task with a checkbox in list
    li.appendChild(task);
    //create a delete button
    const dlbtn=document.createElement('button');
    dlbtn.textContent="Delete Task";
    dlbtn.classList.add('delete');
    //add delete button with task span
    li.appendChild(dlbtn);
    //when click on btn then remove task
    dlbtn.addEventListener("click",function(){
    task.remove();
    });

    //when we clicked on list then show as completed.
    //and checked line with gray color
    task.addEventListener('click',function(){
        task.classList.toggle('completed');
    })
    //now add list into tasklist element
    tasklist.appendChild(li);

    tasklist.insertBefore(li, tasklist.firstChild);
    taskinput.value='';

}
addbtn.addEventListener('click',add);
    taskinput.addEventListener('keypress', function (e) {
           if (e.key === "Enter") {
                 add();
             }
         });

