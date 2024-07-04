import { Link } from 'react-router-dom';
import './style.css';

const ProjectCard = (props) => {
  return (
    <Link to={`/project/${props.index}`}>
      <li className="project">
          <img src={props.img} alt={props.title} className="project__img" />
          <h3 className="project__title">{props.title}</h3>
      </li>
    </Link>
);
}

export default ProjectCard;