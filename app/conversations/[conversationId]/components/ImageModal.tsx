'use client';

import Modal from '@/app/components/Modal';
import Image from 'next/image';

type ImageModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
};

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, src }) => {
  if (!src) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='w-96 h-96'>
        <Image alt='image' src={src} fill className='object-contain' />
      </div>
    </Modal>
  );
};

export default ImageModal;
