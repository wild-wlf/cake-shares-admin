import React, { useState } from "react";
import { Container, OptionsWrapper, Option, Button } from "./styles";
import Image from "next/image";
import Bank from "../../../_assets/Bank.png";
import CryptoWallet from "../../../_assets/CryptoWallet.png";
import Card from "../../../_assets/card.png";

const TopUpModal = ({ openNext, handleOptionSelect, selectedOption }) => {
  return (
    <Container>
      <h3 className="heading">
        How would you like to add money to your Cakeshares Wallet?
      </h3>

      <OptionsWrapper>
        <Option onClick={() => handleOptionSelect("bank")}>
          <div className="imgContainer">
            <Image src={Bank} alt="bank image" />
          </div>
          <div className="contarinerBox">
            <div className="textContainer">
              <h2 className="optionName">Top up via Bank Account</h2>
              <p>
                Lorem Ipsum adalah contoh teks atau dummy dalam industri
                percetakan dan penataan huruf atau typesetting. Lorem Ipsum
                telah menjadi standar contoh teks sejak tahun 1500.
              </p>
            </div>
            <div className="custom-radio">
              <input
                type="radio"
                id="bank"
                checked={selectedOption === "bank"}
                onChange={() => handleOptionSelect("bank")}
              />
              <div></div>
            </div>
          </div>
        </Option>

        <Option onClick={() => handleOptionSelect("crypto")}>
          <div className="imgContainer">
            <Image src={CryptoWallet} alt="bank image" />
          </div>
          <div className="contarinerBox">
            <div className="textContainer">
              <h2 className="optionName">Top up via Crypto Wallet</h2>
              <p>
                Lorem Ipsum adalah contoh teks atau dummy dalam industri
                percetakan dan penataan huruf atau typesetting. Lorem Ipsum
                telah menjadi standar contoh teks sejak tahun 1500.
              </p>
            </div>
            <div className="custom-radio">
              <input
                type="radio"
                id="crypto"
                checked={selectedOption === "crypto"}
                onChange={() => handleOptionSelect("crypto")}
              />
              <div></div>
            </div>
          </div>
        </Option>

        <Option onClick={() => handleOptionSelect("card")}>
          <div className="imgContainer">
            <Image src={Card} alt="bank image" />
          </div>

          <div className="contarinerBox">
            <div className="textContainer">
              <h2 className="optionName">Top up via Credit Card</h2>
              <p>
                Credit Card fees will be deducted from your credits. These fees
                can significantly decrease your returns for some investments.
              </p>
            </div>
            <div className="custom-radio">
              <input
                type="radio"
                id="card"
                checked={selectedOption === "card"}
                onChange={() => handleOptionSelect("card")}
              />
              <div></div>
            </div>
          </div>
        </Option>
      </OptionsWrapper>

      <Button onClick={() => openNext()}>Continue</Button>
    </Container>
  );
};

export default TopUpModal;
