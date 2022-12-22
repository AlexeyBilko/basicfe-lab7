import React from 'react'
import '../App.css'

export default function Header() {
    function backColor() {
        let maxVal = 0xFFFFFF; // 16777215
        let randomNumber = Math.floor(Math.random() * maxVal).toString(16); 
        let randomBackGroundColor = randomNumber.padStart(6, 0); 
        randomNumber = Math.floor(Math.random() * maxVal).toString(16); 
        let randomColor = randomNumber.padStart(6, 0); 
        return "#" + randomBackGroundColor;
    }

    function Color() {
        let maxVal = 0xFFFFFF; // 16777215
        let randomNumber = Math.floor(Math.random() * maxVal).toString(16); 
        let randomBackGroundColor = randomNumber.padStart(6, 0); 
        randomNumber = Math.floor(Math.random() * maxVal).toString(16); 
        let randomColor = randomNumber.padStart(6, 0); 
        return "#" + randomBackGroundColor;
    }

return (<>
        <h2 id="firstElement" style={{background: backColor(), color: Color()}}>Білько Олексій Євгенович</h2>
        <p id="secondElement" style={{background: backColor(), color: Color()}}>6 липня 2003 року, місто Київ, Україна</p>
    </>)
}
