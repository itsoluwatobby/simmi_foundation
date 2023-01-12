import { useState } from 'react';
import styled from 'styled-components';
import { header } from '../data/titleData';

const Header = () => {
   const [show, setShow] = useState(false);

  return ( 
   <Container>
      <nav className="navbar">
         <div className='title'>
            <div className="icon">
            <a href='/#'>
               <img src="https://simmifoundation.org/home/images/logo.png" alt="logo" style={{width: '35px', height: '35px'}}/>
            </a>
            </div>
            <div className="name"><a href='/#'>SIMMI FOUNDATION</a></div>
         </div>
         <ul className={`pages ${show ? 'display' : ''}`}>
            {header.map((pages, index) => (
                  <li className="address" key={index} style={{cursor: 'pointer'}}>
                     {pages}</li>
               ))
            }
         </ul>
         <h1 className="bar" onClick={() => setShow(prev => !prev)}>
            &#9776;
         </h1>
      </nav>

      <p className="scroll">
         <span>
            Smart India Multi Management Institute! स्मार्ट इंडिया बहुद्देश्यीय प्रबन्धन संस्थान! Registration number:085953/2020 Niti Aayog (Govt. of India) Unique Id : HR/2020/0258148
         </span>
      </p>
   </Container>
  );
}

export default Header;

const Container = styled.div`
   position: sticky;
   top: 0;
   display: flex;
   align-items: center;
   flex-direction: column;
   width: 100vw;
   background-color: #333;
   justify-content: center;
   z-index: 50;

   .navbar{
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem 1rem 1rem;
      width: 100vw;
      margin-right: 0;
      display: relative;
      overflow: hidden;

      .title{
         display: flex;
         justify-content: space-between;
         align-items: center;
         gap: 0.7rem;

         .icon{
            width: 36px;
            height: 36px;
            border-radius: 50%;
            cursor: pointer
         }

         .name{
            text-transform: uppercase;
            font-size: 22px;
            font-weight: 400;
            color: white;
            cursor: pointer;
         }
      }

      .pages{
         display: flex;
         justify-content: space-between;
         align-items: center;
         font-weight: 500;
         text-transform: capitalize;
         list-style-type: none;
         font-size: 18px;
         color: gray;
         gap: 2.5rem;
         transition: all 0.15s ease-in-out;
         
         li{
            padding-bottom: 12px;

            &:hover{
               color: #ed820e;
               border-bottom: 3px solid #ed820e;;
            }
         }
      }

      @media (min-width: 1124px){
         
         .bar{
            display: none;
         }
      }
   }

   .scroll{
      width: 100vw;
      background-color: white;
      overflow: hidden;
      height: 30px;
      //animation-delay: 5s;

      span{
         font-family: 'sans serif';
         padding: 8px 5px 0 5px;
         white-space: nowrap;
         display: inline-block;
         padding-left: 100%;
         animation: scrollEffect 15s linear infinite;

         @keyframes scrollEffect{
            0%{
               transform: translate(0, 0);
            }
            100%{
               transform: translate(-100%, 0);
            }
         }
      }
   }

   @media (max-width: 1124px){
      .navbar{
         
         .pages{
            display: none;
         }
         
         .pages.display {
            display: block;
            text-align: center;
            font-weight: 500;
            text-transform: capitalize;
            list-style-type: none;
            font-size: 18px;
            color: gray;
            gap: 1rem;
            position: absolute;
            width: 100vw;
            top: 60px;
            left: 0;
            z-index: 20;
            padding: 10px 0;
            background-color: #333;
            transition: all 0.15s ease-in-out;
            
            li{
               padding: 7px 0;
               

               &:hover{
                  color: #ed820e;
                  border-bottom: 2px solid #ed820e;
               }
            }
         }

         .bar{
            font-size: 24px;
            color: gray;
            border: 1px solid gray;
            border-radius: 5px;
            text-align: center;
            width: 48px;
            cursor: pointer;
         }
      }
   }
`
