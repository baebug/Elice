## Data Structure
### Class
```py
class Sth:
    def __init__(self):
        self.a = 0
        self.b = "초기화"
        self.c = Cls("sth")
    
    def func(self, arg1):
        self.a += arg1

class Cls:
    def __init__(self, argument):
        self.d = argument

test = Sth()
print(test.c.d) # sth
```

### Linked List
```py
def deleteNode(ll, valToDelete):
    node = ll.head
    prev = None
    
    while node:
        if node.val == valToDelete:     # 지워야 할 노드를 찾은 경우
            if prev == None:            # case1 첫번째 노드일 때
                ll.head = node.next     # 그러면 다음 친구가 head가 된다.
            elif node.next == None:     # case2 마지막 노드일 때
                ll.tail = prev          # 이전 친구가 tail 이 된다.
                prev.next = None
            else:                       # 중간에 있는 노드일 때
                prev.next = node.next   # 이전의 next를 node의 next 와 연결한다.
                                        # 지워야 할 노드가 아닐 때 
        prev = node                     # 지금 녀석이 이전이 되고
        node = node.next                # 다음으로 넘어간다.
    
    return node
```

### 괄호 매칭
열리는 순서대로 닫히는 것에 주목하여 구현한다.
```py
# 열리는 괄호는 keys, 닫히는 괄호는 values 로 둔다.
_dict = {
        "(" : ")",
        "{" : "}",
        "[" : "]",
        "<" : ">"
    }
openArr = []

for i in str:               # 입력받은 괄호 string 에 대하여

    if i in _dict.keys():   # 여는 괄호인 경우
        openArr.append(i)   # array에 모은다.
    else:                   # 여기서 걸리는 애들은 닫는 괄호이므로
        if openArr:         # 닫는 괄호가 나왔는데 array가 비어있으면 False 이다.
            # 가장 최근에 나온 여는 괄호와 짝이 맞는 경우 pass
            if i == _dict[openArr.pop()]:
                pass
            else:
                return False
    
return True
```

### 피보나치
멤버 변수로 `memo` 라는 `object` 를 가지고,
이전에 계산한 값을 보관한다.  
입력받은 수가 self.memo.keys() 에 없을 경우 계산한다.

### deque
앞뒤로 다 넣었다 뺐다 할 수 있는 갓갓데이터구조
```
from collections import deque
```

### Anagram
1. string 의 c 를 dict 에 기록하고 비교한다.
```py
_dict1 = {}
_dict2 = {}

for c in str1:
    if c in _dict1.keys():
        _dict1[c] += 1
    else:
        _dict1[c] = 1

# _dict2 도 반복

return _dict1 == _dict2
```
2. 문자열을 sorting 하여 비교한다.
```py
return sorted(str1) == sorted(str2)
```
`sort()`: 입력받은 데이터를 정렬한다.  
`sorted()`: 입력받은 데이터를 정렬하고 반환한다.

### quickSort
```py
# 재귀적으로 구현되어 있으므로 탈출 조건을 반드시 명시한다.
if len(array) <= 1:
        return array
        
less_Arr = []
more_Arr = []
pivot = array[0]

for i in range(1, len(array)):
    if array[i] > pivot:
        more_Arr.append(array[i])
    else:
        less_Arr.append(array[i])    

return quickSort(less_Arr) + [pivot] + quickSort(more_Arr)
```

### binary Tree
전위순회(root-left-right),  
중위순회(left-root-right),  
후위순회(left-right-root) ...

그 외 탐색에 대해서는 따로 공부 필요