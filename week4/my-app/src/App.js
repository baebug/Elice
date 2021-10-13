import './App.css';

import { useState, useMemo } from 'react';

import InsertForm from './components/InsertForm';
import ListView from './components/ListView';

function App() {
  const [todoList, setTodoList] = useState([]);

  const isLimitReached = useMemo(() => {
    // if (todoList.length >= 10) {
    //   return true;
    // } else {
    //   return false;
    // }
    return todoList.length >= 10;
  }, [todoList])

  const insertHandler = (value) => {
    setTodoList((current) => {
      const newTodoList = [...current];
      /* append 가 아니라 push */
      newTodoList.push({
        key: new Date().getTime(),
        value: value,
        isCompleted: false
      })
      return newTodoList;
    })
  }
  const completeHandler = (index) => {
    setTodoList((current) => {
      const newTodoList = [...current];
      newTodoList[index].isCompleted = true;
      return newTodoList;
    })
  }
  const removeHandler = (index) => {
    setTodoList((current) => {
      const newTodoList = [...current];
      newTodoList.splice(index, 1);
      return newTodoList;
    })
  }

  return (
    <div className="App">
        <ListView todoList={todoList} onComplete={completeHandler} onRemove={removeHandler} />
        {isLimitReached &&
          <div style={{
            padding: "8px 16px",
            border: "1px solid #FA466A",
            backgroundColor: "#feecf0",
            color: "#FA466A",
            marginBottom: 16
            }}>
                ※ 할일 목록이 너무 많습니다.
          </div>
        }
        <InsertForm onInsert={insertHandler} disabled={isLimitReached} />
    </div>
  );
}

export default App;
