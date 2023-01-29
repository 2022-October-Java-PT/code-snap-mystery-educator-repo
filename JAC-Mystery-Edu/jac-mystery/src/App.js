import { BrowserRouter } from "react-router-dom";
import PageSwitch from "./components/app-router";
import Footer from "./components/footer";
import Header from "./components/header";
import style from './style.module.scss';
import animation from "./assets/animation.mp4";

function App() {
  return (
    <BrowserRouter>
    <video autoPlay muted playsInline loop className={style.animation}>
      <source src={animation} type="video/mp4"></source>
    </video>
    <div className={style.pageContent}>
    <Header />
      <div className={style.page}>
        <PageSwitch />
      </div>
      <Footer />
    </div>
      

    </BrowserRouter>

  );
}

export default App;
