# 상태 관리

## 상태 관리

### 상태 관리란?
앱 상에서 데이터를 메모리 등에 저장하고, 하나 이상의 컴포넌트에서 데이터를 공유하는 것. `useState`  
한 컴포넌트 내에서의 상태, 여러 컴포넌트 간의 상태, 전체 앱의 상태 관리를 모두 총칭한다.  

### MPA 와 SPA 에서의 상태 관리
MPA 는 서버의 데이터를 이용해 페이지를 렌더링하므로, 클라이언트와 서버의 데이터가 큰 차이를 갖지 않는다.  
SPA 는 자체적으로 데이터를 갖고, 서버와의 동기화가 필요한 데이터만을 처리한다. 그 외 데이터는 클라이언트가 가지고 있다.  

### 상태 관리 기술의 장점
높은 품질의 코드를 작성하는 데 유리하다.
성능, 네트워크 최적화 등에 유리하다.
데이터 관리의 고도화가 가능하다. (localstorage 를 활용한 persist state)

### 상태 관리 기술의 단점
Boilerplate 문제 (외부 라이브러리의 추가로 인해 너무 많아짐)
파악해야 할 로직과 레이어가 많아짐.
잘못 사용할 경우, 복잡도가 높아지고 성능이 저하된다.

## 상태 관리 기술이 해결하는 문제들

### 데이터 캐싱과 재활용
변경이 잦은 데이터가 아니라면, 데이터를 캐싱하고 재활용 함.
변경이 잦은 데이터는 데이터의 변경 시점을 파악해 최적화 한다.

### Prop Drilling
컴포넌트가 복잡해지면서 상위 부모와 자식 컴포넌의 간의 깊이가 커지는 경우가 있다.
Context API 등을 활용하여, 필요한 컴포넌트에서 데이터를 가져올 수 있다.
이를 통해 컴포넌트 간의 결합성을 낮춘다.

## Flux Pattern

### Flux Pattern vs MVC Pattern
MVC 패턴에서는 View 에 특정 데이터를 업데이트하면 연쇄적인 업데이트가 일어난다.
(View - Model - Views - Models - ..., 양방향) 때문에 앱이 커지면 업데이트의 흐름을 따라가기 힘들다.
특정 유저의 인터렉션이 여러 UI 컴포넌트가 사용하는 데이터에 영향을 줄 때, MVC 만으로는 앱의 복잡도를 낮출 수 없다.
Flux 는 하나의 유저 인터렉션 당 하나의 Update 만을 만들도록 한다. (Action) 여러개 생성할 수도 있음
(store - View, 단방향) 때문에 UI의 업데이트를 예측하기 쉽다.

### Flux 구조
Action - Dispatcher - Store - View 순으로 데이터가 흐른다.
view 는 store 를 업데이트 시키기 위해 action 이라는 것을 만든다.
Reducer 는 action 을 받고, 그 action 을 통해 store 를 업데이트 시킨다. 

1. store 는 미리 dispatcher 에 callback 을 등록한다. (특정 action 이 발생하면 callback 을 실행해라)
2. action creator 는 action 을 생성하여 dispatcher 로 보낸다.
(view 는 dispatcher 를 통해 action 을 reducer로 넘기고 reducer 는 store 로 action 을 넘김)
3. store 는 action 에 따라 데이터를 업데이트 하고 관련 view 로 변경이벤트(callback?) 발생
4. view 는 데이터를 다시 받아와 새로운 UI 를 만든다.

## react 에서 제공하는 hook 을 통한 상태 관리
함수형 컴포넌트에 상태를 두고, 여러 컴포넌트 간 데이터와 데이터 변경 함수를 공유하는 방식으로 상태를 관리하게 된다.

### useState
단순한 하나의 상태를 관리하기에 적합하다.
state 가 바뀌면, state를 사용하는 컴포넌트를 리렌더한다. (그 외 state에 반응하는 훅으로는 useEffect가 있다.)
```js
const [state, setState] = useState(initState | initFn)
```

### useRef
상태가 바뀌어도 리렌더링하지 않는 상태를 정의한다. (즉, 상태가 UI의 변경과 관계없을 때 사용.)
```js
const inputRef = useRef();
<input ref={inputRef}>

inputRef.current.value;
```
- useRef Hook 은 DOM 을 선택하는 용도 외
- 컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리
- useRef 로 관리하는 변수는 값이 바뀌어도 컴포넌트 리렌더링 X
- 이 값을 수정 할때에는 .current 값을 수정, 조회 할 때에는 .current 를 조회

### useContext
컴포넌트와 컴포넌트 간 상태를 공유할 때 사용
Context API의 데이터에 접근해야 하는 하위 컴포넌트를 Provider 로 감싼다.
context value 가 바뀌면 내부 컴포넌트는 모두 리렌더링 된다.
```js
const TodoContext = createContext(null);

function useTodoContext() {
    const context = useContext(TodoContext)
    // 에러 처리를 위한 wrapping
    return context;
}

function TodoContextProvider({children}) {
    const values = useTodoContext()l
    return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
    // 이때 value 는 state 와 update func 들
}
```

### useReducer
useState 보다 복잡한 상태를 다룰 때 사용한다.
상태가 복잡하다면, useState 에 관한 callback을 내려주는 것보다 dispatch 를 prop 으로 내려 리렌더링을 최적화 할 수 있다.
```js
const [state, dispatch] = useReducer(reducer, initState)

function reducer(state, action) {
    switch (action.type) {
        case "change.filter":
            return { filter: action.payload.filter };
        case "init.todos":
            return { todos: action.payload.todos };
            ...
        default: return state; 
    }
}

function useTodoState() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const toggleTodo = useCallback( (id) => dispatch({ type: "toggle.todo", payload: {id} }), []);
        ...
    const changeFilter = useCallback( (filter) => dispatch({ type: "change.filter", payload: {filter} }), []);
    const initializeTodos = useCallback( (todos) => dispatch({ type: "init.todos", payload: {todos} }), []);

    return { state, toggleTodo, ... , changeFilter, initializeTodos };
}
```