import MedalIcon from '../../../../assets/icons/medal.svg?react';
import WarningIcon from '../../../../assets/icons/warning.svg?react';
import StarIcon from '../../../../assets/icons/star.svg?react';
import BookIcon from '../../../../assets/icons/book.svg?react';
import FlowerIcon from '../../../../assets/icons/flower.svg?react';
import PersonIcon from '../../../../assets/icons/person.svg?react';
import type { Sphere } from './types';

export const spheres: Sphere[] = [
  {
    icon: MedalIcon,
    text: 'Сприяння розвитку та забезпечення Сил оборони України (Збройних Сил України, а також інших утворених відповідно до законів України військових формувань).',
  },
  {
    icon: WarningIcon,
    text: 'Сприяння обороноздатності та мобілізаційній готовності країни, захисту населення у надзвичайних ситуаціях мирного і воєнного стану.',
  },
  {
    icon: StarIcon,
    text: 'Надання допомоги талановитій творчій молоді.',
  },
  {
    icon: BookIcon,
    text: 'Освіта, наука і наукові дослідження.',
  },
  {
    icon: FlowerIcon,
    text: 'Культура та мистецтво, охорона культурної спадщини.',
  },
  {
    icon: PersonIcon,
    text: 'Права людини і громадянина та основоположні свободи.',
  },
];
