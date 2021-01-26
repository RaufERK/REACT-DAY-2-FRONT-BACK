import { useEffect, useState, createContext } from 'react'
import TheInput from './components/TheInput'
import TheList from './components/TheList'
import UseRefExpl from './components/UseRefExpl'


export const TodoContext = createContext(null);

function App() {

  const [list, setList] = useState([])

  const myUrl = 'http://localhost:8080'

  const apiFetch = async () => {
    const fetchRes = await fetch(myUrl)
    const result = await fetchRes.json()
    console.log(' RESULT ==>', result);
    setList(result)
  }

  useEffect(() => {
    apiFetch()
  }, [])

  return (
    <div className="comp">
      <h1>данные тут</h1>
      <TodoContext.Provider value={{ list, setList , myUrl}}>
        <TheInput />
        <UseRefExpl />
        <TheList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
