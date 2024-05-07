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
import { TableContainer } from "./PermissionsTable.style";
import DeletePermissionModal from "./DeletePermissionModal";

const PermissionTable = ({ title }) => {
  const [deleteModal, setDeleteModal] = useState(false);

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

  const actionBtns = (_) => (
    <>
      <ActionBtnList>
        <li>
          <button type="button" className="btn edit">
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
  const columnNamess = [`Created at`, `Can Do`, `Description`, "Actions"];
  return (
    <>
      <CenterModal
        open={deleteModal}
        setOpen={setDeleteModal}
        title={<Image src={InfoIcon} alt="InfoIcon" />}
        width="543"
      >
        <DeletePermissionModal
          closeDeleteModal={() => {
            setDeleteModal(false);
          }}
          // openSuccessfulModal={() => {
          //   setProductDeleteModal(false), setDeleteSuccessfulModal(true);
          // }}
        />
      </CenterModal>
      {/* <CenterModal
        open={deleteSuccessfulModal}
        setOpen={setDeleteSuccessfulModal}
        title={<Image src={SuccessIcon} alt="SuccessIcon" />}
        width="543"
      >
        <SuccessfulModal />
      </CenterModal> */}

      <TableContainer>
        <Image src={TableStyle} className="tableStyle" />
        <TableLayout
          tableHeading={" "}
          placeholder="Search Permission"
          btnType="blue"
          btnText="+ Create Permission"
          btnWidth="162px"
          // openModal={openModal}
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

export default PermissionTable;
