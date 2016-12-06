
export class GameData {
    TeamCompositions: any = {
        5: { good: 3, evil: 2 },
        6: { good: 4, evil: 2 },
        7: { good: 4, evil: 3 },
        8: { good: 5, evil: 3 },
        9: { good: 6, evil: 3 },
        10: { good: 6, evil: 4 }
    };

    MissionTeamInformation: any = {
        5: {
            1: { players: 2, failures: 1 },
            2: { players: 3, failures: 1 },
            3: { players: 2, failures: 1 },
            4: { players: 3, failures: 1 },
            5: { players: 3, failures: 1 }
        },
        6: {
            1: { players: 2, failures: 1 },
            2: { players: 2, failures: 1 },
            3: { players: 2, failures: 1 },
            4: { players: 2, failures: 1 },
            5: { players: 2, failures: 1 }
        },
        7: {
            1: { players: 2, failures: 1 },
            2: { players: 2, failures: 1 },
            3: { players: 2, failures: 1 },
            4: { players: 2, failures: 2 },
            5: { players: 2, failures: 1 }
        },
        8: {
            1: { players: 2, failures: 1 },
            2: { players: 2, failures: 1 },
            3: { players: 2, failures: 1 },
            4: { players: 2, failures: 2 },
            5: { players: 2, failures: 1 }
        },
        9: {
            1: { players: 2, failures: 1 },
            2: { players: 2, failures: 1 },
            3: { players: 2, failures: 1 },
            4: { players: 2, failures: 2 },
            5: { players: 2, failures: 1 }
        },
        10: {
            1: { players: 2, failures: 1 },
            2: { players: 2, failures: 1 },
            3: { players: 2, failures: 1 },
            4: { players: 2, failures: 2 },
            5: { players: 2, failures: 1 }
        }
    }
}

Object.seal(GameData);