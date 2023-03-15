import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './gallery.css'



const EventData = [
  {
    EventName: "TECHWAK",
    EventDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus modi beatae nemo, veniam repellat magnam officia sint incidunt. Provident quisquam sequi nihil porro officiis ratione eius quas fuga maiores illo."
  },
  {
    EventName: "TECHWAK",
    EventDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus modi beatae nemo, veniam repellat magnam officia sint incidunt. Provident quisquam sequi nihil porro officiis ratione eius quas fuga maiores illo."
  },
  {
    EventName: "TECHWAK",
    EventDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus modi beatae nemo, veniam repellat magnam officia sint incidunt. Provident quisquam sequi nihil porro officiis ratione eius quas fuga maiores illo."
  }
  ,
  {
    EventName: "TECHWAK",
    EventDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus modi beatae nemo, veniam repellat magnam officia sint incidunt. Provident quisquam sequi nihil porro officiis ratione eius quas fuga maiores illo."
  },
  {
    EventName: "TECHWAK",
    EventDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus modi beatae nemo, veniam repellat magnam officia sint incidunt. Provident quisquam sequi nihil porro officiis ratione eius quas fuga maiores illo."
  }
]

export default function Gallery(props) {

  const GalleryComponent = (props)=>{
    const ImagesComp = (props)=>{
      return (
        <div className='imageDivUpper col-lg-4 col-sm-12'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpNGEjCX8RBP_RAE0140BijAA-pJU0vGEN5w&usqp=CAU" alt="" />
        </div>
      )
    }
    return(
      <div className='container-fluid row galleryComp pt-3 pb-3 mb-3 mt-5'>
        <div className="col-lg-3 col-sm-12">
          <p className='eventName'>{props.EventName}</p>
          <p className='eventDescription'>{props.EventDescription}</p>
        </div>
        <div className='col-lg-9 sol-sm-12 flexRow pt-2 pb-2'>
           <div className='row'>
           <ImagesComp />
            <ImagesComp />
            <ImagesComp />
            <ImagesComp />
            <ImagesComp />
            <ImagesComp />
            <ImagesComp />
            <ImagesComp />
           </div>
        </div>
      </div>
    )
  }
  return (
    <div>
        <Navbar />
        <section className='container-fluid gallerySection'>
          <div className="container">
            {
              EventData.map((value)=>{
                return <GalleryComponent EventName={value.EventName} EventDescription={value.EventDescription} />
              })
            }
          </div>
        </section>
        <Footer />
    </div>
  )
}
