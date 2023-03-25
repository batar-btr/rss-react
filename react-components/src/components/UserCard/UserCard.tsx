import { User } from '../../pages/forms';
import './index.css';

interface UserCardProps {
  user: User;
}

const UserCard = (props: UserCardProps) => {
  const { name, birthday, country, imgURL, skills, gender } = props.user;
  return (
    <div className="user-card" data-testid="user-card">
      <img src={imgURL} alt={name} />
      <div className="info">
        <h5>{name}</h5>
        <p>{`Birthday ${birthday}`}</p>
        <p>{country}</p>
        <p className="skills">
          Skills:
          {skills.map((skill, idx) => (
            <span key={idx}>{` ${skill} `}</span>
          ))}
        </p>
        <p>Gender: {gender}</p>
      </div>
    </div>
  );
};

export { UserCard };
