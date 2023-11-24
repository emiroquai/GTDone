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
        tasks: [{
            title: 'Do Laundry',
            description: "Don't be lazy",
            dueDate: new Date(2023, 10, 23),
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
            title: 'Do Laundry',
            description: "Don't be lazy",
            dueDate: new Date(2023, 10, 23),
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
        selectList,
        Todo,
        List,
    }
})();

//Screen Controller
function ScreenController() {
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
    
    function clearElement(element) {
        element.innerHTML = "";
    }
    
    function render() {
        

        clearElement(listsList);

        lists.forEach(list => {  
            // Render user lists on the sidebar
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
            
            listsList.appendChild(listElement)
            }
        });
            
        lists.forEach(list => {  
            // Render selected list  
            const selectedListTitle = document.getElementById('selected-list-title')
            const taskList = document.getElementById('task-list')
            let listTitles = document.querySelectorAll('li.list-name')

            if (list.isSelected == true) {
                // highlight selected list
                const selectedListTitleSidebar = Array.from(listTitles).find(title => title.dataset.listId === list.id);
                selectedListTitleSidebar.classList.add('selected');
            
                clearElement(selectedListTitle);
                clearElement(taskList);
                selectedListTitle.classList.add('list-name')
                selectedListTitle.innerHTML = list.title
                // Render tasks
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
            
            
        });
    }
    
    
    function clickHandlerBoard() {
        addListBtnDisp.addEventListener('click', function() {
            rotateBtn(addListBtnDisp);
            toggleForm(addListForm);
        });
        
        addTaskBtnDisp.addEventListener('click', function() {
            rotateBtn(addTaskBtnDisp);
            toggleForm(addTaskForm);
        });
    
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
            clickHandlerBoard()
         })
        
         
         //  Switch lists
        let listTitles = document.querySelectorAll('li.list-name');
        listTitles.forEach(list => {
            list.addEventListener('click', function() {
            // remove higlights on the sidebar
            listTitles.forEach(title => {
                title.classList.remove('selected')
        })
                let selectedTitleId = list.dataset.listId
                TodoManager.selectList(selectedTitleId);
                render();
                clickHandlerBoard()
            })
        })

    }
    render();
    clickHandlerBoard();
};

ScreenController()
