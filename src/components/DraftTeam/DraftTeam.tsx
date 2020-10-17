import React from 'react'
import styled from 'styled-components'
import { Monster } from '../../models/monster'
import { UserType } from '../../models/userType'
import { draftMonster } from '../../services/draft/draftMonster'
import { MonsterSelector } from '../MonsterSelector/MonsterSelector'

interface DraftTeamProps {
    isFirstPick: boolean
    userType: UserType
}

const DraftTeamWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const MonsterCardWrapper = styled.div`
    margin: 16px;
`

const MonsterCardColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const DraftTeam: React.FC<DraftTeamProps> = ({
    isFirstPick,
    userType,
}) => {
    const getSelectMonsterFunc = (index: number) => {
        return (monster: Monster) => {
            draftMonster(monster, index, userType)
        }
    }

    return <DraftTeamWrapper>
        {
            [0, 1, 2].map((value, index) => {
                const singleColumnIndex = isFirstPick ? 0 : 2
                const firstIndex = index === 0 ? 0 : isFirstPick ? (2 * index) - 1 : 2 * index
                return (
                    <MonsterCardColumnWrapper>
                        <MonsterCardWrapper>
                            <MonsterSelector selectMonster={getSelectMonsterFunc(firstIndex)} />
                        </MonsterCardWrapper>
                        {
                            index !== singleColumnIndex ? (
                                <MonsterCardWrapper>
                                    <MonsterSelector selectMonster={getSelectMonsterFunc(firstIndex + 1)} />
                                </MonsterCardWrapper>
                            ) : null
                        }
                    </MonsterCardColumnWrapper>
                )

            })
        }
    </DraftTeamWrapper>
}