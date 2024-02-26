import type { TFingering } from "@/types/types";

export const bonusGameList: TFingering[] = [
    {
        id: 1,
        name: 'Paper',
        img: 'src/assets/icon-paper.svg',
        borderColor: '#1560BD',
        weaker: [ 2, 4,  ],
    },
    {
        id: 2,
        name: 'Rock',
        img: 'src/assets/icon-rock.svg',
        borderColor: '#CC7722',
        weaker: [ 3,  5, ],
    },
    {
        id: 3,
        name: 'Scissors',
        img: 'src/assets/icon-scissors.svg',
        borderColor: '#CB2821',
        weaker: [ 1, 5,  ],
    },
    {
        id: 4,
        name: 'Spock',
        img: 'src/assets/icon-spock.svg',
        borderColor: '#9966CC',
        weaker: [ 3,  2, ],
    },
    {
        id: 5,
        name: 'Lizard',
        img: 'src/assets/icon-lizard.svg',
        borderColor: '#44944A',
        weaker: [ 4,  1, ],
    },
]