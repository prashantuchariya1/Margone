 import style from './App.module.css';
import Navbar from './components/navbar/Navbar'
import HeadingColumn from './components/headingColumn/headingColumn'
import LoginForm from './components/loginForm/loginForm'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className={style.mid}>
      <HeadingColumn/>
      <LoginForm/>

      </div>
      

    </div>
  );
}

export default App;
