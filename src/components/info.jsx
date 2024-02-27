import emailIcon from '../assets/email-icon.png';
import linkedinIcon from '../assets/linkedin-icon.png';
import profilePic from '../assets/profile-pic.jpg';

export default function Info() {
    return (
      <section className='info'>
        <div className='info--profile-pic'>
          <img  src={profilePic} alt='Mahesh' />
        </div>
        <div className='info--basic-info'>
          <h1 className='name'>Mahesh Masetty</h1>
          <h3 className='title'>Web Developer</h3>
          <p className='website'>
            <a href='#'>mahesh</a>
          </p>
        </div>
        <div className='info--action'>
          <a href="mailto:masettyvenkatasaimahesh@gmail.com" className='email-btn'>
            <img src={emailIcon} alt='Email icon' />
            Email
          </a>
          <a href='https://www.linkedin.com/in/venkata-sai-mahesh-masetty-6a27b2195/' target="_blank" rel='noreferrer' className='linkedin-btn'>
            <img src={linkedinIcon} alt='LinkedIn icon' />
            LinkedIn
          </a>
        </div>
      </section>
    );
  }