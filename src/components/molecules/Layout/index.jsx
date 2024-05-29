import React, { useState, useEffect } from "react";
// import TopBar from "@/common/TopBar";
import CenterModal from "../Modal/CenterModal";
import VerficationModal from "../VerficationModal";
import { useContextHook } from "use-context-hook";
import { AuthContext } from "@/context/authContext";

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

const Layout = ({ children }) => {
  const { user, isLoggedIn } = useContextHook(AuthContext, (v) => ({
    user: v.user,
    isLoggedIn: v.isLoggedIn,
  }));
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (user && !isEmptyObject(user) && !user.isVerified) {
      setModal(true);
    } else if (user && !isEmptyObject(user) && user.isVerified) {
      setModal(false);
    }
  }, [user]);
  return (
    <>
      {modal && (
        <CenterModal
          open={modal}
          iscloseAble={false}
          title="Account Verification"
          width="689"
        >
          <VerficationModal setOpen={setModal} />
        </CenterModal>
      )}
      {children}
    </>
  );
};

export default Layout;
