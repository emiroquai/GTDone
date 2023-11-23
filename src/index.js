import './style.css';

//todo management module
const TodoManager = (() => {
    const todos = []
    const getTodos = () => todos;
    
    //todo factory
    function Todo (title, description, dueDate, priority) {
        return {title, description, dueDate, priority}
    }
    const userLists = [{
        id: 1,
        title: 'Home'
    } , {
        id: 2,
        title: 'Work'
    }]
    
    const getLists = () => userLists;

    // List factory
    function List(title) {
        this.id = Date.now().toString()
        this.title = title
        this.tasks = []
    }

    return {
        getTodos,
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
    const userLists = TodoManager.getLists()
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
        // Render user created lists
        clearElement(listsList);
        userLists.forEach(list => {
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
    
    // New list
    addListForm.addEventListener('submit', e => {
        e.preventDefault()
        const listTitle = addListFormInput.value
        const newList = new TodoManager.List(listTitle)
        addListFormInput.value = null
        userLists.push(newList)
        render()

    })

    render();
};

ScreenController();