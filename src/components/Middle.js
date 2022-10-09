import React from 'react';
import styled from 'styled-components';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { objectives } from '../data/titleData';

const Middle = () => {
  return (
    <Container>
      <h1>Objectives</h1>
      <div className="container">
         {objectives.map((obj, index) => (
               <div key={index} className="outer-container">
                  <div className="inner-container">
                     <img src={obj.images}alt={obj.title}/>
                  </div>
                  <div className='content'>
                     <h2>{obj.title}</h2>
                     <p>{obj.text}</p>
                     <div className="link">
                        <p>Read more</p>
                        <IoMdArrowRoundForward />
                     </div>
                  </div>
               </div>
            ))
         }
      </div>   
    </Container>
  );
}
//fix the background color for hovering
export default Middle;

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 3rem;
   padding: 2rem 0;
   background-color: lightgray;

   h1{
      font-size: 56px;
      font-weight: 200;
   }

   .container{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 5px;
      gap: 5rem;

      .outer-container{
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         align-items: center;
         width: 260px;
         height: 400px;
         box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);

         @media (max-width: 1024px){
            width: 480px;
            height: 550px;
         }

         .inner-container{
            width: 100%;
            height: 320px;
            box-shadow: 4px 4px 8px rgba(0,0,0,0.2);

            img{
               width: 100%;
               height: 100%;
               object-fit: cover;
               object-position: center;
            }

            &:hover{
               opacity: 0.6;
            }
         }

         .content{
            display: flex;
            flex-direction: column;
            justify: space-between;
            gap: 1.5rem;
            align-items: center;
            padding: 2rem;

            h2{
               font-size: 16px;
               color: #ed820e;
               display: block;
               text-align: center;

               @media (max-width: 1124px){
                  font-size: 20px;
               }
            }

            p{
               color: gray;
               font-weight: 200;
               font-family: sans;
               display: block;
               text-align: center;
               line-height: 1.2rem;
            }

            .link{
               font-size: 26px;
               display: flex;
               justify-content: flex-end;
               width: 100%;
               padding: 0 20px 10px 0;
               margin-top: 0;
               align-items: center;
               font-family: 'sans';
               cursor: pointer;
              
               p{
                  color: black;
               }
   
               &:hover{
                  color: blue;
                  p{
                     color: blue;
                  }
               }
            }

            @media (min-width: 1100px){
               padding: 1.5rem;
            }
         }

         &:hover{
            h2{
               color: black;
            }

            .content{
               background-color: #ed820e;
               
            }
         }
      }

      @media (max-width: 1024px){
         flex-direction: column;
      }
   }
`