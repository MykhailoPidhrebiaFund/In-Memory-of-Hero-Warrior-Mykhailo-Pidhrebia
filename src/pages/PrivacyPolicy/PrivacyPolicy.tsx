import type React from 'react';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router';
import './PrivacyPolicy.scss';

const PrivacyPolicyPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="policy">
      <div className="policy__section">
        <h1 className="policy__title">
          Політика <br /> конфідеційності
        </h1>
      </div>

      <div className="policy__section">
        <div className="policy__content">
          <h4 className="policy__subtitle">
            Політика використання фотографій та персональної інформації
          </h4>

          <p>
            Фотографії та інформація про військовослужбовців, розміщені на цьому вебсайті,
            публікуються за згодою членів родини або законних представників та використовуються
            виключно з метою вшанування пам’яті, інформування громадськості та підтримки благодійної
            діяльності.
          </p>

          <p>
            Уся надана інформація (зокрема фотографії, ім’я, біографічні дані, опис життєвого шляху)
            використовується з повагою до честі, гідності та пам’яті загиблого воїна і не
            застосовується з комерційною метою.
          </p>

          <p>
            Матеріали не передаються третім особам і не використовуються поза межами цього вебсайту
            без додаткової згоди родини, за винятком випадків, передбачених чинним законодавством.
          </p>
        </div>

        <div className="policy__btn-wrapper">
          <Button onClick={() => navigate('/')}>на головну</Button>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
