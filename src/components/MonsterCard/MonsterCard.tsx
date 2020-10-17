import React from 'react'
import styled from 'styled-components'

interface MonsterCardProps {

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
    border-style: solid;
`

export const MonsterCard: React.FC<MonsterCardProps> = () => {
    return <MonsterCardWrapper>
        <ImageWrapper>
            <img src={'https://swarfarm.com/static/herders/images/monsters/unit_icon_0017_3_2.png'} style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </ImageWrapper>
    </MonsterCardWrapper>
}