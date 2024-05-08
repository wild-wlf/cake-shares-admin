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
import { ModalText } from "@/components/atoms/RolesTable/RolesTable.style";
import CenterModal from "@/components/molecules/Modal/CenterModal";
import UpdatePasswordModal from "../UpdatePasswordModal";
import CreateUserModal from "../CreateUserModal";
import EditUserModal from "../EditUserModal";
import DeleteUserModal from "../DeleteUserModal";
import InfoIcon from "../../../../_assets/infoIcon.png";
import successIcon from "../../../../_assets/successIcon.png";

const UsersTable = () => {
  const [openPassword, setOpenPassword] = useState(false);
  const [openCreateUser, setOpenCreateUser] = useState(false);
  const [openEditUser, setOpenEditUser] = useState(false);
  const [openDeleteUser, setOpenDeleteUser] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

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
            onClick={() => {
              setOpenEditUser(true);
            }}
          >
            <MdModeEditOutline color="rgba(64, 143, 140, 1)" size={16} />
          </button>
        </li>
        <li>
          <button
            type="button"
            className="btn file"
            onClick={() => {
              setOpenPassword(true);
            }}
          >
            <Image src={PasswordImg} alt="Password Img" />
          </button>
        </li>

        <li>
          <button
            type="button"
            className="btn delete"
            onClick={() => {
              setOpenDeleteUser(true);
            }}
          >
            <Image src={DeleteIcon} alt="delete" />
          </button>
        </li>
      </ActionBtnList>
    </>
  );

  const { product_rows, totalItems } = useMemo(() => ({
    product_rows: transactions?.map((user, ind) => [
      user.created_at || "------------",
      <div className="table-img-holder" key={ind}>
        <div className="img-holder">
          <Image src={user.userImage} alt="userImage" />
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
      <CenterModal
        open={openSuccessModal}
        setOpen={setOpenSuccessModal}
        headImage={successIcon}
        width="543"
      >
        <ModalText>User Deleted Successfully!</ModalText>
      </CenterModal>

      <CenterModal
        open={openDeleteUser}
        setOpen={setOpenDeleteUser}
        headImage={InfoIcon}
        width="543"
      >
        <DeleteUserModal
          closeDeleteModal={() => {
            setOpenDeleteUser(false);
          }}
          openSuccessfulModal={() => {
            setOpenDeleteUser(false);
            setOpenSuccessModal(true);
          }}
        />
      </CenterModal>

      <CenterModal
        open={openEditUser}
        setOpen={setOpenEditUser}
        title={"Edit User"}
        width="666"
      >
        <EditUserModal />
      </CenterModal>

      <CenterModal
        open={openCreateUser}
        setOpen={setOpenCreateUser}
        title={"Create User"}
        width="666"
      >
        <CreateUserModal />
      </CenterModal>

      <CenterModal
        open={openPassword}
        setOpen={setOpenPassword}
        title={"Update Password"}
        width="666"
      >
        <UpdatePasswordModal />
      </CenterModal>

      <TableContainer>
        <Image src={TableStyle} className="tableStyle" alt="tableStyle" />
        <TableLayout
          tableHeading=" "
          btnType="blue"
          btnText="+ Create User"
          btnWidth="162px"
          placeholder="Search User"
          openModal={() => {
            setOpenCreateUser(true);
          }}
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

export default UsersTable;
