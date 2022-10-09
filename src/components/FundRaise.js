import React from 'react';
import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';
import { fundRaise } from '../data/titleData';
import Tags from './Tags';
import Speakers from './Speakers';
import Partners from './Partners';

const FundRaise = () => {



   let content = (
      <Container>
      <h1>Fundraisers</h1>
      <p>A little change makes all the difference.</p>
      <div className="container">
         {fundRaise.map((fund, index) => (
            <div key={index} className="outer-container">
               <div className="inner-container">
                  <img src={fund.image} alt={fund.title}/>
               </div>
               <div className='content'>
                  <h2>{fund.title}</h2>
                  <p>{fund.text}</p>   
                  <p className='amount'>{fund.amount}</p>
                  <div className='rating-container'>
                     <div className='rating' style={{width: fund.rating}}></div>
                  </div>
                  <div className="link">
                     <p>Read more</p>
                     <IoIosArrowForward className='arrow'/>
                  </div>
               </div>
            </div>
            )
            )} 
      </div>  
    </Container>
   )

  return (
   <>
      <Tags />
      {content}
      <Speakers />
      <Partners />
   </>   
   ); 
}

export default FundRaise;

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   gap: 3rem;
   padding: 1rem 0 3rem 0;
   background-color: #333;

   h1{
      font-size: 56px;
      font-weight: 200;
      color: orangered;
      text-align: center;
      white-space: wrap;
   }

   p{
      color: white;
      font-size: 18px;
   }

   .container{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
      gap: 2rem;

      .outer-container{
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         align-items: flex-start;
         background-color: white;
         width: 460px;
         height: 700px;
         color: gray;
         box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.4);


         .inner-container{
            width: 100%;
            height: 350px;
            margin-bottom: 0;

            img{
               width: 100%;
               height: 100%;
               object-fit: cover;
               object-position: center;
            }
         }

         .content{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify: space-between;
            gap: 1rem;
            align-items: flex-start;
            padding: 0.5rem;
            background-color: white;

            h2{
               font-size: 20px;
               color: #ed820e;
               text-transform: capitalize;
               padding-left: 15px;
            }

            p{
               color: gray;
               line-height: 1.4rem;
            }

            .amount{
               color: gray;
               font-size: 18px;
               font-weight: 550;
            }

            .rating-container{
               width: 100%;
               height: 2px;
               background-color: lightgray;

               .rating{
                  background-color: #ed820e;
                  height: 100%;
               }
            }

         .link{
            font-size: 16px;
            display: flex;
            justify-content: flex-start;
            width: 100%;
            padding: 0 0 10px 0;
            align-items: center;
            cursor: pointer;
            padding-left: 10px;
            padding-bottom: 20px;

            p{
               color: #ed820e;
            }

            .arrow{
               color: #ed820e;
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