import {Login, Profile} from "./components/index.js"
import UserContextProvider from "./context/UserContextProvider"

function App() {
 

  return (
    <UserContextProvider>
     <Profile />
     <Login />
    </UserContextProvider>
  )
}

export default App
