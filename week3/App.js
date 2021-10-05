import logo from './logo.svg';
import './App.css';

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function Nav(props) {
  // var lis = [
  //   <li><a href="1.html">html</a></li>,
  //   <li><a href="2.html">css</a></li>
  // ]
  var lis = [];
  for(var i = 0; i < props.src.length; i++){
    var item = props.src[i]
    lis.push(
      <li key={item.id}>
        <a href={item.id + ".html"}> {/* 중괄호 안에 + ".html" */}
          {item.title}
        </a>
    </li>
    )
  }
  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  );
}

function Header(props) {
  function aHandler(e) {
    e.preventDefault();
    props.onSelect();
  }
  return (
    <header>
      <h1>
        <a href="index.html" onClick={aHandler}>
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function App() {
  var topics = [
    {id: 1, title: 'html', body: 'html is ...'},
    {id: 2, title: 'css', body: 'css is ...'}
  ]
  function onSelectHandler(){
    alert(123);
  }
  return (
    <div>
      <Header title="WEB" onSelect={onSelectHandler}></Header>
      <Nav src={topics}></Nav>
      <Article title="WEB" body="Hello, WEB"></Article>
      <Article title="HTML" body="HTML is ..."></Article>
    </div>
  );
}

export default App;
