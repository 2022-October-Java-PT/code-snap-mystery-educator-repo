import React from "react";
import style from './style.module.scss'



const ContactPage = () => {
    return(
        <>
        <section >

        <div >
            <h1 className={style.contact}>Contact Us</h1>
        </div>
        <div >
            <div className={style.icon}>
                  <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className={style.text}>
                                <h3>Address</h3>
                                <p>2645 N High St, Columbus,OH,43202</p>

                            </div>
                        </div>

                        <div >
                            <div className="icon">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className={style.text}>
                                <h3>Phone Number</h3>
                                <p>844 932 2626</p>

                            </div>
                        </div>

                        <div className={style.text}>
                            <div className="icon">
                                <i className="fa-regular fa-envelope"></i>
                            </div>
                            <div className={style.text}>
                                <h3>Mail</h3>
                                <p>wecancodeit@gmail.com</p>

                            </div>
                            </div>
                            <div >
                                
                                <div >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.653681536856!2d-83.01442788499085!3d40.0161826794137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388ea08729618b%3A0x70ced8781fa94d9d!2sWe%20Can%20Code%20IT!5e0!3m2!1sen!2sus!4v1674881656909!5m2!1sen!2sus" 
                width="100%" height="450" 
                style={{border:0}} allowfullscreen="" loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                 </div>
             </section>
        
        </>

    );
}
export default ContactPage;