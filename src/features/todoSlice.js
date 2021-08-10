import { createSlice } from '@reduxjs/toolkit'

// const [todoList, setTodoList] = useState([])
// const [state, state.todoList.push(action.payload)] = {
//     todoList: []
// }


// empty to start, like saying "useState([])"
const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    // function for the todos
    reducers: {
        // state = current state of the todo, action = what is being executed
        saveTodo: (state, action) => {
            // like saying setTodoList
            state.todoList.push(action.payload)
        },
        setCheck: (state, action) => {
            state.todoList.map(item => {
                if(action.payload === item.id){
                    item.done
                        ? item.done = false
                        : item.done = true
                }
            })
        }
    }
});

export const { saveTodo, setCheck } = todoSlice.actions
export const selectTodoList = state => state.todos.todoList
export default todoSlice.reducer