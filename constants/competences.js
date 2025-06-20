import {
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiVuejs,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGraphql,
  SiOracle,
  SiPostgresql,
  SiGit,
  SiSubversion,
  SiPostman,
  SiJira,
  SiDatadog,
  SiFigma,
} from 'react-icons/si';

import { FaJava, FaVuejs } from "react-icons/fa";


export const COMPETENCES = [
  {
    key: 'programming',
    items: [
      { icon: SiCplusplus, name: 'C++' },
      { icon: FaJava, name: 'Java' },
      { icon: SiJavascript, name: 'JavaScript' },
      { icon: SiTypescript, name: 'TypeScript' },
    ],
  },
  {
    key: 'webStack',
    items: [
      { icon: FaVuejs, name: 'Vue.js' },
      { icon: SiReact, name: 'React.js' },
      { icon: SiNextdotjs, name: 'Next.js' },
      { icon: SiHtml5, name: 'HTML5' },
      { icon: SiCss3, name: 'CSS3' },
      { icon: SiTailwindcss, name: 'Tailwind CSS' },
      { icon: SiGraphql, name: 'GraphQL' },
    ],
  },
  {
    key: 'databases',
    items: [
      { icon: SiOracle, name: 'Oracle' },
      { icon: SiPostgresql, name: 'PostgreSQL' },
    ],
  },
  {
    key: 'tools',
    items: [
      { icon: SiGit, name: 'Git' },
      { icon: SiSubversion, name: 'SVN' },
      { icon: SiPostman, name: 'Postman' },
      { icon: SiJira, name: 'JIRA' },
      { icon: SiDatadog, name: 'Datadog' },
      { icon: SiFigma, name: 'Figma' },
    ],
  },
];
