import React, { useState } from "react";
import {
  StyledContainer,
  ChartWrapper,
  ButtonContainer,
  ButtonConfirm,
  ButtonCancel,
} from "./WalletStyles";
import Button from "@/components/atoms/Button";
import btnLeftArrow from "../../../_assets/btnLeftArrow.png";
import walletWhite from "../../../_assets/walletWhite.png";
import Image from "next/image";
import Graph from "@/components/molecules/Charts";
import PieChart from "@/components/molecules/PieChart";
import CenterModal from "@/components/molecules/Modal/CenterModal";
import TopUpModal from "@/components/molecules/TopUpModal/TopUpModal";
import BankModal from "@/components/molecules/BankModal/BankModal";
import AccountDetailModal from "@/components/molecules/AccountDetailModal/AccountDetailModal";
import infoIcon from "../../../_assets/infoIcon.png";
import SuccessModal from "@/components/molecules/SuccessModal/SuccessModal";
import SuccessIcon from "../../../_assets/SuccessIcon.png";
import CardModal from "@/components/molecules/CreditCardModal/CardModal.jsx";
import CryptoModal from "@/components/molecules/CryptoModal/CryptoModal";
import AddAmountModal from "@/components/molecules/AddAmountModal/AddAmountModal";

const MyWallet = () => {
  const ary3 = [0, 200, 10, 1000, 5000, 200, 8000, 10, 500];
  const ary2 = [
    0, 200, 300, 6000, 500, 1000, 500, 5000, 1000, 8000, 200, 5000, 5200, 5500,
    5700, 5720, 5880,
  ];
  const pieData = [
    { name: "Banking product", y: 30, color: "#408F8C" },
    { name: "Properties", y: 25, color: "#00AFD6" },
    { name: "Ventures", y: 20, color: "#0A1149" },
    { name: "Bazar", y: 15, color: "#419400" },
    { name: "Cars", y: 10, color: "#4E6199" },
  ];
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
  const [openCardSuccess, setOpenCardSuccess] = useState(false);
  const [openCardLast, setOpenCardLast] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("bank");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  const openModal = () => {
    setOpen(true);
  };
  const openNext = () => {
    setOpen(false);
    if (selectedOption === "bank") {
      setOpenBank(true);
    } else if (selectedOption === "crypto") {
      setOpenCrypto(true);
    } else if (selectedOption === "card") {
      setOpenCard(true);
    }
  };
  const openAccountModal = () => {
    setOpenBank(false);
    setOpenAccount(true);
  };
  const closeAccountModal = (option) => {
    setOpenAccount(false);
    if (option === "save") {
      setOpenInfo(true);
    } else if (option === "download") {
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
    setOpenCardSuccess(true);
  };
  const walletLinkModal = () => {
    setOpenCrypto(false);
    setOpenWalletLink(true);
  };
  const saveDetailsModal = () => {
    setOpenAmount(false);
    setOpenTopupSuccess(true);
  };

  return (
    <>
      <CenterModal
        open={openLast}
        setOpen={setOpenLast}
        width="543"
        padding={"25px"}
        headImage={SuccessIcon}
      >
        <SuccessModal
          heading="Wallet Details Saved Successfully!"
          paragraph="Your wallet details have been saved for future top ups."
        />
      </CenterModal>

      <CenterModal
        open={openTopupSuccess}
        setOpen={setOpenTopupSuccess}
        width="543"
        padding={"25px"}
        headImage={SuccessIcon}
      >
        <SuccessModal
          heading="Wallet Top up Successful!"
          paragraph="Great news! Your wallet top-up using your bank details was successful. Funds should be available within 3 business days."
        />
        <ButtonContainer>
          <ButtonCancel onClick={() => setOpenTopupSuccess(false)}>
            Cancel
          </ButtonCancel>
          <ButtonConfirm
            onClick={() => {
              setOpenTopupSuccess(false);
              setOpenLast(true);
            }}
          >
            Save Wallet Details
          </ButtonConfirm>
        </ButtonContainer>
      </CenterModal>

      <CenterModal
        open={openAmout}
        setOpen={setOpenAmount}
        width="667"
        padding={"25px"}
        title={"Top up via Crypto Wallet"}
      >
        <AddAmountModal saveDetailsModal={saveDetailsModal} />
      </CenterModal>

      <CenterModal
        open={openWalletLink}
        setOpen={setOpenWalletLink}
        width="543"
        padding={"25px"}
        headImage={SuccessIcon}
      >
        <SuccessModal
          heading="Wallet Linked Successfully!"
          paragraph="Your Binance crypto wallet has been successfully linked to your CakeShares account. You can now transfer funds easily."
        />
        <ButtonContainer>
          <ButtonCancel onClick={() => setOpenWalletLink(false)}>
            Cancel
          </ButtonCancel>
          <ButtonConfirm
            onClick={() => {
              setOpenWalletLink(false);
              setOpenAmount(true);
            }}
          >
            Add Amount
          </ButtonConfirm>
        </ButtonContainer>
      </CenterModal>

      <CenterModal
        open={openCrypto}
        setOpen={setOpenCrypto}
        width="667"
        padding={"25px"}
        title={"Top up via Crypto Wallet"}
      >
        <CryptoModal walletLinkModal={walletLinkModal} />
      </CenterModal>

      <CenterModal
        open={openCardLast}
        setOpen={setOpenCardLast}
        width="543"
        padding={"25px"}
        headImage={SuccessIcon}
      >
        <SuccessModal
          heading="Card Details Saved Successfully!"
          paragraph="Your credit card details have been saved for future top ups."
        />
      </CenterModal>

      <CenterModal
        open={openCardSuccess}
        setOpen={setOpenCardSuccess}
        width="543"
        padding={"24px"}
        headImage={SuccessIcon}
      >
        <SuccessModal
          heading="Wallet Top up Successful!"
          paragraph="Great news! Your wallet top-up using your credit card was successful. Funds should be available within 3 business days."
        />
        <ButtonContainer>
          <ButtonCancel onClick={() => setOpenCardSuccess(false)}>
            Cancel
          </ButtonCancel>
          <ButtonConfirm
            onClick={() => {
              setOpenCardSuccess(false);
              setOpenCardLast(true);
            }}
          >
            Save Card Details
          </ButtonConfirm>
        </ButtonContainer>
      </CenterModal>

      <CenterModal
        open={openCard}
        setOpen={setOpenCard}
        width="666"
        title={"Top up via Credit Card"}
        padding={"30px"}
      >
        <CardModal openCardNext={openCardNext} />
      </CenterModal>

      <CenterModal
        open={openSuccessModal}
        setOpen={setOpenSuccessModal}
        width="543"
        padding={"25px"}
        headImage={SuccessIcon}
      >
        <SuccessModal
          heading="Bank Details Saved Successfully!"
          paragraph="Your bank details have been saved for future top ups."
        />
      </CenterModal>

      <CenterModal
        open={openInfo}
        setOpen={setOpenInfo}
        width="543"
        padding={"24px"}
        headImage={infoIcon}
      >
        <SuccessModal
          heading="Save Bank Details!"
          paragraph="Do you want to save your bank details for future top-ups?"
        />
        <ButtonContainer>
          <ButtonCancel onClick={() => closeInfoModal()}>Cancel</ButtonCancel>
          <ButtonConfirm
            onClick={() => {
              openLastModal();
            }}
          >
            Yes, Save
          </ButtonConfirm>
        </ButtonContainer>
      </CenterModal>

      <CenterModal
        open={openAccount}
        setOpen={setOpenAccount}
        width="643"
        padding={"30px"}
        title="Bank Top-up Acc details "
      >
        <AccountDetailModal closeAccountModal={closeAccountModal} />
      </CenterModal>

      <CenterModal
        open={openBank}
        setOpen={setOpenBank}
        width="666"
        padding={"30px"}
        title="Top up via Bank Account"
      >
        <BankModal openAccountModal={openAccountModal} />
      </CenterModal>

      <CenterModal
        open={open}
        setOpen={setOpen}
        width="623"
        padding={"30px"}
        title="Top up your Wallet"
      >
        <TopUpModal
          openNext={openNext}
          handleOptionSelect={handleOptionSelect}
          selectedOption={selectedOption}
        />
      </CenterModal>

      <StyledContainer>
        <div className="btnDiv">
          <Button rounded sm btntype="gray">
            <Image src={btnLeftArrow} />
            Go Back
          </Button>
          <Button rounded sm btntype="green" onClick={() => openModal()}>
            Top Up Wallet
            <Image src={walletWhite} />
          </Button>
        </div>
        <div className="textContainer">
          <h1 className="title">MyWallet</h1>
          <div className="credit">
            <span>Total Credit:</span> <br />
            <h1>$35,265.000</h1>
          </div>
        </div>

        <ChartWrapper>
          <div className="ChartContainer">
            <PieChart
              graphData={pieData}
              title="Total Investments"
              amount="$1000"
              timeFrame="year"
            />
          </div>

          <div className="ChartContainer">
            <Graph
              graphLineColor="#4E6199"
              // graphData={dashboard_data?.charDataTransaction?.map( => .total)}
              graphData={ary2}
              tooltipBg=""
              title="Potential Return P.A"
              // amount={dashboard_data?.totalTransactionAmount}
              amount="$2405"
              timeFrame="steps"
            />
          </div>
          <div className="ChartContainer">
            <Graph
              graphLineColor="#D74120"
              // graphData={dashboard_data?.charDataTransaction?.map( => .total)}
              graphData={ary3}
              tooltipBg=""
              tooltipImg=""
              title="Portfolio Costs"
              // amount={dashboard_data?.totalTransactionAmount}
              amount="$2405"
              timeFrame="steps"
            />
          </div>
        </ChartWrapper>
      </StyledContainer>
    </>
  );
};

export default MyWallet;
