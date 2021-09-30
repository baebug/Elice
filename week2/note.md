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

---
0930
## DOM
`getElement(s)By`  
`childNodes`, `nodeName`, `nodeValue`, `nodeType`  
`onclick`, `window.onload`, `addEventListener`  

## jQuery
```js
$(function() {
        $("header li a").click(function(e) {
                e.preventDefault();

        });

        $("header li").click(function() {


        });
});
```
막 이런 식으로 만드는데 몇가지 유용한 메서드들이 있다.
1. `hash` 
```js
var $target = $(this.hash);
```
2. `animate`, `scrollTop`, `offset().top`
```js
$("body").animate({
        scrollTop: $target.offset().top
}, "slow");

$(" ").animate({
        /* animation-body */
        css 관련 내용
}, time, callback())
```
3. `find`
```js
var $slides = $("#slider").find(".slides");
```
4. `attr`
```js
var $tabId = $(this).attr("href");
```
5. `class`
```js
$(this).addClass("on");
$(this).removeClass("on");
$(this).toggleClass("on");
$(this).hasClass("sth");
```
6. 순서
```js
var $prevSlide = $curSlide.prev();
var $nextSlide = $curSlide.next();

$($slides).first();
$($slides).last();
```
7. effect
```js
hide();
show();
toggle();
fadeOut();
fadeIn();
```
