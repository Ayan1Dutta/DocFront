import TextEditor from "./TextEditor"
import {
  Route,
  Navigate,
  Routes,
} from "react-router-dom"
import { v4 as uuidV4 } from "uuid"

function App() {
  return (
    <Routes>
      <Route path='/:id' exact element={<TextEditor/>}/>
      <Route path='/' exact element = {<Navigate to={`/${uuidV4()}`}  replace={true}/>} />
    </Routes>

  )
}

export default App
