import React, { useState } from 'react';
import { StyledContainer, ChartWrapper, ButtonContainer } from './WalletStyles';
import Button from '@/components/atoms/Button';
import walletWhite from '../../../_assets/walletWhite.png';
import Image from 'next/image';
import Graph from '@/components/molecules/Charts';
import PieChart from '@/components/molecules/PieChart';
import CenterModal from '@/components/molecules/Modal/CenterModal';
import TopUpModal from '@/components/molecules/TopUpModal/TopUpModal';
import BankModal from '@/components/molecules/BankModal/BankModal';
import AccountDetailModal from '@/components/molecules/AccountDetailModal/AccountDetailModal';
import infoIcon from '../../../_assets/infoIcon.png';
import SuccessModal from '@/components/molecules/SuccessModal/SuccessModal';
import SuccessIcon from '../../../_assets/successIcon.png';
import CardModal from '@/components/molecules/CreditCardModal/CardModal.jsx';
import CryptoModal from '@/components/molecules/CryptoModal/CryptoModal';
import AddAmountModal from '@/components/molecules/AddAmountModal/AddAmountModal';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';

const MyWallet = ({ pieData, amount }) => {
  const { user, setPermission, refetch } = useContextHook(AuthContext, v => ({
    user: v.user,
    setPermission: v.setPermission,
    refetch: v.refetch,
  }));

  const [open, setOpen] = useState(false);
  const [openLast, setOpenLast] = useState(false);
  const [openBank, setOpenBank] = useState(false);
  const [openCard, setOpenCard] = useState(false);
  const [openCrypto, setOpenCrypto] = useState(false);
  const [openAmout, setOpenAmount] = useState(false);
  const [openTopupSuccess, setOpenTopupSuccess] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);
  const [openWalletLink, setOpenWalletLink] = useState(false);
  const [openCardLast, setOpenCardLast] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState('bank');

  const handleOptionSelect = option => {
    setSelectedOption(option);
  };
  const openModal = () => {
    setOpen(true);
  };
  const openNext = () => {
    setOpen(false);
    if (selectedOption === 'bank') {
      setOpenBank(true);
    } else if (selectedOption === 'crypto') {
      setOpenCrypto(true);
    } else if (selectedOption === 'card') {
      setOpenCard(true);
    }
  };
  const openAccountModal = () => {
    setOpenBank(false);
    setOpenAccount(true);
  };
  const closeAccountModal = option => {
    setOpenAccount(false);
    if (option === 'save') {
      setOpenInfo(true);
    } else if (option === 'download') {
    }
  };
  const closeInfoModal = () => {
    setOpenInfo(false);
  };
  const openLastModal = () => {
    setOpenInfo(false);
    setOpenSuccessModal(true);
  };
  const openCardNext = () => {
    setOpenCard(false);
    // setOpenCardSuccess(true);
    setOpenCardLast(true);
    refetch();
  };
  const walletLinkModal = () => {
    setOpenCrypto(false);
    setOpenWalletLink(true);
  };
  const saveDetailsModal = () => {
    setOpenAmount(false);
    setOpenTopupSuccess(true);
  };

  const cardSaveHandler = async () => {
    try {
      // setOpenCardSuccess(false);
      // setOpenCardLast(true);
    } catch (error) {}
  };

  return (
    <>
      <CenterModal open={openLast} setOpen={setOpenLast} width="543" headImage={SuccessIcon}>
        <SuccessModal
          heading="Wallet Details Saved Successfully!"
          paragraph="Your wallet details have been saved for future top ups."
        />
      </CenterModal>

      <CenterModal open={openTopupSuccess} setOpen={setOpenTopupSuccess} width="543" headImage={SuccessIcon}>
        <SuccessModal
          heading="Wallet Top up Successful!"
          paragraph="Great news! Your wallet top-up using your bank details was successful. Funds should be available within 3 business days."
        />
        <ButtonContainer>
          <Button
            rounded
            width={'170px'}
            height={'40px'}
            sm
            btntype="cancel"
            onClick={() => setOpenTopupSuccess(false)}>
            Cancel
          </Button>
          <Button
            rounded
            width={'170px'}
            height={'40px'}
            sm
            btntype="green"
            onClick={() => {
              setOpenTopupSuccess(false);
              setOpenLast(true);
            }}>
            Save Wallet Details
          </Button>
        </ButtonContainer>
      </CenterModal>

      <CenterModal open={openAmout} setOpen={setOpenAmount} width="667" title={'Top up via Crypto Wallet'}>
        <AddAmountModal saveDetailsModal={saveDetailsModal} />
      </CenterModal>

      <CenterModal open={openWalletLink} setOpen={setOpenWalletLink} width="543" headImage={SuccessIcon}>
        <SuccessModal
          heading="Wallet Linked Successfully!"
          paragraph="Your Binance crypto wallet has been successfully linked to your CakeShares account. You can now transfer funds easily."
        />
        <ButtonContainer>
          <Button rounded width={'170px'} height={'40px'} sm btntype="cancel" onClick={() => setOpenWalletLink(false)}>
            Cancel
          </Button>
          <Button
            rounded
            width={'170px'}
            height={'40px'}
            sm
            btntype="green"
            onClick={() => {
              setOpenWalletLink(false);
              setOpenAmount(true);
            }}>
            Add Amount
          </Button>
        </ButtonContainer>
      </CenterModal>

      <CenterModal open={openCrypto} setOpen={setOpenCrypto} width="667" title={'Top up via Crypto Wallet'}>
        <CryptoModal walletLinkModal={walletLinkModal} />
      </CenterModal>

      <CenterModal open={openCardLast} setOpen={setOpenCardLast} width="543" headImage={SuccessIcon}>
        <SuccessModal heading="Top-Up SuccessFull !" />
      </CenterModal>

      <CenterModal open={openCard} setOpen={setOpenCard} width="666" title={'Top up via Credit Card'}>
        <CardModal openCardNext={openCardNext} />
      </CenterModal>

      <CenterModal open={openSuccessModal} setOpen={setOpenSuccessModal} width="543" headImage={SuccessIcon}>
        <SuccessModal
          heading="Bank Details Saved Successfully!"
          paragraph="Your bank details have been saved for future top ups."
        />
      </CenterModal>

      <CenterModal open={openInfo} setOpen={setOpenInfo} width="543" headImage={infoIcon}>
        <SuccessModal
          heading="Save Bank Details!"
          paragraph="Do you want to save your bank details for future top-ups?"
        />
        <ButtonContainer>
          <Button rounded width={'170px'} height={'40px'} sm btntype="cancel" onClick={() => closeInfoModal()}>
            Cancel
          </Button>
          <Button
            rounded
            width={'170px'}
            height={'40px'}
            sm
            btntype="green"
            onClick={() => {
              openLastModal();
            }}>
            Yes, Save
          </Button>
        </ButtonContainer>
      </CenterModal>

      <CenterModal open={openAccount} setOpen={setOpenAccount} width="643" title="Bank Top-up Acc details ">
        <AccountDetailModal closeAccountModal={closeAccountModal} />
      </CenterModal>

      <CenterModal open={openBank} setOpen={setOpenBank} width="666" title="Top up via Bank Account">
        <BankModal openAccountModal={openAccountModal} />
      </CenterModal>

      <CenterModal open={open} setOpen={setOpen} width="623" title="Top up your Wallet">
        <TopUpModal openNext={openNext} handleOptionSelect={handleOptionSelect} selectedOption={selectedOption} />
      </CenterModal>

      <StyledContainer>
        <div className="btnDiv">
          <div className="credit">
            <span>Total Credit:</span> <br />
            <h1>{+user?.wallet != null && user?.wallet != undefined ? `$ ${user?.wallet}` : '$0'}</h1>
          </div>
          <Button width={'142px'} height={'40px'} rounded sm btntype="primary" onClick={() => openModal()}>
            Top Up Wallet
            <Image src={walletWhite} alt="walletWhite" />
          </Button>
        </div>

        <ChartWrapper>
          <div className="ChartContainer">
            <PieChart graphData={pieData} title="Total Investments" amount={`$${amount || 0}`} timeFrame="year" />
          </div>

          <div className="ChartContainer">
            <Graph
              graphLineColor="#4E6199"
              // graphData={dashboard_data?.charDataTransaction?.map( => .total)}
              // graphData={ary2}
              tooltipBg=""
              title="Potential Return P.A"
              // amount={dashboard_data?.totalTransactionAmount}
              amount="$0"
              timeFrame="steps"
            />
          </div>
          <div className="ChartContainer">
            <Graph
              graphLineColor="#D74120"
              // graphData={dashboard_data?.charDataTransaction?.map( => .total)}
              // graphData={ary3}
              tooltipBg=""
              tooltipImg=""
              title="Portfolio Costs"
              // amount={dashboard_data?.totalTransactionAmount}
              amount="$0"
              timeFrame="steps"
            />
          </div>
        </ChartWrapper>
      </StyledContainer>
    </>
  );
};

export default MyWallet;
