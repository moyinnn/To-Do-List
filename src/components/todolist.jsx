import Todo from "./todo";

const TodoList = ({todos, handleDelete, handleDone}) => {

    return(
        <div>
            {
                todos.map((task, key) => (
                    <Todo
                        task={task}
                        key={key}
                        handleDelete={handleDelete}
                        handleDone={handleDone}
                    />
                ))
            }
        </div>
    )
}

export default TodoList;