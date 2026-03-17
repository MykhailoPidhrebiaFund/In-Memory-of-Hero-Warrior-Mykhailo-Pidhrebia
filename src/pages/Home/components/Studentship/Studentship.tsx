import type React from 'react';
import './Studentship.scss';

export const Studentship: React.FC = () => {
  return (
    <section id="studentship" className="studentship">
      <div className="studentship__section">
        <h3 className="studentship__title">Студентське життя</h3>
      </div>

      <div className="studentship__section">
        <p className="studentship__text">
          Упродовж 2015-2020 років здобував вищу освіту в Тернопільському національному економічному
          університеті на юридичному факультеті, а ступінь магістра та спеціальність «Правоохоронна
          діяльність» – вже у Західноукраїнському національному університеті. Був активним
          студентом, брав участь у різноманітних конференціях та акціях. Одночасно поєднував
          навчання та працю. Після завершення університету Михайло працював юристом у Заліщицькій
          міській раді.
        </p>

        <img className="studentship__img" src="./images/studentship.webp" alt="Student photo" />
      </div>
    </section>
  );
};
