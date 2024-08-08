import React, { useState, useEffect } from 'react';

import CenterModal from '../Modal/CenterModal';
import VerficationModal from '../VerficationModal';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import BlockModal from '../BlockModal';

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

const Layout = ({ children }) => {
  const { user } = useContextHook(AuthContext, v => ({
    user: v.user,
  }));
  const [modal, setModal] = useState(false);
  const [blockModal, setblockModal] = useState(false);
  useEffect(() => {
    if (user && !isEmptyObject(user) && !user.isVerified) {
      setModal(true);
    } else if (user && !isEmptyObject(user) && user.isVerified) {
      setModal(false);
    }

    if (user && !isEmptyObject(user) && user.isBlock) {
      setblockModal(true);
    } else if (user && !isEmptyObject(user) && !user.isBlock) {
      setblockModal(false);
    }
  }, [user]);
  return (
    <>
      {modal && (
        <CenterModal open={modal} iscloseAble={false} title="Account Verification" width="689">
          <VerficationModal setOpen={setModal} />
        </CenterModal>
      )}

      {blockModal && (
        <CenterModal open={blockModal} iscloseAble={false} title="Account Suspended" width="689">
          <BlockModal setOpen={setblockModal} />
        </CenterModal>
      )}

      {children}
    </>
  );
};

export default Layout;
