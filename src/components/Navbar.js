import styled from 'styled-components'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useState, useEffect } from 'react'

const Navbar = () => {
   const [active, setActive] = useState(1)

   useEffect(() => {
      const slider = setTimeout(() => {
         setActive(prev => prev >= 4 ? prev = 1 : prev + 1)
      }, 2000);

      return () => clearTimeout(slider);
   }, [active])

   const prevBtn = () => {
      setActive(prev => prev <= 1 ? prev = 4 : prev - 1)
   }

   const nextBtn = () => {
      setActive(prev => prev >= 4 ? prev = 1 : prev + 1)
   }

  return (
    <Container>
      <div className="carousel">
         <IoIosArrowBack  className='arrow back'onClick={prevBtn}/>
         <IoIosArrowForward className='arrow forward'onClick={nextBtn}/>
         <ul>
            <li className={`slide ${active === 1 && 'active'}`}>
               <img src="https://simmifoundation.org/home/admin/upload/imga75b483924.jpg" alt="pictures"/>
            </li>
            <li className={`slide ${active === 2 && 'active'}`}>
               <img src="https://simmifoundation.org/home/admin/upload/img2973827efc.jpg" alt="pictures"/>
            </li>
            <li className={`slide ${active === 3 && 'active'}`}>
               <img src="https://simmifoundation.org/home/admin/upload/img71e24d0f53.jpg" alt="pictures"/>
            </li>
            <li className={`slide ${active === 4 && 'active'}`}>
               <img src="https://simmifoundation.org/home/admin/upload/img6e825bdb65.jpeg" alt="pictures"/>
            </li>
         </ul>
      </div>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
   
   .carousel{
      position: relative;
      width: 100vw;
      height: 90vh;

      .slide{
         position: absolute;
         inset: 0;
         opacity: 0;
         transition: 200ms opacity ease-in-out;
         transition-delay: 200ms;

         img{
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
         }
      }

      .slide.active{
         opacity: 1;
         z-index: 1;
         transition-delay: 0ms;
      }

      .arrow{
         position: absolute;
         font-size: 4.5rem;
         color: #ed820e;
         top: 50%;
         z-index: 2;
         transform: translateY(-50%);
         opacity: 0.5;
         cursor: pointer;
         border-radius: 10px;
         background-color: rgba(0,0,0,0.1);

         &:hover, 
         &:focus{
            opacity: 0.9;
            background-color: rgba(0,0,0,0.2);
         }

         &:focus{
            outline: 1px solid black;
         }
      }

      .back{
         left: 1rem;
      }

      .forward{
         right: 1rem;
      }

      ul{
         margin: 0;
         padding: 0;
         list-style: none;
      }
   }
`