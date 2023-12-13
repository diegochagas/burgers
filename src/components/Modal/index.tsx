import { ReactNode } from 'react';
import { Icon } from '../Icon';

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  return  isOpen ? (
    <>
      <div className="fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-50">
        <button
          className="absolute right-4 top-4 bg-white rounded-full w-7 h-7 flex"
          onClick={onClose}
        >
          <Icon type="close" />
        </button>
        {children}
      </div>
      <div className="fixed bg-black w-screen h-screen z-40 opacity-70 top-0 left-0 right-0 bottom-0" />
    </>
  ) : null
}

