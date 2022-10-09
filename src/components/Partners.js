import styled from 'styled-components';
import {partners} from '../data/titleData';

const Partners = () => {
  return (
    <Container>
      <div className="outer-container">
         <p>Our Partners</p>
         <div className="container">
            <div className="in-box">
               {partners.map((partner, index) => (
                  <div key={index} className="box">
                     <div className='image'>
                        <img src={partner.image} alt='Partners' />
                     </div>
                     <p>{partner.title}</p>
                  </div>
                  ))
               }
            </div>
         </div>
      </div>
    </Container>
  );
}

export default Partners;

const Container = styled.div`
   background-color: #333;
   padding: 0 0 2rem 0;

   .outer-container{
      background-color: white;
      overflow: hidden;
      padding: 0.5rem;
      width: 100%;
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      p{
         font-size: 36px;
         text-align: center;
         text-transform-capitalize;
      }

      .container{
         width: 100%;
         overflow: hidden;

         .in-box{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1.5rem;
            animation: scroll 5s linear infinite;
            animation-delay: 5s;

            .box{
               display: flex;
               flex-direction: column;
               justify-content: space-between;
               align-items: center;
               min-width: 120px;
               height: 150px;
               background-color: transparent;

               .image{
                  width: 100%;
                  height: 100px;

                  img{
                     width: 100%;
                     height: 100%;
                     border-radius: 5px;
                     object-fit: center;
                  }
               }
               p{
                  font-size: 18px;
                  font-family: sans;
                  text-align: center;
                  text-transform: capitalize;
               }
            }

            @keyframes scroll{
               0%{
                  transform: translate(0, 0);
               }
               100%{
                  transform: translate(-100%, 0);
               }
            }
         }
      }
}
`