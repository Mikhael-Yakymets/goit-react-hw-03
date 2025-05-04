import { FaUserTie } from 'react-icons/fa6';
import { MdPhone } from 'react-icons/md';
import css from './Contact.module.css';

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={css.card}>
      <div className={css.info}>
        <p className={css.line}>
          <FaUserTie className={css.icon} />
          {name}
        </p>
        <p className={css.line}>
          <MdPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
