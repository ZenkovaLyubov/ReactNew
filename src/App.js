import './App.css';
import MessageComponent from './components/MessageComponent';

function App() {
  const text_h1 = "Это текст заголовка";
  const text_p = "Это текст параграфа";
  return (
    <div className='app'>
      <MessageComponent text_h1 = {text_h1} text_p = {text_p} />
    </div>

   
  );
}

export default App;
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;