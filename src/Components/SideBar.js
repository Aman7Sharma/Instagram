import React from 'react'
import '../Styles/SideBar.css'
import logo from '../Images/logo.png'
import home from '../Images/home.jpg'
import search from '../Images/search.jpg'
import explore from '../Images/explore.png'
import reel from '../Images/reel.jpg'
import messages from '../Images/messages.png'
import noti from '../Images/like.png'
import create from '../Images/create.png'

export default function SideBar() {
  return (
    <div className='container'>
      <br />
      <h1>
        <img className='logo' src={logo} alt="" />
      </h1>
      <div className='contain' >
        <h3><img className='logo1' src={home} alt="" /> Home</h3>  <br /><br />
        <h3><img className='logo1' src={search} alt="" /> Search</h3>  <br /><br />
        <h3><img className='logo1' src={explore} alt="" /> Explore</h3>  <br /><br />
        <h3><img className='logo1' src={reel} alt="" /> Reels</h3>  <br /><br />
        <h3><img className='logo1' src={messages} alt="" /> Messages</h3>  <br /><br />
        <h3><img className='logo1' src={noti} alt="" /> Notifications</h3>  <br /><br />
        <h3><img className='logo1' src={create} alt="" /> Create</h3>  <br /><br />
      </div>

    </div>
  )
}
