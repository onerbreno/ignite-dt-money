import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import logoImg from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'
import { useState } from 'react'

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleToggleModal() {
    setIsModalOpen(false)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Novo transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal onToggleModal={handleToggleModal} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
