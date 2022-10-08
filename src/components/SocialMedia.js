import styled from "styled-components";

const SocialMedia = () => {
  return (
    <Container>
      <p>Social Media Handle</p>
      <div className="link">
         <a href="https://www.facebook.com/simmifoundation.org/">SIMMI Foundation</a>
         <a href="https://twitter.com/simmifoundation?ref_src=twsrc%5Etfw">Tweets by simmifoundation</a>
      </div>
    </Container>
  );
}

export default SocialMedia;

const Container = styled.div`
   padding: 2rem 4rem 1rem 4rem;
   display: flex;
   gap: 5rem;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;

   p{
      font-size: 52px;
      text-align: center;
      white-space: wrap;
      color: #ed820e;
      text-transform: capitalize;
      padding-left: 15px;
   }

   .link{
      display: flex;
      justify-content: space-between;
      gap: 15rem;
      padding: 0 5rem 0 5rem;
      align-items: center;

      a{
         font-size: 18px;
         color: blue;
         text-decoration: underline;
      }

      @media (max-width: 900px){
         padding: 0;
         flex-direction: column;
         gap: 1rem;
      }
   }
`