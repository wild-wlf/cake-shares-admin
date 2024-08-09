import React, { useMemo, useState } from "react";
import { ActionBtnList } from "@/components/atoms/ActionBtns/ActionBtns.styles";
import Table from "@/components/molecules/Table";
import TableLayout from "@/components/atoms/TableLayout";
import CenterModal from "@/components/molecules/Modal/CenterModal";
import DownloadModal from "@/components/molecules/DownloadStatmentModal/DownloadModal";
import SuccessModal from "@/components/molecules/SuccessModal/SuccessModal";
import SuccessIcon from "../../../_assets/successIcon.png";
import ButtonsGroup from "@/components/atoms/ButtonsGroup";
import CalenderIcon from "../../../_assets/calander.svg";
import { MdModeEditOutline } from "react-icons/md";
import DeleteIcon from "../../../_assets/delete.svg";
import SpeakerIcon from "../../../_assets/speaker.svg";
import FileIcon from "../../../_assets/file.svg";
import TableStyle from "../../../_assets/table-style.jpg";
import InfoIcon from "../../../_assets/infoIcon.png";
import Image from "next/image";
import { TableContainer, ModalText } from "./RolesTable.style";
import DeletePermissionModal from "./DeletePermissionModal";
import EditRolesModal from "./EditRolesModal";
import CreateRolesModal from "./CreateRolesModal";
import successIcon from "../../../_assets/successIcon.png";
import Switch from "@/components/molecules/Switch";
import DataTabs from "@/components/molecules/DataTabs";
import PermissionHead from "../PremissionsHead";
import { set } from "date-fns";

const RolesTable = ({ title }) => {
  const data = [
    {
      label: "Dashboard",
      content: (
        <>
          <PermissionHead lable={"dashboard.nav"} />
        </>
      ),
    },
    {
      label: "portfolio",
      content: "portfolio",
    },
    {
      label: "Private Chat",
      content: "Private Chat",
    },
    {
      label: "Investor's Chat",
      content: (
        <>
          <Switch onChange={(e) => console.log(e)} label="Select All" />
        </>
      ),
    },
    {
      label: "Permissions",
      content: "Permissions",
    },
    {
      label: "Roles",
      content: "Roles",
    },
  ];
  const [deleteModal, setDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openCreateRole, setOpenCreateRole] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [openPermissionModal, setOpenPermissionModal] = useState(false);

  const openPermission = () => {
    setOpenCreateRole(false);
    setOpenPermissionModal(true);
  };

  const permissions = [
    {
      created_at: "27/04/2024",
      can_do: "permission.delete",
      desc: "can delete permission",
    },
    {
      created_at: "27/04/2024",
      can_do: "permission.delete",
      desc: "can delete permission",
    },
    {
      created_at: "27/04/2024",
      can_do: "permission.delete",
      desc: "can delete permission",
    },
    {
      created_at: "27/04/2024",
      can_do: "permission.delete",
      desc: "can delete permission",
    },
    {
      created_at: "27/04/2024",
      can_do: "permission.delete",
      desc: "can delete permission",
    },
    {
      created_at: "27/04/2024",
      can_do: "permission.delete",
      desc: "can delete permission",
    },
  ];

  const openRoleModal = () => {
    setOpenCreateRole(true);
  };

  const actionBtns = (_) => (
    <>
      <ActionBtnList>
        <li>
          <button
            type="button"
            className="btn edit"
            onClick={() => {
              setOpenEditModal(true);
            }}
          >
            <MdModeEditOutline color="rgba(64, 143, 140, 1)" size={16} />
          </button>
        </li>
        <li>
          <button
            type="button"
            className="btn delete"
            onClick={() => setDeleteModal(true)}
          >
            <Image src={DeleteIcon} alt="delete" />
          </button>
        </li>
      </ActionBtnList>
    </>
  );

  const { product_rows, totalItems } = useMemo(() => ({
    product_rows: permissions?.map((permission) => [
      permission.created_at || "------------",
      permission.can_do || "------------",
      permission.desc || "------------",
      actionBtns(permission),
    ]),
  }));
  const columnNamess = [`Created at`, `Type`, `Description`, "Actions"];
  return (
    <>
      <CenterModal
        open={deleteModal}
        setOpen={setDeleteModal}
        headImage={InfoIcon}
        width="543"
      >
        <DeletePermissionModal
          closeDeleteModal={() => {
            setDeleteModal(false);
          }}
          openSuccessfulModal={() => {
            setDeleteModal(false);
            setOpenSuccessModal(true);
          }}
        />
      </CenterModal>
      <CenterModal
        open={openSuccessModal}
        setOpen={setOpenSuccessModal}
        headImage={successIcon}
        width="543"
      >
        <ModalText>Role Deleted Successfully!</ModalText>
      </CenterModal>
      <CenterModal
        open={openEditModal}
        setOpen={setOpenEditModal}
        title={"Edit Role"}
        width="666"
      >
        <EditRolesModal
          openPermission={() => {
            setOpenEditModal(false);
            setOpenPermissionModal(true);
          }}
        />
      </CenterModal>
      <CenterModal
        open={openCreateRole}
        setOpen={setOpenCreateRole}
        title={"Create Role"}
        width="666"
      >
        <CreateRolesModal openPermission={openPermission} />
      </CenterModal>
      <CenterModal
        open={openPermissionModal}
        setOpen={setOpenPermissionModal}
        width="955"
        title="Customize Permissions"
      >
        <DataTabs data={data} />
      </CenterModal>

      <TableContainer>
        <Image src={TableStyle} className="tableStyle" alt="tableStyle" />
        <TableLayout
          tableHeading={" "}
          placeholder="Search Roles"
          btnType="blue"
          btnText="+ Create Role"
          btnWidth="162px"
          openModal={openRoleModal}
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

export default RolesTable;
