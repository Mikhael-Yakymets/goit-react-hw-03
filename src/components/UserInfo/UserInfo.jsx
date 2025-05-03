import css from './UserIngo.module.css';

const UserInfo = ({ name, tag, location, image }) => {
  return (
    <div className={css.description}>
      <img className={css.avatar} src={image} alt="User avatar" />
      <p className={css.name}>{name}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
};

export default UserInfo;
