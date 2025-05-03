import Stats from '../Stats/Stats';
import UserInfo from '../UserInfo/UserInfo';
import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <UserInfo name={name} tag={tag} location={location} image={image} />
      <Stats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </div>
  );
};

export default Profile;
