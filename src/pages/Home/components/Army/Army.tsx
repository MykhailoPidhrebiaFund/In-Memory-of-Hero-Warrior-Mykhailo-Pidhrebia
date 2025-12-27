import type React from 'react';
import './Army.scss';

export const Army: React.FC = () => {
  return (
    <section id="army" className="army">
      <div className="army__section">
        <h3 className="army__title">Армія</h3>
      </div>

      <div className="army__section">
        <p className="army__text army__text--first">
          Сили спеціальних операцій – наймолодша та найсучасніша складова Збройних сил України,
          військова еліта держави. Їх кредо – перевага якості над кількістю. Вимоги відбору на курс
          спецпризначенців надзвичайно високі, але Михайло, тримаючи свою ідею змінити частину з
          тилової на бойову в таємниці, пройшов відбір. 13 квітня 2024 року його призначили
          командиром штурмового взводу штурмової роти штурмового батальйону 6 окремого штурмового
          полку «Рейнджер» Сил спеціальних операцій Збройних сил України у військовій частині А5018,
          що у Хмельницькому.
        </p>

        <img className="army__img army__img--first" src="./images/army1.webp" alt="Army photo №1" />

        <p className="army__text army__text--second">
          З вересня 2021 року Михайло перебував у місті Лубни Полтавської області на військовій
          службі у військовій частині А2975 на посаді офіцера відділення чергового з безпеки. Але
          служба в тиловій частині не задовольняла його, старшому лейтенанту Михайлу Підгребі
          хотілося брати активну участь у війні росії проти України. Дух невпокореності, ініціативи,
          бунтарства інколи перемагав здоровий глузд.
        </p>

        <img
          className="army__img army__img--second"
          src="./images/army2.webp"
          alt="Army photo №2"
        />

        <p className="army__text army__text--third">
          Спершу проходив спеціальне навчання сам, а згодом став командиром 4 навчального взводу
          базової загальновійськової підготовки. Виконував також функції інструктора на
          контрольно-тактичних завданнях, які проводяться для перевірки знань та навичок, отриманих
          курсантами. Курсанти з повагою та любов’ю ставилися до свого керівника. Упродовж двох
          місяців проходив навчання «штурмовиків» у Польщі з метою удосконалення військової
          майстерності в боротьбі з ворогом.
        </p>

        <img className="army__img army__img--third" src="./images/army3.webp" alt="Army photo №3" />
      </div>
    </section>
  );
};

/*
can u redo grid to make @on-tablet {
  first img take first row first columb
  second img take first row second col
  third img take first row third col

  first text should take second row and all cols
  second text should take third row and all cols
  thid text should take forth row and all cols
}

and on mobile (mobile first) it should be like this order {
  first text
  first img
  second text
  second img
  third text
  third img
}
*/
