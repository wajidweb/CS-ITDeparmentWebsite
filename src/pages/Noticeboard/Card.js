import React from 'react';
import { Link } from 'react-router-dom';
// import {useParams} from "react-router-dom";

export default function Card(props) {
    return (


        <Link to='/notificatiopage' className='linkcard' key={props.key} >
            <div className="card" style={{ width: "18rem", height: "19rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>

                    <p className="card-text">
                        {props.description}

                    </p>


                </div>
            </div>
        </Link>


    )

}
