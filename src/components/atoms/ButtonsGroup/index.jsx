import React, { useState } from "react";
import Button from "../Button";
import { ButtonsGroupWrapper } from "./ButtonsGroup.style";

const ButtonsGroup = () => {
  const [Tab, setTab] = useState(0);

  const categoryData = [
    {
      text: "All",
    },
    {
      text: "New",
    },
    {
      text: "Funded",
    },
  ];
  return (
    <ButtonsGroupWrapper>
      {categoryData?.map((item, index) => (
        <div key={index}>
          <Button
            rounded
            sm
            btntype="white"
            width="83px"
            className={Tab === index ? "button active" : "button"}
            onClick={() => setTab(index)}
          >
            {item.image}
            {item.text}
          </Button>
        </div>
      ))}
    </ButtonsGroupWrapper>
  );
};

export default ButtonsGroup;
