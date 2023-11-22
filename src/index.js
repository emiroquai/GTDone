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
    
    addListBtnDisp.addEventListener('click', function() {
        // Toggle the form's visibility
    if (addListForm.style.display === "none" || addListForm.style.display === "") {
        addListForm.style.display = "flex"; // Show the form
    } else {
        addListForm.style.display = "none"; // Hide the form
    }
    });
};

ScreenController();