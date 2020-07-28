export interface Card {
  id: number;
  content: string;
  labels: string[];
}

export interface Data {
  title: string;
  done: boolean;
  creatable: boolean;
  cards: Card[];
}

export function loadLists(): Data[] {
  return [
    {
      title: 'Tarefas',
      creatable: true,
      done: false,
      cards: [
        {
          id: 1,
          content: 'Estudar módulo 10 de NodeJS',
          labels: ['#7159c1'],
        },
        {
          id: 2,
          content: 'Recriar a interface do Pipefy',
          labels: ['#7159c1'],
        },
        {
          id: 3,
          content: 'Estudar módulo 12 de React Native',
          labels: ['#7159c1'],
        },
        {
          id: 4,
          content: 'Estudar NextJS',
          labels: ['#54e1f7'],
        },
        {
          id: 5,
          content: 'Estudar testes e deploy ReactJS',
          labels: ['#54e1f7'],
        },
      ],
    },
    {
      title: 'Fazendo',
      creatable: false,
      done: false,
      cards: [
        {
          id: 6,
          content: 'Terminar CRUD coffee express',
          labels: ['#7159c1'],
        },
      ],
    },
    {
      title: 'Pausado',
      creatable: false,
      done: false,
      cards: [
        {
          id: 7,
          content: 'Praticar geolocalização e mapas com React Native',
          labels: ['#7159c1'],
        },
        {
          id: 8,
          content: 'Praticar testes e deploy ReactJS',
          labels: ['#54e1f7'],
        },
        {
          id: 9,
          content: 'Ajustes repositórios github',
          labels: ['#54e1f7'],
        },
      ],
    },
    {
      title: 'Concluído',
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Estudar inglês',
          labels: ['#54e1f7'],
        },
        {
          id: 12,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content:
            'Praticar internacionalização de aplicações Node.js, ReactJS e React Native',
          labels: ['#7159c1'],
        },
      ],
    },
  ];
}
