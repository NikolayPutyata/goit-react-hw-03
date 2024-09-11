import ContactList from "/src/components/ContactList/ContactList.jsx";
import SearchBox from "/src/components/SearchBox/SearchBox.jsx";
import ContactForm from "/src/components/ContactForm/ContactForm.jsx";
import contactsList from "./contacts.json";
import "/src/App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const data = window.localStorage.getItem("contacts");
    if (data !== null) {
      return JSON.parse(data);
    }
    return contactsList;
  });

  const [userText, setUserText] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }),
    [contacts];

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (idContact) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== idContact)
    );
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(userText.toLowerCase())
  );

  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={userText} onUserText={setUserText} />
      <ContactList list={visibleContacts} onDelete={deleteContact} />
    </>
  );
};

export default App;
