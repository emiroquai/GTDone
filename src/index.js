import './style.css';

//todo management module
const TodoManager = (() => {
    
    //todo factory
    function Todo (title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.isDone = false
    }

    const lists = [{
        // Base Lists
        id: 'Inbox',
        title: 'Inbox',
        tasks: [{
            title: 'Do Laundry',
            description: "Don't be lazy",
            dueDate: new Date(2023, 10, 23),
            priority: 'normal',
            isDone: false
        }, {
            title: 'Start coding the todo app',
            description: "Don't be lazy",
            dueDate: new Date(2023, 10, 23),
            priority: 'high',
            isDone: true
        }, {
            title: 'Order new jeans',
            description: "Don't be lazy",
            dueDate: new Date(2023, 10, 23),
            priority: 'high',
            isDone: false
        }],
        isSelected: true
    }, {
        id: 'Today',
        title: 'Today',
        tasks: []
    } ,{
        id: 'Upcoming',
        title: 'Upcoming',
        tasks: []
    } ,
        // User Lists
    {
        id: 1,
        title: 'Home',
        tasks: []
    } , {
        id: 2,
        title: 'Work',
        tasks: []
    }]
    
    const getLists = () => lists;

    // List factory
    function List(title) {
        this.id = Date.now().toString()
        this.title = title
        this.tasks = []
        this.isSelected = false
    }

    return {
        getLists,
        Todo,
        List,
    }
})();

//Screen Controller
function ScreenController () {
    const addListBtnDisp = document.getElementById('btn-add-list-disp')
    const addListForm = document.getElementById('form-add-list') 
    const addListFormInput = document.getElementById('new-list-title')
    const addTaskBtnDisp = document.getElementById('btn-add-task-disp')
    const addTaskForm = document.getElementById('form-add-task')
    const lists = TodoManager.getLists()
    const listsList = document.getElementById('lists-list')
    
    function toggleForm(form) {
        // Toggle the form's visibility
        if (form.style.display === "none" || form.style.display === "") {
            form.style.display = "flex"; // Show the form
        } else {
            form.style.display = "none"; // Hide the form
        }
    }

    function rotateBtn(button) {
         // Rotate button
         button.classList.toggle("btn-rotated");
    }

    addListBtnDisp.addEventListener('click', function() {
        rotateBtn(addListBtnDisp);
        toggleForm(addListForm);
    });

    addTaskBtnDisp.addEventListener('click', function() {
        rotateBtn(addTaskBtnDisp);
        toggleForm(addTaskForm);
    });

    function clearElement(element) {
        element.innerHTML = "";
    }

    function render() {
        clearElement(listsList);
        lists.forEach(list => {
           

            // Render selected list  
            const taskWrapper = document.getElementById('task-list-field')
            const selectedListTitle = document.getElementById('selected-list-title')
            const taskList = document.getElementById('task-list')
            if(list.isSelected == true) {
                
                
                clearElement(selectedListTitle);
                clearElement(taskList);
                selectedListTitle.classList.add('list-name')
                selectedListTitle.innerHTML = list.title

                list.tasks.forEach(task => {
                    const taskElement = document.createElement('li')
                    taskElement.classList.add('task')

                    const iconElement = document.createElement('i')
                    if (task.isDone == true) {
                        iconElement.className = "fa-solid fa-square-check red"
                        taskElement.classList.add('tsk-done')
                    } else {
                        iconElement.className = "fa-regular fa-square checkbox"
                        
                        if (task.priority === 'high') {
                            iconElement.classList.add("red")
                        }
                    }
                    taskElement.appendChild(iconElement)

                    const textNode = document.createTextNode(task.title)
                    taskElement.appendChild(textNode)

                    taskList.appendChild(taskElement)
                })
            }

            
            // Render user lists on the sidebar
            // Skip the base lists
           if (list.id === 'Inbox' || list.id === 'Today' || list.id === 'Upcoming') {
               return
           }
            const listElement = document.createElement('li')
            listElement.classList.add('list-name')
            
            const iconElement = document.createElement("i");
            iconElement.className = "fa-regular fa-folder";
            iconElement.style.color = "#0061ff";
            listElement.appendChild(iconElement)
            
            const textNode = document.createTextNode(list.title)
            listElement.appendChild(textNode)
            
            listsList.appendChild(listElement)
        });

        
    }
    
    // Create new list
    addListForm.addEventListener('submit', e => {
        e.preventDefault()
        const listTitle = addListFormInput.value
        const newList = new TodoManager.List(listTitle)
        addListFormInput.value = null
        lists.push(newList)
        render()
        rotateBtn(addListBtnDisp);
        toggleForm(addListForm)

    })

    render();
};

ScreenController();