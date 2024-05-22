import React, { useMemo, useState } from "react";
import { ActionBtnList } from "@/components/atoms/ActionBtns/ActionBtns.styles";
import Table from "@/components/molecules/Table";
import TableLayout from "@/components/atoms/TableLayout";
import { TableContainer } from "./TableStyles";
import downloadIcon from "../../../_assets/statement.png";
import CenterModal from "@/components/molecules/Modal/CenterModal";
import DownloadModal from "@/components/molecules/DownloadStatmentModal/DownloadModal";
import SuccessModal from "@/components/molecules/SuccessModal/SuccessModal";
import SuccessIcon from "../../../_assets/successIcon.png";

const TransactionTable = () => {
  const [open, setOpen] = useState(false);
  const [statementModal, setStatementModal] = useState(false);
  const modalParagraph =
    "Your account statement is now available at alex123@gmail.com. Be sure to check your spam folder if you don't see it right away.";
  const openModal = () => {
    setOpen(true);
  };
  const openStatementModal = () => {
    setStatementModal(true);
    setOpen(false);
  };
  const transactions = [
    {
      name: "name",
      phone: "2301652065",
      email: "shjdgf@.com",
      date: "24-May-2024",
    },
    {
      name: "name",
      phone: "2301652065",
      email: "shjdgf@.com",
      date: "24-May-2024",
    },
    {
      name: "name",
      phone: "2301652065",
      email: "shjdgf@.com",
      date: "24-May-2024",
    },
    {
      name: "name",
      phone: "2301652065",
      email: "shjdgf@.com",
      date: "",
    },
    {
      name: "name",
      phone: "2301652065",
      email: "shjdgf@.com",
      date: "24-May-2024",
    },
    {
      name: "name",
      phone: "2301652065",
      email: "shjdgf@.com",
      date: "24-May-2024",
    },
  ];

  const { product_rows, totalItems } = useMemo(() => ({
    product_rows: transactions?.map((transaction) => [
      transaction.name || "------------",
      transaction.phone || "------------",
      transaction.email || "------------",
      transaction.email || "------------",
      transaction.phone || "------------",
      transaction.date || "------------",
    ]),
  }));
  const columnNamess = [
    `Created at`,
    `Roles`,
    `Email`,
    "Action",
    "Amout",
    "Date",
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

      <TableContainer>
        <TableLayout
          tableHeading="Transaction History"
          placeholder="Search history"
          btnText="Download Statement"
          btnType="download"
          btnImg={downloadIcon}
          filterBlock
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

export default TransactionTable;
