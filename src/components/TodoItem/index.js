// Write your code here
import './index.css'

const TodoItem = props => {
  const {todosList, onDeleteTodo} = props
  const {title, id} = todosList

  const onDelete = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="list-container">
      <div className="container">
        <p className="para">{title}</p>
        <button onClick={onDelete} className="button" type="button">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
