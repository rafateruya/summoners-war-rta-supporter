import { useEffect, useGlobal, useState } from "reactn"
import { monsters } from "../../data/monsters"

export const useRecommendations = () => {
    const [myTeam] = useGlobal('myTeam')
    const [enemyTeam] = useGlobal('enemyTeam')
    const [recommendations, setRecommendations] = useState([''])

    useEffect(() => {
        const random1 = monsters[Math.floor(Math.random() * monsters.length)].name
        const random2 = monsters[Math.floor(Math.random() * monsters.length)].name
        const random3 = monsters[Math.floor(Math.random() * monsters.length)].name
        const random4 = monsters[Math.floor(Math.random() * monsters.length)].name
        const random5 = monsters[Math.floor(Math.random() * monsters.length)].name

        setRecommendations([random1, random2, random3, random4, random5])
    }, [myTeam, enemyTeam])

    return {
        recommendations
    }
}