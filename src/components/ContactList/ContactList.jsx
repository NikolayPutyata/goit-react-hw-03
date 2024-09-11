import ContactItem from "/src/components/ContactItem/ContactItem.jsx";
import s from "./ContactList.module.css";

const ContactList = ({ list, onDelete }) => {
  return (
    <>
      <ul className={s.conList}>
        {list.map((item) => (
          <ContactItem
            key={item.id}
            name={item.name}
            phone={item.number}
            onDelete={onDelete}
            id={item.id}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
