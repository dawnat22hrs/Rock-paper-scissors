import type { TFingering } from "@/types/types";

export const defaultGameList: TFingering[] = [
    {
        id: 1,
        name: 'Paper',
        img: 'src/assets/icon-paper.svg',
        borderColor: '#1560BD',
        weaker: [ 2, ],
    },
    {
        id: 2,
        name: 'Rock',
        img: 'src/assets/icon-rock.svg',
        borderColor: '#CC7722',
        weaker: [ 3, ],
    },
    {
        id: 3,
        name: 'Scissors',
        img: 'src/assets/icon-scissors.svg',
        borderColor: '#CB2821',
        weaker: [ 1, ],
    },
]