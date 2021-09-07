import React from 'react'
import styled from 'styled-components'
import HeadConBtn from './HeadConBtn';
import doc from '../img/doc.png';
import circle from '../img/Circles.png'

function HeaderContent() {
    return (
        <HeaderConStyled>
            <div className="left-content">
                <p>
                Professional   </p>

                    <p><span> PHARMACISTS </span></p>
                   <p className="p-reach"> within your reach </p>

                   <HeadConBtn name={'Book Appointment'}/>
            </div>

            <div className="right-content">
                <img src={doc} alt="doc" className="doc"/>
                <img src={circle} alt="circle" className="circles" />

            </div>
           
            
        </HeaderConStyled>
    )
}

const HeaderConStyled = styled.div`

display: flex;
/* justify-content: space-between; */

.left-content{
  
    margin-top: 13rem;

    span{
    color: var(--green-color);
    font-weight: bold;
    font-size:3.0rem;
    
}

    p{
        font-size:1.5rem;
        font-weight: bold;
    }
}


.right-content{
    justify-content:center;
    margin-right: -100px;


    .doc{
        width: 100%;
        position: relative;
        
    }

    .circles{
        position: absolute;
        width: 572px;
        height: 572px;
        right: 0;
        top: 0;
        margin-right: 12.7rem;
        margin-top: 5rem;
        /* padding-top: -150px; */
    }
    
}



`;

export default HeaderContent
