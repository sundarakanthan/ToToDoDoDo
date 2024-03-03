let closeIcon = document.getElementById('close-icon');
let tickButton;
let removeButton;

       
        let addButton = document.getElementById('add-button');
        // let para = document.getElementById('para');
        let errMsg = document.getElementById('para');

        // let removeButton = document.getElementById('remove-button');

        let sno = 1;
    /*
        1. Validate priority - no repetition & sort tasks by priority.
    */
        let addTask = () => {

             tickButton = document.createElement('td');

             removeButton = document.createElement('td');
            event.preventDefault();
           
            let TaskNameValue = document.getElementById('name-input').value;
            let priorityValue = document.getElementById('age-input').value;

            let tableContainer = document.getElementsByClassName('table')[0];

            let tableBody = document.querySelector('tbody');
       
            let tableRow = document.createElement('tr');
            tableRow.id = 'row';

            
            removeButton.id='removeButton';
            removeButton.innerHTML = '<button style="margin:0" class="btn btn-outline-danger">Close</button>'

            
            tickButton.id="tickButton";
            tickButton.innerHTML = '<button style="margin:0" class="btn btn-success">Done</button>'
    

            let serialCell = document.createElement('td');            
            serialCell.textContent = sno++;

            let TaskName = document.createElement('td');
            TaskName.textContent = TaskNameValue;     

            let priorityCell = document.createElement('td');
            priorityCell.textContent = priorityValue;

        if(TaskNameValue === "" || priorityValue === "" ){
                para.style.display = "flex";
                para.textContent = 'Please fill all the fields.'
                para.style.justifyContent = "space-between";
                setTimeout(()=>{
                    
                    para.style.display='none';
                },2000)
            }
            else if(priorityValue<=0){
                alert("Please enter a valid Priority.")
            }
            else{
            tableRow.appendChild(serialCell);
            tableRow.appendChild(TaskName);
            tableRow.appendChild(priorityCell);
            tableRow.appendChild(tickButton);
            tableRow.appendChild(removeButton);
            tableBody.appendChild(tableRow);     
            }
    }

    //Mark a task as done(strikethrough) for each task when button is clicked
    let markAsDone = (task) => {
                 console.log(task);
        }
        tickButton.addEventListener("click",markAsDone);
        
        //Remove the specific task using button.
        let removeTask = () =>{

           event.preventDefault();
           let row = document.getElementById('row')
            row.remove();
            sno = 1;           
        }

        //No changes here
        let clearEverything = () =>{
            event.preventDefault();
            let table = document.querySelectorAll('table tr');
            for (let i = 1; i < table.length; i++) {
            table[i].remove();
             }
             sno=1;
                }
