import React from 'react'
import styled from 'styled-components'
import { MonsterSelector } from '../MonsterSelector/MonsterSelector'

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
                                <MonsterSelector />
                            </MonsterCardWrapper>
                        </MonsterCardColumnWrapper>
                    )
                }

                return (
                    <MonsterCardColumnWrapper>
                        <MonsterCardWrapper>
                            <MonsterSelector />
                        </MonsterCardWrapper>
                        <MonsterCardWrapper>
                            <MonsterSelector />
                        </MonsterCardWrapper>
                    </MonsterCardColumnWrapper>
                )
            })
        }
    </DraftTeamWrapper>
}