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