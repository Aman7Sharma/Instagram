import React from 'react'
import '../Styles/RightSBar.css'
import aman from '../Images/aman.jpg'
import cameron from '../Images/cameron.png'
import gerard from '../Images/gerard.png'
import Jack from '../Images/Jack.png'
import megan from '../Images/megan.png'
import tom from '../Images/tom.png'


export default function RightSBar() {
  return (
    <div>
      <div className='rside'>

        <div className='stat1'>
          <img src={aman} alt="" className='pp1' />

        </div>
        <br /><br />
        <table>
          <tr>
            <td id='acc'> <span className='nm'><b>amank7sharma</b></span><br />
              <span className='nm'>Aman Sharma</span></td>
            <td id='follow'><p><b>Switch</b></p></td>

          </tr>
        </table>

        {/* <span className='nm'><b>amank7sharma</b></span><br />
        <span className='nm'>Aman Sharma</span> */}
        <br /><br /><br />
        <div className='suggest'>
          <table>
            <tr>
              <td id='sg'><p>Suggested for you</p></td>
              <td id=''><p><b>See All</b></p></td>
            </tr>
          </table>
          <table>
            <tr>
              <td><img src={cameron} alt="" className='ppp1' /></td>
              <td ><span className='nm'><b>cameron234</b></span></td>
              <td id='follow1'> <br /> <span className='nm'><b>Follow</b></span></td>
            </tr>
            <tr>
              <td><img src={gerard} alt="" className='ppp1' /></td>
              <td ><span className='nm'><b>gerard23</b></span></td>
              <td id='follow1'> <br /> <span className='nm'><b>Follow</b></span></td>
            </tr>
            <tr>
              <td><img src={Jack} alt="" className='ppp1' /></td>
              <td ><span className='nm'><b>jack_35</b></span></td>
              <td id='follow1'> <br /> <span className='nm'><b>Follow</b></span></td>
            </tr>
            <tr>
              <td><img src={megan} alt="" className='ppp1' /></td>
              <td ><span className='nm'><b>megan_66</b></span></td>
              <td id='follow1'> <br /> <span className='nm'><b>Follow</b></span></td>
            </tr>
            <tr>
              <td><img src={tom} alt="" className='ppp1' /></td>
              <td ><span className='nm'><b>tom_22</b></span></td>
              <td id='follow1'> <br /> <span className='nm'><b>Follow</b></span></td>
            </tr>
          </table>

        </div>

      </div>

    </div>
  )
}
