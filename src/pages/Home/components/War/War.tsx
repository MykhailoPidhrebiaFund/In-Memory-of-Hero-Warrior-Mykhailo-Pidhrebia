import type React from 'react';
import './War.scss';
import { Button } from '../../../../components/Button';
import { useNavigate } from 'react-router';

export const War: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="war" className="war">
      <div className="war__section">
        <h3 className="war__title">Війна</h3>
      </div>

      <div className="war__section">
        <img src="./images/war1.webp" alt="War photo #1" />

        <div className="war__text-content">
          <p>
            Жовтень 2024 року - Суми. ССО розгорнулися для виконання спеціальних завдань. Розпочався
            ще активніший захист країни. І бої, бої, бої… Незважаючи на труднощі, Михайло
            продовжував бути веселим, життєрадісним і комунікабельним, вселяв віру в перемогу добра
            і справедливості.
          </p>

          <p>
            У березні 2025 року Михайлові вручили посвідчення учасника бойових дій і нагрудний знак
            «Ветеран війни». Для воїна цей знак став символом мужності та відваги, отриманим за
            участь у захисті України та в активних бойових діях на її території.
          </p>
        </div>
      </div>

      <div className="war__section">
        <div className="war__img-group">
          <img src="./images/war2.webp" alt="War photo №2" />
          <img src="./images/war3.webp" alt="War photo №3" />
          <img src="./images/war4.webp" alt="War photo №4" />
        </div>

        <p>
          Яскравою сторінкою в книзі життя Михайла була неймовірна дівчина – Наталя, якій у березні
          цього року освідчився в коханні, попросивши стати його дружиною. Разом із нею мріяли про
          щасливе сімейне життя, планували майбутнє, яке обов’язково мало бути світлим… Не судилося…
          Клята війна забрала мрії…
        </p>
      </div>

      <div className="war__section">
        <p>
          Постійно турбувався про своїх батьків, сестричку, бабусів і дідусів. <br /> На свята, а то
          і в будень передавав мамі квіти з листівками:{' '}
        </p>

        <div className="war__quotes">
          <h2>«Твій майбутній капітан. Залишилося недовго до нього»</h2>
          <h2>«Мам, я завжди поруч, твій офіцер»</h2>
          <h2>«Мам, зі святом! Твій лейтенант»</h2>
          <h2>«Мам, не сумуй, я скоро повернуся!».</h2>
        </div>
      </div>

      <div className="war__section">
        <div className="war__text-content">
          <p>Обіцяв скоро повернутися… І повернувся… Тільки не так, як про це всі мріяли.</p>
          <p>
            Михайло ніколи не стане батьком, досвідченим юристом, не подорожуватиме… <br /> На
            захисті України 2 липня 2025 року зрадники забрали життя Воїна Світла і Любові…
          </p>
        </div>

        <div className="war__img-group">
          <img src="./images/family1.webp" alt="Family photo №1" />
          <img src="./images/family2.webp" alt="Family photo №2" />
          <img src="./images/family3.webp" alt="Family photo №3" />
        </div>

        <div className="war__btn">
          <Button onClick={() => navigate('/about')}>Про фонд</Button>
        </div>
      </div>
    </section>
  );
};
