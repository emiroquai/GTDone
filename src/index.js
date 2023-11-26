import './style.css';

//Task management module
const TaskManager = (() => {
    
    //Task factory
    function Task (title,priority, description, dueDate ) {
        this.id = Date.now().toString()
        this.title = title
        this.description = description
        this.dueDate = new Date(dueDate).toLocaleDateString()
        this.priority = priority
        this.isDone = false
    }

    const lists = [{
        // Base Lists
        id: 'Inbox',
        title: 'Inbox',
        tasks: [{
            id: '1',
            title: 'Start coding the todo app',
            description: "Don't be lazy",
            dueDate: new Date(2023, 10, 23).toLocaleDateString(),
            priority: 'high',
            isDone: true
        }, {
            id: '2',
            title: 'Order new jeans',
            description: "Don't be lazy",
            dueDate: new Date(2023, 10, 23).toLocaleDateString(),
            priority: 'high',
            isDone: false
        }],
        isSelected: true
    }, {
        id: 'Today',
        title: 'Today',
        tasks: [{
            id: '1',
            title: 'Do Laundry',
            description: "Don't be lazy",
            dueDate: new Date(2023, 10, 23).toLocaleDateString(),
            priority: 'normal',
            isDone: false
        },],
        isSelected: false
    } ,{
        id: 'Upcoming',
        title: 'Upcoming',
        tasks: [],
        isSelected: false
    } ,
        // User Lists
    {
        id: 'Home',
        title: 'Home',
        tasks: [{
            id: '1',
            title: 'Do Laundry',
            description: "Don't be lazy",
            dueDate: new Date(2023, 10, 23).toLocaleDateString(),
            priority: 'normal',
            isDone: false
        }],
        isSelected: false
    } , {
        id: 'Work',
        title: 'Work',
        tasks: [],
        isSelected: false
    }]
    
    const getLists = () => lists;

    let selectedList = lists[0];

    const getSelectedList = () => selectedList;

    const getSelectedTasks = () => selectedList.tasks;

    function selectList(listId) {
        selectedList.isSelected = false
        const newList = lists.find(list => list.id === listId);
        newList.isSelected = true;
        selectedList = newList;
    }

    // List factory
    function List(title) {
        this.id = Date.now().toString()
        this.title = title
        this.tasks = []
        this.isSelected = false
    }

    return {
        getLists,
        getSelectedList,
        getSelectedTasks,
        selectList,
        Task,
        List,
    }
})();

//Screen Controller
function ScreenController() {

    const lists = TaskManager.getLists()
    const listsWrapper = document.getElementById('lists-list')
    
    // Toggle the form's visibility
    function toggleForm(form) {
        if (form.style.display === "none" || form.style.display === "") {
            form.style.display = "flex"; // Show the form
        } else {
            form.style.display = "none"; // Hide the form
        }
    }
    
    // Rotate button
    function rotateBtn(button) {
        button.classList.toggle("btn-rotated");
    }
    
    function clearElement(element) {
        element.innerHTML = "";
    }
    
    function render() {

        // Render user lists on the sidebar
        clearElement(listsWrapper);
        lists.forEach(list => {  
            // Skip the base lists
            if (list.id === 'Inbox' || list.id === 'Today' || list.id === 'Upcoming') {
                return
            } else {
            const listElement = document.createElement('li')
            listElement.classList.add('list-name')
            listElement.setAttribute('data-list-id', list.id)
            
            const iconElement = document.createElement("i");
            iconElement.className = "fa-regular fa-folder";
            iconElement.style.color = "#0061ff";
            listElement.appendChild(iconElement)
            
            const textNode = document.createTextNode(list.title)
            listElement.appendChild(textNode)
            
            listsWrapper.appendChild(listElement)
            }
        });
        
        let selectedList = TaskManager.getSelectedList()
        
        // Render selected list  
        const selectedListTitle = document.getElementById('selected-list-title')
        const taskList = document.getElementById('task-list')
        let listTitles = document.querySelectorAll('li.list-name')

        // highlight selected list
        const selectedListTitleSidebar = Array.from(listTitles).find(title => title.dataset.listId === selectedList.id);
        selectedListTitleSidebar.classList.add('selected');
    
        clearElement(selectedListTitle);
        clearElement(taskList);
        selectedListTitle.classList.add('list-name')
        selectedListTitle.innerHTML = selectedList.title

        // Render tasks
        selectedList.tasks.forEach(task => {
            const taskElement = document.createElement('li')
            taskElement.classList.add('task')
            taskElement.setAttribute('data-task-id', task.id)
            
            const iconElement = document.createElement('i')
            if (task.isDone == true) {
                iconElement.className = "fa-solid fa-square-check checkbox red"
                taskElement.classList.add('tsk-done')
            } else {
                iconElement.className = "fa-regular fa-square checkbox"
                
                if (task.priority === 'high') {
                    iconElement.classList.add("red")
                }
            }
            taskElement.appendChild(iconElement)
            
            const taskTitle = document.createTextNode(task.title)
            const line2 = document.createElement('p')
            const dueDate = document.createElement('span')
            const description = document.createTextNode(task.description)
            dueDate.innerHTML = task.dueDate + ' '
            taskElement.appendChild(taskTitle)
            line2.appendChild(dueDate)
            line2.appendChild(description)
            taskElement.appendChild(line2)
            
            taskList.appendChild(taskElement)
        })
            
    }

     const addListBtnDisp = document.getElementById('btn-add-list-disp') 
     addListBtnDisp.addEventListener('click', function() {
         rotateBtn(addListBtnDisp);
         toggleForm(addListForm);
     });

     const addTaskBtnDisp = document.getElementById('btn-add-task-disp')
     addTaskBtnDisp.addEventListener('click', function() {
         rotateBtn(addTaskBtnDisp);
         toggleForm(addTaskForm);
     });

    function clickHandlerBoard() {

        //  Switch lists
        const switchLists = () => { 
            let listTitles = document.querySelectorAll('li.list-name');
            listTitles.forEach(list => {
                list.addEventListener('click', function() {
                // remove higlights on the sidebar
                listTitles.forEach(title => {
                    title.classList.remove('selected')
            })
                    let selectedTitleId = list.dataset.listId
                    TaskManager.selectList(selectedTitleId);
                    render();
                    clickHandlerBoard()
                })
            })
        }
        switchLists();

        // Mark tasks as done
        const toggleIsDone = () => {
            let checkboxes = document.querySelectorAll('i.checkbox')
            checkboxes.forEach(box => {
                box.addEventListener('click', function() {
                    const taskId = box.parentNode.getAttribute('data-task-id')
                    const selectedTasks = TaskManager.getSelectedTasks()
                    const selectedTask = selectedTasks.find(task => task.id === taskId);
                    if (selectedTask.isDone == true) {
                        selectedTask.isDone = false
                    } else {
                        selectedTask.isDone = true
                    }
                    render();
                    clickHandlerBoard();
                })
            })
        }
        toggleIsDone();
    }

     // Create new list
    const addListForm = document.getElementById('form-add-list') 
    const addListFormInput = document.getElementById('new-list-title')
    addListForm.addEventListener('submit', e => {
        e.preventDefault()
        const listTitle = addListFormInput.value
        const newList = new TaskManager.List(listTitle)
        addListFormInput.value = null
        lists.push(newList)
        rotateBtn(addListBtnDisp);
        toggleForm(addListForm)
        render()
        clickHandlerBoard()
     })

    // Create new task
    const addTaskForm = document.getElementById('form-add-task')
    addTaskForm.addEventListener('submit', e => {
        let selectedList = TaskManager.getSelectedList()
        e.preventDefault()
        const addTaskFormInput = document.getElementById('tsk-title')
        const taskTitle = addTaskFormInput.value
        const priority = document.querySelector('input[name="priority"]:checked').value;
        const description = document.querySelector('input[name="description"]').value;
        const dueDate = document.querySelector('input[name="dueDate"]').value;
        const newTask = new TaskManager.Task(taskTitle, priority, description, dueDate)
        console.log(newTask)
        addTaskFormInput.value = null
        selectedList.tasks.push(newTask)
        // Clear form
        document.querySelector('input[id="normalPriority"]').checked = true;
        document.querySelector('input[name="description"]').value = '';
        document.querySelector('input[name="dueDate"]').value = '';

        rotateBtn(addTaskBtnDisp);
        toggleForm(addTaskForm)
        render()
        clickHandlerBoard()
     })



    render();
    clickHandlerBoard();
};

ScreenController()
