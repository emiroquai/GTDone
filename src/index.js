import './style.css';

//Task management module
const TaskManager = (() => {
    
    //Task factory
    function Task (title,priority, description, dueDate ) {
        this.id = Date.now().toString()
        this.title = title
        this.description = description
        if (dueDate != '') {
            this.dueDate = new Date(dueDate) 
        } else {
            this.dueDate = ''
        }
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
            dueDate: new Date(),
            priority: 'high',
            isDone: true
        }, {
            id: '2',
            title: 'Order new jeans',
            description: "Don't be lazy",
            dueDate: new Date(2024, 11, 30),
            priority: 'high',
            isDone: false
        }],
        isSelected: true
    }, 
    {
        id: 'Today',
        title: 'Today',
        tasks: [],
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
            dueDate: new Date(),
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

    const getAllTasks = () => {
        let allTasksObjects = []
        let allTasks = []
        lists.forEach(list => {
            allTasksObjects.push(list.tasks)    
        })
        allTasksObjects.forEach(tasks => {
            for (let index = 0; index < tasks.length; index++) {
                allTasks.push(tasks[index])
            }
        })
        return allTasks
    }

    const updateTodayTasks = () => {
        lists[1].tasks = []
        let allTasks = getAllTasks()
        let currentDate = new Date().toLocaleDateString()
        let todayTasks = allTasks.filter(function(task) {
            return task.dueDate.toLocaleDateString() === currentDate
        })
        lists[1].tasks = todayTasks
    }

    const updateUpcomingTasks = () => {
        lists[2].tasks = []
        let allTasks = getAllTasks()
        let currentDate = new Date()
        let upcomingTasks = allTasks.filter(function(task) {
            return task.dueDate > currentDate
        })
        lists[2].tasks = upcomingTasks
    }

    function selectList(listId) {
        selectedList.isSelected = false
        const newList = lists.find(list => list.id === listId);
        newList.isSelected = true;
        selectedList = newList;
    }

    const updateList = () => {
        let selectedTasks = getSelectedTasks()
        let filteredTasks = selectedTasks.filter(function(task) {
            return task.isDone == false;
        })
        selectedList.tasks = filteredTasks
    }

    // List factory
    function List(title) {
        this.id = Date.now().toString()
        this.title = title
        this.tasks = []
        this.isSelected = false
    }

    // Local Storage
    function init() {
        if (!localStorage.getItem("lists")) {
            localStorage.setItem("lists", JSON.stringify(lists));
            console.log(JSON.parse(localStorage.getItem("lists")))
        } else {
            return
        }
    }
    init();

    const listsStored = JSON.parse(localStorage.getItem("lists"))
    
    // Add List
    const addList = () => {
        const addListFormInput = document.getElementById('new-list-title')
        const listTitle = addListFormInput.value
        const newList = new List(listTitle)
        lists.push(newList)        
    }

    // Add Task
    const addTask = () => {
        const addTaskFormInput = document.getElementById('tsk-title')
        const taskTitle = addTaskFormInput.value
        const priority = document.querySelector('input[name="priority"]:checked').value;
        const description = document.querySelector('input[name="description"]').value;
        const dueDate = document.querySelector('input[name="dueDate"]').value;
        const newTask = new TaskManager.Task(taskTitle, priority, description, dueDate)
        selectedList.tasks.push(newTask)
    }
    

    return {
        getLists,
        getSelectedList,
        getSelectedTasks,
        getAllTasks,
        updateTodayTasks,
        updateUpcomingTasks,
        selectList,
        updateList,
        addList,
        addTask,
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
            const description = document.createTextNode(task.description)
            if (task.dueDate != '') {
                const dueDate = document.createElement('span')
                dueDate.innerHTML = task.dueDate.toLocaleDateString() + ' '
                line2.appendChild(dueDate)
            }
            taskElement.appendChild(taskTitle)
            line2.appendChild(description)
            taskElement.appendChild(line2)
            
            taskList.appendChild(taskElement)
        })
        console.log(selectedList)    
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
                TaskManager.updateTodayTasks()
                TaskManager.updateUpcomingTasks()
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

        // Delete completed tasks
        const deleteCompleted = () => {
            const deleteButton = document.getElementById('clr-done')
            deleteButton.addEventListener('click', function() {
                TaskManager.updateList();
                render();
                clickHandlerBoard();
            })
        }
        deleteCompleted();
    }

     // Create new list
    const addListForm = document.getElementById('form-add-list') 
    const createList = () => {
        addListForm.addEventListener('submit', e => {
            e.preventDefault()
            TaskManager.addList();
            document.getElementById('new-list-title').value = null
            rotateBtn(addListBtnDisp);
            toggleForm(addListForm)
            render()
            clickHandlerBoard()
         })
    }
    createList()

    // Create new task
    const addTaskForm = document.getElementById('form-add-task')
    const createTask = () => {
        addTaskForm.addEventListener('submit', e => {
            e.preventDefault()
            TaskManager.addTask();
            // Clear form
            document.getElementById('tsk-title').value = null
            document.querySelector('input[id="normalPriority"]').checked = true;
            document.querySelector('input[name="description"]').value = '';
            document.querySelector('input[name="dueDate"]').value = '';

            rotateBtn(addTaskBtnDisp);
            toggleForm(addTaskForm)
            render()
            clickHandlerBoard()
        })
    }
    createTask();



    render();
    clickHandlerBoard();
};

ScreenController()
