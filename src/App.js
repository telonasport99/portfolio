import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";
import Search from "./Search/Search";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
    <Header/>
      <Main/>
      <Skills/>
      <Works/>
      <Search/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
