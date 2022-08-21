import React from "react";
import style from "./headingColumn.module.css";



export default function headingColumn() {
  return (
    <div className={style.headingColumn}>
      <div className={style.toptext}>
        <div className={style.bigtext}>
        <p className={style.bigtextPara1}>Web Design &</p> 
        <p className={style.bigtextPara2}>Development</p>
        <p className={style.bigtextPara3}>Course</p>
        </div>
        <div className={style.descriptiontext}>

        <p className={style.desPara1}>Web design refers to the design of websites that are displayed on the internet. </p>
        <p>JavaScript, HTML, CSS, PHP, etc are popular languages.</p>
        <p>JavaScript has a popularity of nearly 65%.</p>
        </div>
        </div>
        <button className={style.joinus}>JOIN US</button>
        
    </div>
  )
}
