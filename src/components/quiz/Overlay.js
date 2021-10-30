import React from 'react';
import Modal from 'react-modal';
import LogoSrc from '../../assets/svgs/logo.svg';
import Image from 'next/image';
import PropTypes from 'prop-types';

const customStyles = {
  content: {
    top: '0%',
    left: '0%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    backgroundColor: '#F3F7F4',
    width: '100%',
    height: '100%',
  },
};

export default function OverLay(props) {
  const { children, showModal } = props;

  return (
    <div>
      <Modal
        ariaHideApp={false}
        isOpen={showModal}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Quiz Modal"
      >
        <Image src={LogoSrc} alt="Manaul Logo" width={40} height={40} />
        {children}
      </Modal>
    </div>
  );
}

OverLay.propTypes = {
  children: PropTypes.node.isRequired,
};
