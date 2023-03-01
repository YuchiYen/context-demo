import './App.css';
import Button from './Button';
import ThemeContext, { ThemeController } from './ThemeContext';

function Form() {
  return (
    <form>
      <Button />
    </form>
  )
}

function App() {
  return (
    <div className="App">
      {/* <ThemeContext.Provider value={{themeName: 'light'}}>
        <h2>Theme!</h2>
        <Button />
        <Form />
      </ThemeContext.Provider> */}
      <ThemeController>
        <Button />
      </ThemeController>
    </div>
  );
}

export default App;
