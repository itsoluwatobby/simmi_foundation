import React from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';
import styled from 'styled-components';

const Donate = () => {
  return (
    <Container>
      <div className='title'>
            <h1>How can you help us</h1>
      </div>
      <div className="container">
         <div className="outer-container">
            <div className='content'>
               <h2>Collaborate</h2>
               <div className="rule"></div>
               <p>
                  Simmi Foundation serves in the collaboration with schools, colleges and other institutions.
               </p>
            </div>
            <div className="link">
               <p>Collaborate with us</p>
               <IoMdArrowRoundForward />
            </div>
         </div>

         <div className="outer-container">
            <div className='content'>
               <h2>Donate Money</h2>
               <div className="rule"></div>
               <p>
                  Your donation will further our mission of ensuring a happy and healthy life of those in need.
               </p>
            </div>
            <div className="link">
               <p>Donate now</p>
               <IoMdArrowRoundForward />
            </div>
         </div>

         <div className="outer-container">
            <div className='content'>
               <h2>Be a volunteer</h2>
               <div className="rule"></div>
               <p>
                  Even the all-powerful Pointing has no control about the blind texts.
               </p>
            </div>
            <div className="link">
               <p>Read more</p>
               <IoMdArrowRoundForward />
            </div>
         </div>
      </div>
    </Container>
  );
}

export default Donate;

const Container = styled.div`
   background: url('http://femgineer.com/wp-content/uploads/2014/06/help.jpg');
   background-repeat: no-repeat;
   background-position: center;
   background-attachment: fixed;
   background-size: cover;
   display: flex;
   flex-direction: column;
   justify-content: space-between
   align-items: center;
   padding: 10px 0;
   filter: brightness(.8);

   .title{
      color: white;
      text-align: center;
   }

   .container{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 2rem;
      gap: 2rem;
      z-index: 50;
      color: white;

      .outer-container{
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         align-items: center;
         width: 330px;
         height: 250px;
         box-shadow: -2px -2px 16px rgba(0, 0, 0, 0.4);
         background-color: transparent;

         @media (max-width: 1024px){
            width: 450px;
            height: 250px;
         }

         .content{
            display: flex;
            flex-direction: column;
            justify: space-between;
            gap: 1.8rem;
            align-items: center;
            padding: 2rem;

            h2{
               font-size: 22px;
               color: #ed820e;
               display: block;

               @media (max-width: 1124px){
                  font-size: 20px;
               }
            }

            .rule{
               width: 100%;
               background-color: gray;
               height: 1px;
               margin-top: 0.5rem;
            }

            p{
               color: gray;
               font-weight: 200;
               font-family: sans;
               display: block;
               text-align: center;
               line-height: 1.8rem;
               color: white
            }
         }

         .link{
            font-size: 26px;
            display: flex;
            justify-content: flex-end;
            width: 100%;
            padding: 0 20px 10px 0;
            margin-top: 0;
            align-items: center;
            font-family: 'Times new roman';
            cursor: pointer;

            &:hover{
               color: #ed820e;
            }
         }
      }

      @media (max-width: 1024px){
         flex-direction: column;
      }
   }

   @media (min-width: 1124px){
      gap: 3rem;
   }
`