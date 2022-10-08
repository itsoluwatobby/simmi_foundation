import styled from 'styled-components';

const Top = () => {
   
  return (
    <Container>
      <div className="outer-container">
         <div className="container">
            <div className="title">
               <p>Welcome to SIMMI</p>
            </div>
            <div className="inner-container">
               <p>
               Smart India Multi Management Institute is a pan India NGO registered in Haryana, India; carrying out welfare projects on education, healthcare, livelihood and women empowerment. We believe that unless members of the civil society are involved proactively in the process of development, sustainable change will not happen. Based on this, Simmi Foundation sensitizes and engages the civil society, making it an active partner in all its welfare initiatives.
               </p>
            </div>
         </div>   
         <div className="image">
            <img src="https://simmifoundation.org/home/images/home/map-dark.png" alt="map" style={{height: '450px', width: '350px'}} />
         </div>
      </div>
    </Container>
  );
}

export default Top;

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   background-color: gray;
   font-family: sans;
   margin-bottom: 0;

   .outer-container{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10rem;
      padding: 10px 0 0 0;
      margin-bottom: 0;

      .container{
         flex: 1;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         grow: 1;
         align-items: center;

         .title{

            p{
               font-size: 48px;
               font-weight: 300;
               color: white;
            }

            @media (min-width: 1100px){
               line-height: 25px;
            }
         }

         @media (min-width: 1100px){
            gap: 4rem;
         }

         .inner-container{
            margin: 20px 0 0 0;
            width: 260px;
            font-size: 18px;
            text-align: center;
            padding: 5px 0;

            @media (min-width: 1100px){
               width: 400px;
            }
         }
      }

      .image{
         margin-bottom: 0;
         margin-right: 0;
         img{

         }
      }
   }

   @media (max-width: 1100px){
      .outer-container{
         display: flex;
         flex-direction: column;
         gap: 5rem;
      }

      @media (min-width: 1100px){
         padding: 0;
      }
   }
`