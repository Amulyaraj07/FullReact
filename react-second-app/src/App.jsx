import React from "react"
import Button from "./components/Button"
import Copy from "./components/Copy"
import Move from "./components/Move"
import Counter from "./components/Counter"
import FriendList from "./components/FriendList"
import Movies from "./components/Movies"
import CompAB from "./components/CompAB"
import ExampleOne from "./components/ExampleOne"
import ExampleTwo from "./components/ExampleTwo"
import ExampleThree from "./components/ExampleThree"
import Todo from "./components/Todo"
import Profile from "./components/Profile"
import ShoppingList from "./components/ShoppingList"
import CopyingInput from "./components/portal/CopyingInput"
import Switcher from "./components/portal/Switcher"
import UseEffect from "./components/useEffect/UseEffect"
import Data from "./components/useEffect/Data"
import BasicEffects from "./components/useEffect/BasicEffects"
import CounterEffect from "./components/useEffect/CounterEffect"
import FetchDataEffect from "./components/useEffect/FetchDataEffect"
import ComponentA from "./components/propdrilling/ComponentA"
import MainComp from "./components/createContext/MainComp"
import { UserContext, UserProvider } from "./components/useContextPractice/UserContext"
 
function App() {

  return (
    <>
      <h1>Hiii React</h1>
      {/* <Button/>
      <Copy/>
      <Move/>
      <Counter/>
      <FriendList/> */}
      {/* <Movies/> */}
      {/* <CompAB/> */}
      {/* <ExampleOne/>
      <ExampleTwo/>
      <ExampleThree/> */}

      {/* <Todo/> */}

      {/* <Profile/> */}
      {/* <ShoppingList/> */}
      {/* <CopyingInput/>
      <Switcher/> */}

      {/* <UseEffect/> */}
      {/* <Data/> */}
      {/* <BasicEffects/>
      <CounterEffect/>
      <FetchDataEffect/> */}

      {/* <ComponentA name="Amulya"/> */}

      {/* <MainComp/> */}

      <UserProvider >
        <UserContext/>
      </UserProvider>
      

    </>
  )
}

export default App
