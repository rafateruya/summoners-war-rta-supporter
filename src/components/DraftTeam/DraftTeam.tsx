import React from 'react'
import styled from 'styled-components'
import { MonsterCard } from '../MonsterCard/MonsterCard'

interface DraftTeamProps {
    isFirstPick: boolean
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
    isFirstPick
}) => {
    return <DraftTeamWrapper>
        {
            [0, 1, 2].map((value, index) => {
                const singleColumnIndex = isFirstPick ? 0 : 2
                if (index === singleColumnIndex) {
                    return (
                        <MonsterCardColumnWrapper>
                            <MonsterCardWrapper>
                                <MonsterCard />
                            </MonsterCardWrapper>
                        </MonsterCardColumnWrapper>
                    )
                }

                return (
                    <MonsterCardColumnWrapper>
                        <MonsterCardWrapper>
                            <MonsterCard />
                        </MonsterCardWrapper>
                        <MonsterCardWrapper>
                            <MonsterCard />
                        </MonsterCardWrapper>
                    </MonsterCardColumnWrapper>
                )
            })
        }
    </DraftTeamWrapper>
}