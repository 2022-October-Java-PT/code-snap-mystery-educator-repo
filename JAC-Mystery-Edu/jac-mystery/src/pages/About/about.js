import React from "react";
import dagImg from '../../assets/DougHolt.jpg';
import nuhaminImg from '../../assets/nuhamin.jpg'
import kadeenImg from '../../assets/IMG_1459.jpg' 
import style from './style.module.scss'

const AboutPage = () => {

    return(
        <>
        <div className={style.about}>
        <h1 className={style.about}>About Us Page </h1>
        <p className={style.about}>We Are Team Code Snap.</p>
        </div>
        <h2 className={style.team}> Our Team</h2>
        
        <div className={style.container}>
            <div class={style.dogh}>
        <img className={style.img} src={dagImg} alt="dag-image" />
        <h2 className={style.text}> Dough Dough Holt</h2>
        <p className={style.text}>We can code it student</p>
        <p className={style.text}> dougholt@gmail.com</p>
        </div>

        <div  className={ style.nuhamit}>
            <img className={style.img} src={nuhaminImg} alt="nuhamin image"/>
            <h2 className={style.text}>Nuhamin Tesfaye</h2>
        <p className={style.text}>We can code it student</p>
        <p className={style.text}> nuhamintesfaye@gmail.com</p>
            </div> 
         </div>

          <div className={style.container1}>
            <div class={style.kadeen}>
        <img className={style.img} src={kadeenImg} alt="kadeen-image" />
        <h2 className={style.text}> Kadeen  Jennings</h2>
        <p className={style.text}>We can code it student</p>
        <p className={style.text}> kadeenjannings@gmail.com</p>
        </div>

          <div  className={ style.nuhamit}>
            <img className={style.img} src={nuhaminImg} alt="nuhamin image"/>
            <h2 className={style.text}>Harun Farah</h2>
        <p className={style.text}>We can code it student</p>
        <p className={style.text}> harunfarah@gmail.com</p>
            </div> 
         </div>   

           </>

    );
}
export default AboutPage;