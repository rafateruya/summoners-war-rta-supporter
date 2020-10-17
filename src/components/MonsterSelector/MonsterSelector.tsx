import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import { useState } from 'reactn';
import { MonsterCard } from '../MonsterCard/MonsterCard';
import { ModalContent } from './ModalContent';
import { Monster } from '../../models/monster';

interface MonsterSelectorProps {
    selectMonster: (monster: Monster) => void
}

export const MonsterSelector: React.FC<MonsterSelectorProps> = ({
    selectMonster
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedMonster, setSelectedMonster] = useState<Monster | undefined>(undefined)

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const onSelectMonster = (monster: Monster) => {
        selectMonster(monster)
        setSelectedMonster(monster)
    }

    return (
        <div>
            <div onClick={() => { setIsModalOpen(true) }}>
                <MonsterCard monster={selectedMonster} />
            </div>
            <Dialog open={isModalOpen} onClose={() => { setIsModalOpen(false) }}>
                <ModalContent selectedMonster={selectedMonster} setSelectedMonster={onSelectMonster} closeModal={closeModal} />
            </Dialog>
        </div>

    )
}