import React from 'react'
import styled from "styled-components"
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { monsters } from '../../data/monsters';
import { Monster } from '../../models/monster';

interface ModalContentProps {
    selectedMonster?: Monster
    setSelectedMonster: (monster: Monster) => void
    closeModal: () => void
}

const ModalContentWrapper = styled.div`
    width: 300px;
    height: 400px;
    background: #fff;
`

export const ModalContent: React.FC<ModalContentProps> = ({
    selectedMonster,
    setSelectedMonster,
    closeModal,
}) => {
    return <ModalContentWrapper>
        <h1 style={{ color: '#00F', alignSelf: 'center' }}>Selecione o monstro escolhido na batalha:</h1>
        <Autocomplete
            value={selectedMonster}
            onChange={(event, newValue) => {
                if (newValue) {
                    setSelectedMonster(newValue)
                    closeModal()
                }
            }}
            options={monsters}
            getOptionLabel={(monster) => monster.name}
            id="auto-complete"
            autoComplete
            includeInputInList
            renderInput={(params: any) => <TextField {...params} label="autoComplete" margin="normal" />}
        />
    </ModalContentWrapper>
}