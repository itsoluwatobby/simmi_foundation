import styled from 'styled-components';
import {data} from '../data/titleData';

const Tags = () => {
  return (
    <Container>
         <div className='rule'></div>
         <div className="container">
            {data.map((cap, index) => (
               <div key={index} className="box" style={{backgroundColor: cap.color}}>
                  <h2>{cap.num}</h2>
                  <p>{cap.name}</p>
               </div>
               ))
            }
         </div>
         <div className='rule'></div>
    </Container>
  );
}

export default Tags;

const Container = styled.div`
   background-color: #333;

   .container{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;

      .box{
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         align-items: center;
         width: 170px;
         height: 60px;
         border-radius: 10px;
         box-shadow: -2px 4px 16px rgba(0,0,0,0.3);
         cursor: pointer;


         h2{
            color: white;
         }
         p{
            font-size: 22px;
            text-transform: uppercase;
         }

         &:hover{
            transform: scale(1.3);
         }

         &:active{
            filter: brightness(0.7);
         }
      }
   }

   .rule{
      width: 100%;
      background-color: gray;
      height: 1px;
      margin-top: 1rem;
      margin-bottom: 1rem;
   }
`