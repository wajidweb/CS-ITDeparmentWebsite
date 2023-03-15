import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './contact.css';
import contact from '../../assets/images/contact.svg';

export default function Contact() {
  const [message, setmessage] = useState("")

  const messageHandler = (event) => {
    setmessage(event.currentTarget.value);

  }
  return (
    <div>
      <Navbar />
      <section className='container-fluid contactSection'>
        <div className='container'>
          <div className='imageDivContact'>
            <img src={contact} className="img-fluid" alt="" />
          </div>

          <form>

            <div className="form-group mb-5">
              <label htmlFor="exampleFormControlSelect1">Email To :</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Department Of Computer Science And Information Technology</option>
                <option>Computer Cell Society</option>

              </select>
            </div>

            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Enter Message :</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={""}
                onChange={messageHandler}
              />
            </div>

            <div className='mt-5 mb-5 '>
             
                <button type="submit" className='btn btn-warning pe-3 ps-3 '>
                <a  href="mailto:mrwajidalikhan@gmail.com?subject='Send From Department Website'&body='Just popped in to say hello'" className='sendLink' >
                Send
                
              </a>
                </button>
            </div>
          </form>


        </div>
      </section>
      <Footer />
    </div>
  )
}
