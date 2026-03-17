import type { ResearchWork } from './types';

const BASE = import.meta.env.BASE_URL;

export const researchWorks: ResearchWork[] = [
  {
    title:
      '«Соціально-економічне становище козаків у складі Австрійської імперії впродовж 1785-1790 років»',
    author:
      'Автор: Підгребя Михайло Ярославович, учень 5(9) класу Заліщицької державної гімназії Тернопільської області.',
    work: `${BASE}works/Socio-Economic_Condition_of_Cossacks_in_Austrian_Empire_2013.pdf`,
  },
  {
    title: '«Правові принципи профілактики правопорушень серед неповнолітніх».',
    author:
      'Автор: Підгребя Михайло Ярославович, учень 6(10) класу Заліщицької державної гімназії Тернопільської області.',
    work: `${BASE}works/Legal_Principles_of_Underage_Offense_Prevention_2014.pdf`,
  },
];
