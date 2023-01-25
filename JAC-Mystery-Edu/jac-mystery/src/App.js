import { BrowserRouter } from "react-router-dom";
import PageSwitch from "./components/app-router";
import Footer from "./components/footer";
import Header from "./components/header";
import style from './App.css';

function App() {
  return (
    <BrowserRouter>
        <Header />
    <div className={style.page}>
        <PageSwitch />
    </div>
        <Footer />
      </BrowserRouter>
      
  );
}

export default App;
