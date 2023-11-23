import './style.css';

//todo management module
const TodoManager = (() => {
    const todos = []
    const getTodos = () => todos;
    
    const userLists = ['Home' , 'Work']
    const getLists = () => userLists;

    //todo factory
    function Todo (title, description, dueDate, priority) {
        return {title, description, dueDate, priority}
    }

    return {
        getTodos,
        getLists,
        Todo
    }
})();

//Screen Controller
function ScreenController () {
    const addListBtnDisp = document.getElementById('btn-add-list-disp')
    const addListForm = document.getElementById('form-add-list') 
    const addTaskBtnDisp = document.getElementById('btn-add-task-disp')
    const addTaskForm = document.getElementById('form-add-task')
    
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

    function render() {
        const userLists = TodoManager.getLists()
        const listsList = document.getElementById('lists-list')
        userLists.forEach(list => {
            const listElement = document.createElement('li')
            listElement.classList.add('list-name')
            
            const iconElement = document.createElement("i");
            iconElement.className = "fa-regular fa-folder";
            iconElement.style.color = "#0061ff";
            listElement.appendChild(iconElement)
            
            const textNode = document.createTextNode(list)
            listElement.appendChild(textNode)
            
            listsList.appendChild(listElement)
        });
    }

    render();
};

ScreenController();