import { useState, createContext } from "react";

export const KycContext = createContext();

export const KycContextProvider = ({ children }) => {
  const [kycLevel, setKycLevel] = useState(1);
  const [kyc1, setKyc1] = useState(false);
  const [kyc2, setKyc2] = useState(false);
  const [kyc3, setKyc3] = useState(false);

  function checkKycLevel() {
    if (kycLevel == 1) {
      setKyc1(true);
    } else if (kycLevel == 2) {
      setKyc2(true);
    } else if (kycLevel == 3) {
      setKyc3(true);
    }
  }
  const contextValue = {
    kycLevel,
    setKycLevel,
    kyc1,
    setKyc1,
    kyc2,
    setKyc2,
    kyc3,
    setKyc3,
    checkKycLevel,
  };
  return (
    <KycContext.Provider value={contextValue}>{children}</KycContext.Provider>
  );
};
