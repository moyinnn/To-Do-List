import './todo.css'

const Todo = ({
    task: {description, id, done},
    handleDelete, 
    handleDone
}) => {
    return(
        <div>
            <div>
                <span className={done ? 'done' : 'undone'}>{description}</span>
            </div>

            <div>
                <img 
                    style={{width : '50px'}}
                    src= {require('../assets/delete1-removebg-preview.png')}
                    alt='delete'
                    onClick={() => handleDelete(id)}
                />
            </div>

            <div>
                <img 
                    style={{width : '50px'}}
                    src= {require('../assets/arrow-removebg-preview.png')}
                    alt='done'
                    onClick={() => handleDone(id)}
                />
            </div>
        </div>
    )
}

export default Todo;