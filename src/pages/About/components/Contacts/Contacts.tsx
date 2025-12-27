import type React from 'react';
import './Contacts.scss';
import { contacts } from './data';

export const Contacts: React.FC = () => {
  return (
    <section className="contacts">
      <h3 className="contacts__title">Контакти:</h3>

      <ul className="contacts__list">
        {contacts.map((contact, index) => (
          <li key={index} className="contacts__item">
            <contact.icon />

            <a href={`${contact.type === 'phone' ? 'tel:' : 'mailto:'}${contact.content}`}>
              {contact.content}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
