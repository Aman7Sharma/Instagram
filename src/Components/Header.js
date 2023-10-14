import React from 'react'
import '../Styles/Header.css'
import aman from '../Images/aman.jpg'
import aman1 from '../Images/Aman1.jpg'
import cameron from '../Images/cameron.png'
import gerard from '../Images/gerard.png'
import Jack from '../Images/Jack.png'
import megan from '../Images/megan.png'
import tom from '../Images/tom.png'
import vid from '../Images/video.mp4'
import share from '../Images/share.png'
import like from '../Images/like.png'
import comment from '../Images/comment.png'
import save from '../Images/save.png'

export default function Header() {
  return (
    <div className='containers'>
      <div className='main' >
        <div className='headbar'>
          {/* <marquee behavior="" direction=""> */}
          <div className='status'>
            <img src={aman} alt="" placeholder='aman' className='pp' />
          <span>amank7sharma</span>
          

        </div>
        <div className='status'>
          <img src={cameron} alt="" className='pp' />
          <span >camaron232</span>

        </div>
        <div className='status'>
          <img src={Jack} alt="" className='pp' />
          <span >jack_35</span>

        </div>
        <div className='status'>
          <a href={vid}>
            <img src={megan} alt="" className='pp' />
          </a>
          <span >megan_66</span>

        </div>
        <div className='status'>
          <img src={gerard} alt="" className='pp' />
          <span >gerard23</span>

        </div>
        <div className='status'>
          <img src={tom} alt="" className='pp' />
          <span >tom_22</span>

        </div>
        {/* </marquee> */}


      </div>

      <div className='post'>
        <div className='head' >
          <div className='status1'>
            <img src={aman} alt="" className='pp1' />

          </div>
          <span className='name'>amank7sharma</span>
          <span className='more'>...</span>
        </div>
        <div className='p1'>
          <img src={aman} alt="" className='post1' />


        </div>

        <div className='foot' >
          <img className='logos1' src={like} alt="" />
          <img className='logos1' src={comment} alt="" />
          <img className='logos1' src={share} alt="" />
          <img className='logos2' src={save} alt="" />
        </div>

        <div className='lik'><p>Liked by <b>katherinelangford</b> and <b>other </b></p></div>
        <div className='lik'><p>View all 13 comments</p></div>
        <div><textarea name="" id="comment" cols="75" rows="2" placeholder='Add a comment...'></textarea></div>


      </div>


      <div className='post'>
        <div className='head' >
          <div className='status1'>
            <img src={aman} alt="" className='pp1' />

          </div>
          <span className='name'>amank7sharma</span>
          <span className='more'>...</span>
        </div>
        <div className='p1'>
          <img src={aman1} alt="" className='post1' />


        </div>

        <div className='foot' >
          <img className='logos1' src={like} alt="" />
          <img className='logos1' src={comment} alt="" />
          <img className='logos1' src={share} alt="" />
          <img className='logos2' src={save} alt="" />
        </div>

        <div className='lik'><p>Liked by <b>katherinelangford</b> and <b>other </b></p></div>
        <div className='lik'><p>View all 13 comments</p></div>
        <div><textarea name="" id="comment" cols="75" rows="2" placeholder='Add a comment...'></textarea></div>


      </div>

      <div className='post'>
        <div className='head' >
          <div className='status1'>
            <img src={megan} alt="" className='pp1' />

          </div>
          <span className='name'>megan_66</span>
          <span className='more'>...</span>
        </div>
        <div className='p1'>
          {/* <img src={aman} alt="" className='post1' /> */}
          {/* <video autoPlay  className='post1' src={vid}></video> */}
          <video controls autoPlay className='post1'>
            <source src={vid} type='video/mp4' ></source>
          </video>


        </div>

        <div className='foot' >
          <img className='logos1' src={like} alt="" />
          <img className='logos1' src={comment} alt="" />
          <img className='logos1' src={share} alt="" />
          <img className='logos2' src={save} alt="" />
        </div>

        <div className='lik'><p>Liked by <b>amank7sharma</b> and <b>other </b></p></div>
        <div className='lik'><p>View all 10 comments</p></div>
        <div><textarea name="" id="comment" cols="75" rows="2" placeholder='Add a comment...'></textarea></div>


      </div>

    </div>

    </div >
  )
}
