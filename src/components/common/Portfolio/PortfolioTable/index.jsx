import React, {useEffect, useMemo, useState} from "react";
import {ActionBtnList} from "@/components/atoms/ActionBtns/ActionBtns.styles";
import Table from "@/components/molecules/Table";
import TableLayout from "@/components/atoms/TableLayout";
import {TableContainer} from "./PorfolioTable.style";
import CenterModal from "@/components/molecules/Modal/CenterModal";
import DownloadModal from "@/components/molecules/DownloadStatmentModal/DownloadModal";
import SuccessModal from "@/components/molecules/SuccessModal/SuccessModal";
import SuccessIcon from "../../../../_assets/successIcon.png";
import ButtonsGroup from "@/components/atoms/ButtonsGroup";
import CalenderIcon from "../../../../_assets/calander.svg";
import {MdModeEditOutline} from "react-icons/md";
import DeleteIcon from "../../../../_assets/delete.svg";
import SpeakerIcon from "../../../../_assets/speaker.svg";
import FileIcon from "../../../../_assets/file.svg";
import TableStyle from "../../../../_assets/table-style.jpg";

import EditProductModal from "../EditProductModal";
import InfoIcon from "../../../../_assets/infoIcon.png";
import Image from "next/image";
import ProductDetailModal from "../ProductDetailModal";
import DeleteModal from "@/components/atoms/ProductDeleteModal/DeleteModal";
import SuccessfulModal from "@/components/atoms/ProductDeleteModal/SuccessfulModal";
import AdvertiseModal from "@/components/atoms/AdvertiseProductModal/AdvertiseModal";
import AdvertiseSuccessfulModal from "@/components/atoms/AdvertiseProductModal/AdvertiseSuccessfulModal";
import CreateNewProduct from "../CreateNewProduct";
import SelectRangeModal from "@/components/atoms/SelectRangeModal";
import productService from "@/services/productService";
import {useContextHook} from "use-context-hook";
import {AuthContext} from "@/context/authContext";
import {format} from "date-fns";

const PortfolioTable = ({title}) => {
    const {user, fetch, refetch} = useContextHook(AuthContext, v => ({
        fetch: v.fetch,
        refetch: v.refetch,
        user: v.user,
    }));
    const [searchQuery, setSearchQuery] = useState({
        page: 1,
        itemsPerPage: 10,
        searchText: "",
        type: "All",
        startDate: "",
        endDate: "",
    });
    console.log(searchQuery);

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const {products_data, products_loading} = productService.GetAllProducts(searchQuery, fetch);
    const [open, setOpen] = useState(false);
    const [statementModal, setStatementModal] = useState(false);
    const [productData, setproductData] = useState([]);
    const [selecteData, setSelecteData] = useState();
    const [productDetailModal, setProductDetailModal] = useState(false);
    const [editProductModal, setEditProductModal] = useState(false);
    const [createProductModal, setCreateProductModal] = useState(false);
    const [productDeleteModal, setProductDeleteModal] = useState(false);
    const [productAdvertiseModal, setProductAdvertiseModal] = useState(false);
    const [deleteSuccessfulModal, setDeleteSuccessfulModal] = useState(false);
    const [advertiseSuccessfulModal, setAdvertiseSuccessfulModal] = useState(false);

    const modalParagraph =
        "Your account statement is now available at alex123@gmail.com. Be sure to check your spam folder if you don't see it right away.";
    const openModal = () => {
        setOpen(true);
    };
    const openStatementModal = () => {
        setStatementModal(true);
        setOpen(false);
    };
    const closeDeleteModal = () => {
        setProductDeleteModal(false);
    };
    const handleAdvertiseModal = () => {
        setProductAdvertiseModal(false);
        setAdvertiseSuccessfulModal(true);
    };
    const transactions = [
        {
            product: "Gov. Egypt Property",
            investment_type: "Properties",
            status: "Active",
            backers_limit: "50",
            amount_raised: "$40,256.000",
            total_asset_value: "$40,256.000",
        },
        {
            product: "Audi A8 Car",
            investment_type: "Car",
            status: "Completed",
            backers_limit: "60",
            amount_raised: "$40,256.000",
            total_asset_value: "$40,256.000",
        },
        {
            product: "Gov. Egypt Property",
            investment_type: "Properties",
            status: "Active",
            backers_limit: "50",
            amount_raised: "$0.000",
            total_asset_value: "$40,256.000",
        },
        {
            product: "Audi A8 Car",
            investment_type: "Car",
            status: "Completed",
            backers_limit: "60",
            amount_raised: "$40,256.000",
            total_asset_value: "$40,256.000",
        },
        {
            product: "Gov. Egypt Property",
            investment_type: "Properties",
            status: "Completed",
            backers_limit: "60",
            amount_raised: "$40,256.000",
            total_asset_value: "$40,256.000",
        },
        {
            product: "Audi A8 Car",
            investment_type: "Car",
            status: "Active",
            backers_limit: "60",
            amount_raised: "$40,256.000",
            total_asset_value: "$40,256.000",
        },
    ];
    async function handelDeleteProduct() {
        await productService.deleteProduct(selecteData);
        refetch();
        setProductDeleteModal(false);
        setDeleteSuccessfulModal(true);
    }

    const actionBtns = _ => (
        <>
            <ActionBtnList>
                <li>
                    <button
                        type="button"
                        className="btn file"
                        onClick={() => {
                            setProductDetailModal(true);
                            setSelecteData(_);
                        }}>
                        <Image src={FileIcon} alt="FileIcon" />
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="btn edit"
                        onClick={() => {
                            setEditProductModal(true);
                            setSelecteData(_);
                        }}>
                        <MdModeEditOutline color="rgba(64, 143, 140, 1)" size={16} />
                    </button>
                </li>
                <li>
                    <button type="button" className="btn speaker">
                        <Image
                            src={SpeakerIcon}
                            alt="advertise"
                            onClick={() => {
                                setProductAdvertiseModal(true);
                            }}
                        />
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="btn delete"
                        onClick={() => {
                            setProductDeleteModal(true);
                            setSelecteData(_?._id);
                        }}>
                        <Image src={DeleteIcon} alt="delete" />
                    </button>
                </li>
            </ActionBtnList>
        </>
    );

    const {product_rows, totalItems} = useMemo(() => {
        const items = products_data.items || [];
        return {
            product_rows: items.map(data => [
                data.productName || "------------",
                data.investmentType || "------------",
                data.isVerified ? "Approve" : "Pending" || "------------",
                data.maximumBackers || "------------",
                data.minimumInvestment || "------------",
                data.assetValue || "------------",
                actionBtns(data),
            ]),
            totalItems: items.length,
        };
    }, [products_data]);
    const columnNamess = [
        `Product`,
        `Investment type`,
        `Status`,
        "Backers Limit",
        "Amount Raised",
        "Total Asset Value",
        "Actions",
    ];
    return (
        <>
            <CenterModal open={open} setOpen={setOpen} width="666" padding={"30px"} title="Select Range">
                <SelectRangeModal
                    startDate={startDate}
                    endDate={endDate}
                    onChange={dates => {
                        const [start, end] = dates?.target?.value;
                        setStartDate(start);
                        setEndDate(end);
                    }}
                    onApplyDate={() => {
                        if (startDate && endDate) {
                            setSearchQuery({
                                ...searchQuery,
                                startDate: format(new Date(startDate), "yyyy-MM-dd"),
                                endDate: format(new Date(endDate), "yyyy-MM-dd"),
                            });
                            setOpen(false);
                        }
                    }}
                    onClearDate={() => {
                        setStartDate(null);
                        setEndDate(null);
                        if (startDate && endDate) {
                            setSearchQuery({
                                ...searchQuery,
                                startDate: "",
                                endDate: "",
                            });
                        }
                    }}
                    setOpen={setOpen}
                />
            </CenterModal>

            <CenterModal
                open={statementModal}
                setOpen={setStatementModal}
                width="543"
                padding={"25px"}
                headImage={SuccessIcon}>
                <SuccessModal heading="Statement Sent Successfully!" paragraph={modalParagraph} />
            </CenterModal>
            <CenterModal
                open={productDetailModal}
                setOpen={setProductDetailModal}
                title="Gov. Egypt Property Detail"
                width="1030">
                <ProductDetailModal data={selecteData} />
            </CenterModal>

            <CenterModal open={editProductModal} setOpen={setEditProductModal} title="Edit Product" width="900">
                <EditProductModal product={selecteData} setEditProductModal={setEditProductModal} />
            </CenterModal>
            <CenterModal
                open={productDeleteModal}
                setOpen={setProductDeleteModal}
                title={<Image src={InfoIcon} alt="InfoIcon" />}
                width="543">
                <DeleteModal closeDeleteModal={closeDeleteModal} openSuccessfulModal={handelDeleteProduct} />
            </CenterModal>
            <CenterModal
                open={deleteSuccessfulModal}
                setOpen={setDeleteSuccessfulModal}
                title={<Image src={SuccessIcon} alt="SuccessIcon" />}
                width="543">
                <SuccessfulModal title={"Product Deleted Successfully!"} />
            </CenterModal>

            <CenterModal
                open={productAdvertiseModal}
                setOpen={setProductAdvertiseModal}
                title="Advertise Product"
                width="667">
                <AdvertiseModal handleAdvertiseModal={handleAdvertiseModal} />
            </CenterModal>
            <CenterModal
                open={advertiseSuccessfulModal}
                setOpen={setAdvertiseSuccessfulModal}
                title={<Image src={SuccessIcon} alt="SuccessIcon" />}
                width="543">
                <AdvertiseSuccessfulModal />
            </CenterModal>

            <TableContainer>
                <Image src={TableStyle} draggable="false" className="tableStyle" alt="tableStyle" />
                <TableLayout
                    onChangeFilters={e => {
                        setSearchQuery(prev => ({...prev, searchText: e}));
                    }}
                    tableHeading={<ButtonsGroup title={title} setSearchQuery={setSearchQuery} />}
                    placeholder="Search Product"
                    btnWidth={"40px"}
                    btnType="download"
                    iconImg={CalenderIcon}
                    openModal={openModal}>
                    <Table
                        width={1024}
                        rowsData={product_rows}
                        loading={products_loading}
                        columnNames={columnNamess}
                        noPadding
                    />
                </TableLayout>
            </TableContainer>
        </>
    );
};

export default PortfolioTable;
