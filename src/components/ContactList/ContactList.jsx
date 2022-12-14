import propTypes from 'prop-types';
import css from "./ContactList.module.css";

export const ContactList = ({ contacts }) => {
    return (
        <div>
            <ul className={css.contactsList}>
                {contacts.map((contact, id) => (
                    <li key={id} className={css.contactsItem}>{contact.name}: {contact.number}</li>
                ))}
            </ul>
        </div>
    )
}

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
};