import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './download.css';
import wajiddoc from '../../assets/document/wajiddoc.docx';

const DownloadButtonDiv = (props)=>{
    return(
        <div className="col-lg-6 col-sm-12 text-center downloadButtonDiv">
        <a href={props.document} download={props.document} target='_blank'>
        <button className='btn btn-primary'>{props.name}</button>
        </a>
       
         </div>
    )
}

export default function Downloads() {
    const DownloadData = [
        {
            name:"Rechecking Form 2023",
            document: wajiddoc
        },
        {
            name:"Admission Form 2023",
            document: wajiddoc
        },
        {
            name:"Rechecking Form 2023",
            document: wajiddoc
        },
        {
            name:"Admission Form 2023",
            document: wajiddoc
        },
        {
            name:"Rechecking Form 2023",
            document: wajiddoc
        },
        {
            name:"Admission Form 2023",
            document: wajiddoc
        },
        {
            name:"Rechecking Form 2023",
            document: wajiddoc
        },
        {
            name:"Admission Form 2023",
            document: wajiddoc
        },
        {
            name:"Rechecking Form 2023",
            document: wajiddoc
        },
        {
            name:"Admission Form 2023",
            document: wajiddoc
        },
       
    ];
  return (
    <>
        <Navbar />
        <section className='container-fluid  downloadsection'>
            <div className='container '>
                    <p className='text-center downloadtitle'>Downloads</p>
                    <div className='row'>
                           {
                            DownloadData.map((value)=>{
                                return <DownloadButtonDiv name={value.name} document={value.document} />
                            })
                           }
                           
                    </div>
                  
            </div>
        </section>

        <Footer />
    </>
  )
}
