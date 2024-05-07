import React, { useMemo, useState } from "react";
import { ActionBtnList } from "@/components/atoms/ActionBtns/ActionBtns.styles";
import Table from "@/components/molecules/Table";
import TableLayout from "@/components/atoms/TableLayout";
import { MdModeEditOutline } from "react-icons/md";
import DeleteIcon from "../../../../_assets/delete.svg";
import TableStyle from "../../../../_assets/table-style.jpg";
import UserImg from "../../../../_assets/table-user-img.png";
import PasswordImg from "../../../../_assets/table-password-icon.png";
import Image from "next/image";
import { TableContainer } from "../../Portfolio/PortfolioTable/PorfolioTable.style";

const UsersTable = () => {
  const transactions = [
    {
      created_at: "27/04/2024",
      userImage: UserImg,
      username: "Alex Mertiz",
      email: "stevek@gmail.com",
      roles: "BDM",
    },
    {
      created_at: "27/04/2024",
      userImage: UserImg,
      username: "Alex Mertiz",
      email: "stevek@gmail.com",
      roles: "BDM",
    },
    {
      created_at: "27/04/2024",
      userImage: UserImg,
      username: "Alex Mertiz",
      email: "stevek@gmail.com",
      roles: "BDM",
    },
    {
      created_at: "27/04/2024",
      userImage: UserImg,
      username: "Alex Mertiz",
      email: "stevek@gmail.com",
      roles: "BDM",
    },
    {
      created_at: "27/04/2024",
      userImage: UserImg,
      username: "Alex Mertiz",
      email: "stevek@gmail.com",
      roles: "BDM",
    },
    {
      created_at: "27/04/2024",
      userImage: UserImg,
      username: "Alex Mertiz",
      email: "stevek@gmail.com",
      roles: "BDM",
    },
    {
      created_at: "27/04/2024",
      userImage: UserImg,
      username: "Alex Mertiz",
      email: "stevek@gmail.com",
      roles: "BDM",
    },
    {
      created_at: "27/04/2024",
      userImage: UserImg,
      username: "Alex Mertiz",
      email: "stevek@gmail.com",
      roles: "BDM",
    },
    {
      created_at: "27/04/2024",
      userImage: UserImg,
      username: "Alex Mertiz",
      email: "stevek@gmail.com",
      roles: "BDM",
    },
  ];

  const actionBtns = (_) => (
    <>
      <ActionBtnList>
        <li>
          <button
            type="button"
            className="btn edit"
            onClick={() => setEditProductModal(true)}>
            <MdModeEditOutline color="rgba(64, 143, 140, 1)" size={16} />
          </button>
        </li>
        <li>
          <button type="button" className="btn file">
            <Image src={PasswordImg} alt="PasswordImg" height={18} width={18} />
          </button>
        </li>

        <li>
          <button type="button" className="btn delete">
            <Image src={DeleteIcon} alt="delete" />
          </button>
        </li>
      </ActionBtnList>
    </>
  );

  const { product_rows, totalItems } = useMemo(() => ({
    product_rows: transactions?.map((user) => [
      user.created_at || "------------",
      <div className="table-img-holder">
        <div className="img-holder">
          <Image src={user.userImage} />
        </div>
        {user.username || "------------"}
      </div>,
      user.email || "------------",
      user.roles || "------------",
      actionBtns(user),
    ]),
  }));
  const columnNamess = [`Created at`, `Username`, `Email`, "Roles", "Actions"];
  return (
    <>
      <TableContainer>
        <Image src={TableStyle} className="tableStyle" />
        <TableLayout
          tableHeading=" "
          btnType="blue"
          btnText="+ Create User"
          btnWidth="162px"
          placeholder="Search User">
          <Table
            width={1024}
            rowsData={product_rows}
            columnNames={columnNamess}
            noPadding
          />
        </TableLayout>
      </TableContainer>
    </>
  );
};

export default UsersTable;
