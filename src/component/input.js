import { Input } from 'antd';
import { useState, useRef, useEffect } from 'react';
const { Search } = Input;
function MyInput(props, b ,c) {
    const [value, setValue] = useState('喝水')
    const addTodo = (v) => {
        setValue('')
        props.add(v)
    }
    const myRef = useRef(null)
    useEffect(() => {
        myRef.current.focus()
    }, [])
    return (
        <>
            <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={addTodo}
            defaultValue={value}
            value = {value}
            onInput={(e) => setValue(e.target.value)}
            ref={myRef}
            />
        </>
    )
}
export default MyInput