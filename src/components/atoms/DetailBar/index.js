import React from "react";
import {Container, Data} from "./BarStyles";

const DetailBar = () => {
    return (
        <Container>
            <Data>
                <span className="f-span">Banking Product</span>
                <h1>$0</h1>
                <span className="l-span">0 Investments</span>
            </Data>
            <Data>
                <span className="f-span">Properties</span>
                <h1>$0</h1>
                <span className="l-span">0 Investments</span>
            </Data>
            <Data>
                <span className="f-span">Ventures</span>
                <h1>$0</h1>
                <span className="l-span">0 Investments</span>
            </Data>
            <Data>
                <span className="f-span">Bazar</span>
                <h1>$0</h1>
                <span className="l-span">0 Investments</span>
            </Data>
            <Data>
                <span className="f-span">Total Investment</span>
                <h1>$0</h1>
                <span className="l-span">0 Investments</span>
            </Data>
        </Container>
    );
};

export default DetailBar;
