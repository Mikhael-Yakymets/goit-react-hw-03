import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, online }) => {
  return (
    <div className={css.card}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={online ? css.online : css.offline}>
        {online ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
