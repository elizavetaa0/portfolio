import './style.css';
import gitHubIcon from '../../img/icons/gitHub-black.svg';

const BtnGitHub = ({ link }) => {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer' className='btn-outline'>
      <img src={gitHubIcon} alt='Icon of GitHub' />
      GitHub repo
    </a>
  );
}

export default BtnGitHub;