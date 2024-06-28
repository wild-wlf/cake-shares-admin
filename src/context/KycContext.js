import { useState, createContext, useEffect } from 'react';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from './authContext';

export const KycContext = createContext();

export const KycContextProvider = ({ children }) => {
  const { user } = useContextHook(AuthContext, v => ({
    user: v.user,
  }));
  const [kycLevel, setKycLevel] = useState(user?.sellerType === 'Company' ? 0 : 1);
  useEffect(() => {
    setKycLevel(user?.kycLevel ? user.kycLevel + 1 : 1);
  }, []);

  const [kyc0, setKyc0] = useState(false);
  const [kyc1, setKyc1] = useState(false);
  const [kyc2, setKyc2] = useState(false);
  const [kyc3, setKyc3] = useState(false);
  const [kyc4, setKyc4] = useState(false);

  function checkKycLevel() {
    console.log(user?.sellerType === 'Company');
    if (user?.sellerType === 'Company') {
      setKyc0(true);
    } else if (kycLevel == 1) {
      setKyc1(true);
    } else if (kycLevel == 2) {
      setKyc2(true);
    } else if (kycLevel == 3) {
      setKyc3(true);
    } else if (kycLevel == 4 && user?.sellerType === 'Company') {
      setKyc4(true);
    }
  }
  const contextValue = {
    kycLevel,
    setKycLevel,
    kyc0,
    setKyc0,
    kyc1,
    setKyc1,
    kyc2,
    setKyc2,
    kyc3,
    setKyc3,
    kyc4,
    setKyc4,
    checkKycLevel,
  };
  return <KycContext.Provider value={contextValue}>{children}</KycContext.Provider>;
};
