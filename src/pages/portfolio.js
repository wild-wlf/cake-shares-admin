import PortfolioTable from "@/components/common/Portfolio/PortfolioTable";
import SellerTopBar from "@/components/common/SellerTopBar/SellerTopBar";
import {AuthContext} from "@/context/authContext";
import productService from "@/services/productService";
import {SellerContainer} from "@/styles/GlobalStyles.styles";
import React from "react";
import {useContextHook} from "use-context-hook";

const Portfolio = () => {
    const {fetch} = useContextHook(AuthContext, v => ({
        fetch: v.fetch,
    }));
    const {products_data} = productService.GetAllProducts(fetch);

    return (
        <SellerContainer>
            <SellerTopBar
                title={"My Portfolio"}
                tagLine={`You have total ${
                    products_data?.items?.length ? products_data?.items.length : "0"
                } Products in your Portfolio right now!`}
            />
            <PortfolioTable />
        </SellerContainer>
    );
};

export default Portfolio;
