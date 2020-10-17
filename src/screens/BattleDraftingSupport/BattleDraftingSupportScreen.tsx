import { Button } from '@material-ui/core'
import React from 'react'
import { useState } from 'reactn'
import styled from 'styled-components'
import { UserType } from '../../models/userType'
import { BattlePicks } from './BattlePicks'
import { FirstPickSelector } from './FirstPickSelector'
import { RecommendationsModal } from './RecommendationsModal'

interface BattleDraftingSupportScreenProps { }

const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: blue;
`

const BattlePicksWrapper = styled.div`
    flex: 1;
    flex-direction: column;
    display: flex;
`

export const BattleDraftingSupportScreen: React.FC<BattleDraftingSupportScreenProps> = () => {
    const [firstPickUser, setFirstPickUser] = useState<UserType | undefined>()
    const [shouldShowRecommendationsModal, setShouldShowRecommendationsModal] = useState(false)

    return <ScreenContainer>
        <RecommendationsModal isModalOpen={shouldShowRecommendationsModal} setIsModalOpen={setShouldShowRecommendationsModal} />
        <FirstPickSelector firstPickUser={firstPickUser} setFirstPickUser={setFirstPickUser} />
        <Button variant="contained" color="primary" onClick={() => setShouldShowRecommendationsModal(true)}>Mostrar recomendações</Button>
        <BattlePicksWrapper>
            <BattlePicks isUserFirstPicker={firstPickUser === UserType.me} />
        </BattlePicksWrapper>
    </ScreenContainer>
}