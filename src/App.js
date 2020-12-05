import './styles/main.css';
import Header from "./components/Header";
import AppBody from "./components/AppBody";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App"> 
      <div className="bg-gray-200">
        <Header/>  
        <AppBody/>      
        <Footer/>        
      </div>     
    </div>
  );
}

export default App;
