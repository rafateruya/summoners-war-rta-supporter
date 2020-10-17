import { getGlobal, setGlobal } from "reactn";
import { Monster } from "../../models/monster";
import { UserType } from "../../models/userType";

export const draftMonster = (monster: Monster, index: number, userType: UserType) => {
    const global = getGlobal()
    const teamToModify: string[] = userType === UserType.me ? global.myTeam : global.enemyTeam
    teamToModify[index] = monster.name
    if (userType === UserType.me) {
        setGlobal({
            myTeam: [...teamToModify]
        })
    } else {
        setGlobal({
            enemyTeam: [...teamToModify]
        })
    }
}