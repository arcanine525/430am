import {CloseButton, Modal, ModalContent, ModalOverlay} from '@chakra-ui/react'
import {connect} from 'react-redux'
import {hideModal, showModal} from '../../store/actions/modal'

const iconCloseSize = ['30px', '50px']
const iconClosePosition = ['-15px', '-20px']

const TdsModal = ({modal, hideModal}) => {
  const {
    isOpen = true,
    closeOnOverlayClick = true,
    onClose = () => {},
    BodyComponent,
  } = modal

  const onOverlayClick = () => {
    if (closeOnOverlayClick) {
      hideModal()
    }
  }

  return (
    <Modal onOverlayClick={onOverlayClick} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW={['85vw', '485px']}>
        {BodyComponent}
        <CloseButton
          borderRadius={'100px'}
          color={'white'}
          bg={'#D8D8D8'}
          _hover={{bg: '#b6b6b6'}}
          onClick={hideModal}
          position={'absolute'}
          top={iconClosePosition}
          right={iconClosePosition}
          w={iconCloseSize}
          h={iconCloseSize}
        />
      </ModalContent>
    </Modal>
  )
}

const mapStateToProps = state => ({
  modal: state.modal,
})

export default connect(mapStateToProps, {showModal, hideModal})(TdsModal)
