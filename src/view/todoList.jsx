import { useState, useMemo } from 'react';
import { Card, Checkbox   } from 'antd';
import { DeleteTwoTone } from '@ant-design/icons'
import MyInput from '../component/input'
export default function() {
    const [todoList, setTodoList] = useState([{id: Date.now(), name: '打游戏', select: true}])
    const add = (name) => {
        setTodoList([{id: Date.now(), name, select: false}, ...todoList])
    }
    const selectAll = useMemo(() => todoList.every(td => td.select === true))
    const allSelect = () => {
        if (selectAll) {
            setTodoList(todoList.map(td => {td.select = false; return td}))
        } else {
            setTodoList(todoList.map(td => {td.select = true; return td}))
        }
    }

    const deleteTodos = (item, isAll) => {
        if (isAll) {
    
        } else {
            setTodoList(todoList.filter(todo => {if (todo.id !== item.id) return todo}))
        }
    }
    const onChange =(e, todo) => {
    todo.select = e.target.checked
    setTodoList([...todoList])
    }
    return  <>
        <h1>
            React To Do List <MyInput add={add}/>
            </h1>
            <Card title="dad" bordered={false} style={{width: 400}}>
            {
                todoList.map(todo => {
                return (
                    <p key={todo.id} >
                    <Checkbox onChange={(e)=>onChange(e,todo)} checked={todo.select}>{todo.name}</Checkbox>
                    <DeleteTwoTone twoToneColor="#eb2f96" onClick={() => deleteTodos(todo, false)}/>
                    </p>
                )
                
                })
            }
            <div  className='bottom'>
            <Checkbox checked={selectAll} onClick={allSelect}>全选</Checkbox>
            </div>
            </Card> 
    </>
}