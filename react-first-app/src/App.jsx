import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Expressions from "./components/Expressions";
import ProductInfo from "./components/ProductInfo";
import Lists from "./components/Lists";
import Props from "./components/Props";
import ConditionalRendering from "./components/ConditionalRendering";

function  App(){
  return <>
    <Header/>
    <Main/>
    <Footer/>
    <Expressions/>
    <ProductInfo/>
    <Lists/>
    <Props
      img="someimage.jpg"
      name="Amulya Raj"
      age={20}
      isMarried={false}
      hobbies={["reading", "coding", "gaming"]}
    />

    {/* <ConditionalRendering isValid={true}/> */}

    {/* <ConditionalRendering isLogged={true} isAdmin={true}/> */}

    <ConditionalRendering timeOfDay="morning"/>
  </>
}

export default App;