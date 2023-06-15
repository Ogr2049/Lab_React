import Todo from '../Todo/Todo';
import './TodoList.css'

export default function TodoList({todoList, handleDeleteTodo}) {

    return (
        <div>
            {!todoList.length ? (<h2>No todos</h2>) :
            todoList.map(todo => <Todo key={todo.id} id={todo.id} text={todo.text} handelClick={handleDeleteTodo}/>)}  
        </div>
    )

}