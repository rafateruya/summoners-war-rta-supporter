import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import { useRecommendations } from './useRecommendations';
import styled from 'styled-components';
import { DialogTitle, Typography } from '@material-ui/core';


interface RecommendationsModalProps {
    isModalOpen: boolean
    setIsModalOpen: (value: boolean) => void
}

const DialogContentWrapper = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const RecommendationsModal: React.FC<RecommendationsModalProps> = ({
    isModalOpen,
    setIsModalOpen,
}) => {
    const { recommendations } = useRecommendations()
    return (
        <Dialog open={isModalOpen} onClose={() => { setIsModalOpen(false) }}>
            <DialogContentWrapper>
                <DialogTitle>Recomendações</DialogTitle>
                {
                    recommendations.map((recommendation) => <Typography> {recommendation} </Typography>)
                }
            </DialogContentWrapper>
        </Dialog>

    )
}