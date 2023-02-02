import React from 'react';
import style from "./style.module.scss"


function home(props) {
    return (
        <div className={style.wrapper}>
            <h1 className={style.homeTitle}>ADVENTURE AWAITS</h1>
            <p className={style.description}>Join millions of kids worldwide as you build your knowledge on historic arts, books and learning how to create different creative types of arts.</p>
            
        </div>
    );
}

export default home;