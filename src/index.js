import './style.css';

//todo management module
const TodoManager = (() => {
    const todos = []
    
    const projects = ['Inbox']

    const getTodos = () => todos;

    //todo factory
    function Todo (title, description, dueDate, priority) {
        return {title, description, dueDate, priority}
    }

    return {
        getTodos,
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

};

ScreenController();