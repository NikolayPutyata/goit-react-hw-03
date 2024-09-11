import Contact from "/src/components/Contact/Contact.jsx";
import s from "./ContactList.module.css";

const ContactList = ({ list, onDelete }) => {
  return (
    <>
      <ul className={s.conList}>
        {list.map((item) => (
          <Contact
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
