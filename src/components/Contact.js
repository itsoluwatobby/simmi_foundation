import styled from 'styled-components';
import { RiFacebookFill, RiTwitterFill, RiInstagramLine } from 'react-icons/ri'
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { HiPhone } from 'react-icons/hi';
import { ImHeart } from 'react-icons/im';

const Contact = () => {

  let date = new Date()
  return (
    <Container>
        <div className="container">
          {/* ABOUT US */}
          <div className="about">
            <p className='title'>About Us</p>
            <p>
               We envisions to develop a society based on legitimate rights, equity, justice, honesty, social sensitivity and a culture of service in which all are self-reliant.
            </p>
            <div className="icons">
              <div className="border"><RiTwitterFill /></div>
              <div className="border"><RiFacebookFill /></div>
              <div className="border"><RiInstagramLine /></div>
            </div>
          </div>
          {/* INITIATIVES */}
          <div className="initiatives">
            <p className='title'>INITIATIVES</p>

            <p>Khel Sangathan</p>
            <p>Sukoon Parikram</p>
            <p>Simmi Olympiads</p>
            <p>KalaaKaar Manch</p>
          </div>

          <div className="initiatives">
            <p>Sanskritik Setu</p>
            <p>Sambhav Madad</p>
          </div>

           {/* QUESTIONS */}
          <div className="questions">
            <p className='title'>Have Questions ?</p>
            <div className="location">
              <MdLocationOn style={{fontSize: '30px'}}/>
              <p>479, Baspadamka, Tehsil Pataudi, Gurugram, Haryana - 122503, India</p>
            </div>
            <div className="phone">
              <HiPhone style={{fontSize: '24px'}}/>
              <a href="tel:+917015295025">(+91) 70152 - 95025</a>
            </div>
            <div className="email">
              <MdEmail style={{fontSize: '24px'}}/>
              <p>support@simmifoundation.org</p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="footer">

            <div className="images">
              <div className='image'>
                <img src='https://simmifoundation.org/home/images/logo.png' alt='logo' />
              </div>
              <div className='image'>
                <img src='https://simmifoundation.org/home/images/NITI-Aayog-logo.png' alt='logo' />
              </div> 
            </div>

            <p>Our Registration number : 085953/2020</p>
            <p>Niti Aayog (Govt. Of India ) Unique Id : HR/2020/0258148</p>

            <p className='copyright'>Copyright &copy;{date.getFullYear()} All rights reserved | Simmi Foundation <ImHeart /></p>
        </div>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  background-color: #333;
  color: white
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2.4rem;
  padding: 3.5rem 6rem 1.5rem 1rem;

  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 1rem 0 1rem;

    .about{
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      align-items: left;
      color: white;
      width: 300px;
      gap: 2rem;

      .title{
        color: white;
        font-size: 24px;
        text-transform: uppercase;
        position: relative;
        text-align: left;
        padding-bottom: 1rem;

        &::after{
          content: "";
          position: absolute;
          width: 80px;
          height: 1px;
          background-color: lightgray;
          top: 100%;
          bottom: -2rem;
          left: 0;
        }
      }

      p{
        color: gray;
        line-height: 1.4rem;
        font-size: 17px;
      }

      @media (max-width: 800px){
        width: 100%;
      }

      .icons{
        display: flex;
        justify-content: flex-start;
        gap: 1rem;
        align-items: center;
        font-size: 30px;

        .border{
          background-color: rgba(0,0,0,0.2);
          width: 50px;
          height: 50px;
          cursor: pointer;
          border-radius: 50%;
          display: grid;
          place-content: center;
          box-shadow: -2pxx 4px 15px rgba(0,0,0,0.3);
          color: gray;

          &:hover{
            color: #ed820e;
          }
        }
      }
    }

    .initiatives{
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      align-items: left;
      color: white;
      width: 200px;
      gap: 1rem;

      .title{
        color: white;
        font-size: 24px;
        text-transform: uppercase;
        position: relative;
        text-align: left;
        padding-bottom: 1rem;

        &::after{
          content: "";
          position: absolute;
          width: 110px;
          height: 1px;
          background-color: lightgray;
          top: 100%;
          bottom: -20px;
          left: 0;
        }

        &:hover{
          color: white;
        }
      }

      p{
        color: lightgray;
        line-height: 1.4rem;
        font-size: 17px;
        cursor: pointer;

        &:hover{
          color: #ed820e;
        }
      }

      @media (max-width: 800px){
        width: 100%;
      }
    }

    .questions{
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      align-items: left;
      color: white;
      width: 250px;
      gap: 1.5rem;

      .title{
        color: white;
        font-size: 24px;
        text-transform: uppercase;
        position: relative;
        text-align: left;
        padding-bottom: 1rem;

        &::after{
          content: "";
          position: absolute;
          width: 200px;
          height: 1px;
          background-color: lightgray;
          top: 100%;
          bottom: -20px;
          left: 0;
        }

        &:hover{
          color: white;
        }
      }

      p{
        color: lightgray;
        line-height: 1.4rem;
        font-size: 16px;
        cursor: pointer;

        &:hover{
          color: #ed820e;
        }
      }

      .location{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1.5rem;
      }

      .phone{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1.5rem;

        a{
          color: lightgray;

          &:hover{
            color: #ed820e;
          }
        }
      }

      .email{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1.5rem;
      }

      @media (max-width: 800px){
        width: 100%;
      }
    }

    @media (max-width: 800px){
      flex-direction: column;
      align-items: flex-start;
      padding-left: 0.5rem;
      gap: 2rem;
    }

    @media (min-width: 800px){
      padding-left: 6rem;
    }
  }

  .footer{
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-center;
    align-items: center;
    color: lightgray;
    font-size: 14px;
    gap: 0.5rem;

    .images{
      display: flex;
      justify-center: center;
      align-items: center;

      .image{
        height: 55px;
        width: 55px;
        border-radius: 50%;

        img{
          height: 100%;
          width: 100%;
        }
      }
    }

    .copyright{
      margin-top: 1.5rem;
      font-size: 13px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.1rem;
    }
  }
`