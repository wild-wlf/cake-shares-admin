import React from "react";
import {Container, Data} from "./SellerBarStyles";

const SellerDetailBar = ({sm}) => {
    const data = [
        {
            title: "Banking Product",
            amount: "$5,000",
            investments: "2 Investments",
        },
        {title: "Properties", amount: "$30,000", investments: "12 Investments"},
        {title: "Ventures", amount: "$2,000", investments: "1 Investment"},
        {title: "Bazar", amount: "$2,000", investments: "1 Investment"},
        {
            title: "Total Investment",
            amount: "$37,000",
            investments: "16 Investments",
        },
    ];
    return (
        <Container sm={sm}>
            {data.map((item, index) => {
                return (
                    <Data key={index} sm={sm}>
                        <span className="f-span">{item.title}</span>
                        <h1>{item.amount}</h1>
                        <span className="l-span">{item.investments}</span>
                    </Data>
                );
            })}
        </Container>
    );
};

export default SellerDetailBar;
