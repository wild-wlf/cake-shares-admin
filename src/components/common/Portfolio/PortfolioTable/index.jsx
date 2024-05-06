import React, { useMemo, useState } from "react";
import { ActionBtnList } from "@/components/atoms/ActionBtns/ActionBtns.styles";
import Table from "@/components/molecules/Table";
import TableLayout from "@/components/atoms/TableLayout";
import { TableContainer } from "./PorfolioTable.style";
import CenterModal from "@/components/molecules/Modal/CenterModal";
import DownloadModal from "@/components/molecules/DownloadStatmentModal/DownloadModal";
import SuccessModal from "@/components/molecules/SuccessModal/SuccessModal";
import SuccessIcon from "../../../../_assets/successIcon.png";
import ButtonsGroup from "@/components/atoms/ButtonsGroup";
import CalenderIcon from "../../../../_assets/calander.svg";
import { MdModeEditOutline } from "react-icons/md";
import DeleteIcon from "../../../../_assets/delete.svg";
import SpeakerIcon from "../../../../_assets/speaker.svg";
import FileIcon from "../../../../_assets/file.svg";
import TableStyle from "../../../../_assets/table-style.jpg";
import InfoIcon from "../../../../_assets/infoIcon.png";
import Image from "next/image";
import ProductDetailModal from "../ProductDetailModal";
import DeleteModal from "@/components/atoms/ProductDeleteModal/DeleteModal";
import SuccessfulModal from "@/components/atoms/ProductDeleteModal/SuccessfulModal";
import AdvertiseModal from "@/components/atoms/AdvertiseProductModal/AdvertiseModal";
import AdvertiseSuccessfulModal from "@/components/atoms/AdvertiseProductModal/AdvertiseSuccessfulModal";

const PortfolioTable = ({ title }) => {
  const [open, setOpen] = useState(false);
  const [statementModal, setStatementModal] = useState(false);
  const [productDetailModal, setProductDetailModal] = useState(false);
  const [productDeleteModal, setProductDeleteModal] = useState(false);
  const [productAdvertiseModal, setProductAdvertiseModal] = useState(false);
  const [deleteSuccessfulModal, setDeleteSuccessfulModal] = useState(false);
  const [advertiseSuccessfulModal, setAdvertiseSuccessfulModal] =
    useState(false);
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

  const actionBtns = (_) => (
    <>
      <ActionBtnList>
        <li>
          <button
            type="button"
            className="btn file"
            onClick={() => setProductDetailModal(true)}
          >
            <Image src={FileIcon} alt="file" />
          </button>
        </li>
        <li>
          <button type="button" className="btn edit">
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
            onClick={() => setProductDeleteModal(true)}
          >
            <Image src={DeleteIcon} alt="delete" />
          </button>
        </li>
      </ActionBtnList>
    </>
  );

  const { product_rows, totalItems } = useMemo(() => ({
    product_rows: transactions?.map((transaction) => [
      transaction.product || "------------",
      transaction.investment_type || "------------",
      transaction.status || "------------",
      transaction.backers_limit || "------------",
      transaction.amount_raised || "------------",
      transaction.total_asset_value || "------------",
      actionBtns(transaction),
    ]),
  }));
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
      <CenterModal
        open={open}
        setOpen={setOpen}
        width="666"
        padding={"30px"}
        title="Download Statement"
      >
        <DownloadModal openNext={openStatementModal} />
      </CenterModal>

      <CenterModal
        open={statementModal}
        setOpen={setStatementModal}
        width="543"
        padding={"25px"}
        headImage={SuccessIcon}
      >
        <SuccessModal
          heading="Statement Sent Successfully!"
          paragraph={modalParagraph}
        />
      </CenterModal>
      <CenterModal
        open={productDetailModal}
        setOpen={setProductDetailModal}
        title="Gov. Egypt Property Detail"
        width="1030"
      >
        <ProductDetailModal />
      </CenterModal>
      <CenterModal
        open={productDeleteModal}
        setOpen={setProductDeleteModal}
        title={<Image src={InfoIcon} alt="InfoIcon" />}
        width="543"
      >
        <DeleteModal
          closeDeleteModal={closeDeleteModal}
          openSuccessfulModal={() => {
            setProductDeleteModal(false), setDeleteSuccessfulModal(true);
          }}
        />
      </CenterModal>
      <CenterModal
        open={deleteSuccessfulModal}
        setOpen={setDeleteSuccessfulModal}
        title={<Image src={SuccessIcon} alt="SuccessIcon" />}
        width="543"
      >
        <SuccessfulModal />
      </CenterModal>

      <CenterModal
        open={productAdvertiseModal}
        setOpen={setProductAdvertiseModal}
        title="Advertise Product"
        width="667"
      >
        <AdvertiseModal handleAdvertiseModal={handleAdvertiseModal} />
      </CenterModal>
      <CenterModal
        open={advertiseSuccessfulModal}
        setOpen={setAdvertiseSuccessfulModal}
        title={<Image src={SuccessIcon} alt="SuccessIcon" />}
        width="543"
      >
        <AdvertiseSuccessfulModal />
      </CenterModal>

      <TableContainer>
        <Image src={TableStyle} className="tableStyle" />
        <TableLayout
          tableHeading={<ButtonsGroup title={title} />}
          placeholder="Search Product"
          btnWidth={"40px"}
          btnType="download"
          iconImg={CalenderIcon}
          openModal={openModal}
        >
          <Table
            width={1024}
            rowsData={product_rows}
            // loading={admins_loading}
            columnNames={columnNamess}
            noPadding
          />
        </TableLayout>
      </TableContainer>
    </>
  );
};

export default PortfolioTable;
