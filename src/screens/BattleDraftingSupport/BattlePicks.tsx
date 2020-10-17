import React from 'react'
import styled from 'styled-components'
import { assets } from '../../assets'
import { DraftTeam } from '../../components/DraftTeam/DraftTeam'
import { UserType } from '../../models/userType'

interface BattlePicksProps {
    isUserFirstPicker: boolean
}

const BattlePicksWrapper = styled.div`
    position: relative;
    background-color: red;
`

const MonsterCardWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`


export const BattlePicks: React.FC<BattlePicksProps> = ({
    isUserFirstPicker
}) => {
    return <BattlePicksWrapper>
        <img style={{ width: '100%', height: '100%' }} src={assets.battleBackground} />
        <MonsterCardWrapper>
            <DraftTeam isFirstPick={isUserFirstPicker} userType={UserType.me} />
            <DraftTeam isFirstPick={!isUserFirstPicker} userType={UserType.enemy} />
        </MonsterCardWrapper>
    </BattlePicksWrapper>
}