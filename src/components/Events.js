import React from 'react';
import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';
import { FaClock } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';
import { MdOutlineDateRange } from 'react-icons/md';
import { cardData } from '../data/titleData';

const Events = () => {

   let content = (
      <Container>
         <h1>Current and Upcoming events</h1>
         <div className="container">
            {cardData.map((card, index) => (
               <div key={index} className="outer-container">
                  <div className="inner-container">
                     <img src={card.image} alt={card.title}/>
                  </div>
                  <div className='content'>
                     <h2>{card.title}</h2>
                     <div className="location">
                        <GrMapLocation className='iconic'/>
                        <p>{card.location}</p>
                     </div>
                     <div className="time-date">
                        <div className="clock">
                           <FaClock style={{color: '#ed820e'}}/>
                           <p>{card.clock}</p>
                        </div>
                        <div className="clock">
                           <MdOutlineDateRange style={{color: '#ed820e'}}/>
                           <p>{card.date}</p>
                        </div>
                     </div>
                     <p className='text'>
                        {card.text}
                     </p>
                  </div>
                  <div className="link">
                     <p>Read more</p>
                     <IoIosArrowForward className='arrow'/>
                  </div>
               </div>
               )
               )} 
         </div>
    </Container>
   )

  return content; 
}

export default Events;

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   gap: 4rem;
   padding-bottom: 1.5rem;
   background-color: #333;

   h1{
      font-size: 52px;
      font-weight: 200;
      color: orangered;
      text-align: center;
      white-space: wrap;
   }

   .container{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
      padding: 4px;
      gap: 3rem;

      .outer-container{
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         align-items: flex-start;
         background-color: white;
         width: 460px;
         height: 750px;
         color: gray;
         box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.4);


         .inner-container{
            width: 100%;
            height: 480px;

            img{
               width: 100%;
               height: 100%;
               object-fit: cover;
            }
         }

         .content{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify: space-between;
            align-items: flex-start;
            gap: 1rem;
            padding: 0.5rem;
            background-color: white;

            h2{
               font-size: 20px;
               color: #ed820e;
               text-transform: capitalize;
               padding-left: 15px;
               cursor: pointer;
            }

            .location{
               display: flex;
               justify-content: space-between;
               align-items: center;
               gap: 5px;

               .iconic{
                  color: #ed820e;
               }
            }

            .time-date{
               display: flex;
               justify-content: space-between;
               align-items: center;
               gap: 5px;

               .clock{
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  gap: 5px;
               }
            }

            p{
               color: rgba(0,0,0,0.95);
               font-weight: 200;
               font-family: Poppins, sans;
               display: block;
               line-height: 1.2rem;
            }

            .text{
               color: black;
               transition: all 0.3s ease-in;

               &:hover{
                  padding: 10px;
                  box-shadow: 2px 4px 8px rgba(0,0,0,0.3);
                  color: white;
                  background-color: rgba(0,0,0,0.75);
                  border-radius: 10px;
                  line-height: 1.3rem;
               }
            }
         }

         .link{
            font-size: 16px;
            display: flex;
            justify-content: flex-start;
            width: 100%;
            padding: 0 20px 10px 0;
            align-items: center;
            font-family: 'Times new roman';
            color: #ed820e;
            cursor: pointer;
            padding-left: 10px;
            padding-bottom: 30px;

            .arrow{
               font-weight: 700;
            }
         }
      }

      @media (max-width: 1024px){
         flex-direction: column;
         gap: 2rem;
      }
   }
`