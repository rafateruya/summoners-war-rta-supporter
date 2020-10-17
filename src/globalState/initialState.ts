export const initialGlobalState = {
    test: 'GlobalState initial state',
    myTeam: [] as string[],
    enemyTeam: [] as string[],
}

export type GlobalStateType = typeof initialGlobalState