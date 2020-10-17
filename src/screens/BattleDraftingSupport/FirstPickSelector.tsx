import React from 'react';
import styled from 'styled-components';
import { UserType } from '../../models/userType';

interface FirstPickSelectorProps {
    firstPickUser?: UserType
    setFirstPickUser: (firstPickUser: UserType) => void
}

const FirstPickSelectorWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 16px;
`

const SelectLabel = styled.h3`
    
`

export const FirstPickSelector: React.FC<FirstPickSelectorProps> = ({
    firstPickUser,
    setFirstPickUser
}) => {
    const onChangeSelectValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const firstPickUser = mapSelectOptionToUserType(event.target.value)
        setFirstPickUser(firstPickUser)
    }

    return <FirstPickSelectorWrapper>
        <SelectLabel> Selecione o usuário que terá o first pick: </SelectLabel>
        <select value={firstPickUser?.toString()} onChange={onChangeSelectValue}>
            {
                (Object.values(UserType) as UserType[]).filter((item) => typeof item === 'number').map((value: UserType) => {
                    return <option value={value.toString()}>{getUserTypeText(value)}</option>
                })
            }
        </select>
    </FirstPickSelectorWrapper>
}

const mapSelectOptionToUserType = (option: string): UserType => {
    switch (option) {
        case UserType.me.toString():
            return UserType.me
        case UserType.enemy.toString():
            return UserType.enemy
        default:
            return UserType.me
    }
}

const getUserTypeText = (userType?: UserType) => {
    switch (userType) {
        case UserType.me:
            return 'Eu'
        case UserType.enemy:
            return 'Adversário'
        default:
            return 'Nenhum valor selecionado'
    }
}