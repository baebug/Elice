# JavaScript

### Chrome extensions 추천
stylebot, tempermonkey

### 기본적인 기능 제거
event.preventDefault();

innerHTML

## javascript syntax:
1. for문
```js
for(let i = 0; i < abc; i++) {

}
```

2. ? 뭐


## jQuery syntax:
1. 기본 문법
```
$(선택자1).동작[mouse-in, hover 등](function(){
    $(선택자2).css("property", "value");
})
```
ex) hover(in, out)
```js
$('#id-value').hover(function(){
        $(this).css("backgroundColor", "red");
}, function(){
        $(this).css("backgroundColor", "blue");
});
```
css 뿐만 아니라 hide(), show() 등 다양한 기능이 있음. (display: none)

2. class 관련 기능
`hasClass()`, `addClass('sth')`, `removeClass('sth')`

3. 그 외
```js
$(this).siblings()  --> this 와 형제관계 tag들
```