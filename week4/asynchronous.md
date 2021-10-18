talkBot을 만들 당시 setTimeout 함수가 정확히 n초 후에 실행되지 않던 이유를 배웠다.

> setTimeout 함수는 reliable 하지 않다.

n초가 지나더라도 main thread에 여유가 없으면 실행되지 않는다.

> 그래서 어떻게 해결했더라?

현재 시간을 측정 후 +n 을 해주고 while문으로 계속 체크했던 것 같다.

### Callback pattern vs Promise

1. Callback pattern
비동기 처리 후 실행될 코드를 Callback function으로 보내는 것.  
setTimeout이 이에 해당 됨.  
하지만 비동기 처리가 고도화되면서, Callback hell 등 단점이 부각됨.  

2. Promise
객체 생성 당시에는 알려지지 않은 데이터에 대한 Proxy

- in Single request
```js
// Callback patter
function fetchUsers(onSuccess) {
    request('/users', onSuccess)
}

// Promise
function fetchUsers(onSuccess) {
    return request('/users').then(onSuccess)
}
```

- in Multiple request
```js
// Callback patter
function fetchUserAddress(onSuccess) {
    request('/users', (userData) => {   // 1. request
        const userDataWithAddress = []
        const userLength = userData.length

        userData.map(user => request(`/users/${user.userId}/address`, (address) => {    // 2. request
            userDataWithAddress.push({ ...user, address })
            if (userDataWithAddress.length === userLength) {
                onSuccess(userDataWithAddress)  // 3. onSuccess
            }
        }))
    })
}

// Promise
function fetchUserAddress() {
    return request("/users").then((userData) =>     // 1. request
        Promiser.all(
            userData.map((user) => 
                request(`/users/{user.userId}/address`).then((address) => ({    // 2. request
                    ...user,
                    address,
                }))
            )
        )
    );
}
```

### async / await
Promise 체인을 구축하지 않고도, Promise를 직관적으로 사용할 수 있는 문법  
async function을 만들고, Promise를 기다려야 하는 표현 앞에 await을 붙임  
```js
// async/await
async function fetchUsers() {
    try {
        const users = await request('/users')   // resolved data
        console.log("users fetched.")
        return users
    } catch (e) {
        console.log("error : ", e)
    }
}

// Promise
function fetchUsers() {
    return request('/users')
        .then(users => console.log("users fetched."))
        .catch(e => console.log("error : ", e))
}
```

- in Multiple request
```js
// async/await
async function fetchUserWithAddress(id) {
    try {
        const user = await request(`/user/${user.id}`)
        const address = await request(`/user/${user.id}/address`)
        return { ...user, address }
    } catch (e) {
        console.log("error : ", e)
    }
}
```
### POSTMAN, OpenAPI, CORS
1. POSTMAN
API 를 테스트 할 수 있다. 짱좋아보임..

2. OpenAPI
문서 표준

3. CORS
브라우저는 모든 요청 시 Origin 헤더를 포함. 다른 Origin에서 온 요청은 서버에서 기본적으로 거부.
    - 웹사이트에 악성 script가 로드되어, 수상한 요청을 하는 경우
    - 익명 유저로부터의 DDos 공격
but, 보통 서버의 endpoint와 홈페이지 domain은 다른 경우가 많다.
따라서 서버에서는 홈페이지 domain을 허용하여, 다른 domain이라 하더라도 요청을 보낼 수 있게 한다.
