import React from 'react'
import styled from 'styled-components'
import { Monster } from '../../models/monster'

interface MonsterCardProps {
    monster?: Monster
}

const MonsterCardWrapper = styled.div`
    background-color: #FF8A33;
    width: 80px;
    height: 80px;
    border-radius: 5px;
    border-color: black;
    border-width: 1px;
    border-style: solid;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ImageWrapper = styled.div`
background-color: #f0f;
    width: 72px;
    height: 72px;
    border-radius: 5px;
    border-color: black;
    border-width: 1px;
    display: flex;
    border-style: solid;
    align-items: center;
    justify-content: center;
`

export const MonsterCard: React.FC<MonsterCardProps> = ({ monster }) => {
    return <MonsterCardWrapper>
        <ImageWrapper>
            {/* TODO: get monster image by id */}
            {/* <img src={'https://swarfarm.com/static/herders/images/monsters/unit_icon_0017_3_2.png'} style={{ maxWidth: '100%', maxHeight: '100%' }} /> */}
            {monster?.name}
        </ImageWrapper>
    </MonsterCardWrapper>
}