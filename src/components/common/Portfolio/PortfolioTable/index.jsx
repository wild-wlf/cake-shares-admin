import React, { useEffect, useMemo, useState } from 'react';
import { ActionBtnList } from '@/components/atoms/ActionBtns/ActionBtns.styles';
import Table from '@/components/molecules/Table';
import TableLayout from '@/components/atoms/TableLayout';
import { TableContainer } from './PorfolioTable.style';
import CenterModal from '@/components/molecules/Modal/CenterModal';
import DownloadModal from '@/components/molecules/DownloadStatmentModal/DownloadModal';
import SuccessModal from '@/components/molecules/SuccessModal/SuccessModal';
import SuccessIcon from '../../../../_assets/successIcon.png';
import ButtonsGroup from '@/components/atoms/ButtonsGroup';
import CalenderIcon from '../../../../_assets/calander.svg';
import { MdModeEditOutline } from 'react-icons/md';
import DeleteIcon from '../../../../_assets/delete.svg';
import SpeakerIcon from '../../../../_assets/speaker.svg';
import FileIcon from '../../../../_assets/file.svg';
import TableStyle from '../../../../_assets/table-style.jpg';

import EditProductModal from '../EditProductModal';
import InfoIcon from '../../../../_assets/infoIcon.png';
import Image from 'next/image';
import ProductDetailModal from '../ProductDetailModal';
import DeleteModal from '@/components/atoms/ProductDeleteModal/DeleteModal';
import SuccessfulModal from '@/components/atoms/ProductDeleteModal/SuccessfulModal';
import AdvertiseModal from '@/components/atoms/AdvertiseProductModal/AdvertiseModal';
import AdvertiseSuccessfulModal from '@/components/atoms/AdvertiseProductModal/AdvertiseSuccessfulModal';
import SelectRangeModal from '@/components/atoms/SelectRangeModal';
import productService from '@/services/productService';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import { format } from 'date-fns';

const PortfolioTable = ({ title }) => {
  const { fetch, refetch } = useContextHook(AuthContext, v => ({
    fetch: v.fetch,
    refetch: v.refetch,
  }));
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    itemsPerPage: 10,
    searchText: '',
    type: 'all',
    startDate: '',
    endDate: '',
  });
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { products_data, products_loading } = productService.GetAllProducts(searchQuery, fetch);
  const [open, setOpen] = useState(false);
  const [statementModal, setStatementModal] = useState(false);
  const [selecteData, setSelecteData] = useState();
  const [productDetailModal, setProductDetailModal] = useState(false);
  const [editProductModal, setEditProductModal] = useState(false);
  const [productDeleteModal, setProductDeleteModal] = useState(false);
  const [productAdvertiseModal, setProductAdvertiseModal] = useState(false);
  const [deleteSuccessfulModal, setDeleteSuccessfulModal] = useState(false);
  const [advertiseSuccessfulModal, setAdvertiseSuccessfulModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();
  const [advertisedDays, setAdvertisedDays] = useState();

  const modalParagraph =
    "Your account statement is now available at alex123@gmail.com. Be sure to check your spam folder if you don't see it right away.";
  const openModal = () => {
    setOpen(true);
  };

  const closeDeleteModal = () => {
    setProductDeleteModal(false);
  };
  const handleAdvertiseModal = () => {
    setProductAdvertiseModal(false);
    setAdvertiseSuccessfulModal(true);
  };
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
          <button disabled={_?.isAdvertised} type="button" className="btn speaker">
            <Image
              src={SpeakerIcon}
              alt="advertise"
              onClick={() => {
                setSelectedProduct(_);
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
  const { product_rows, totalItems } = useMemo(() => {
    const items = products_data.items || [];
    return {
      product_rows: items.map(data => [
        data.productName || '------------',
        data.investmentType?.name || '------------',
        data.isVerified ? 'Approve' : 'Pending' || '------------',
        data.maximumBackers || '------------',
        data.minimumInvestment || '------------',
        data.assetValue || '------------',
        actionBtns(data),
      ]),
      totalItems: items.length,
    };
  }, [products_data]);
  const columnNamess = [
    `Product`,
    `Investment type`,
    `Status`,
    'Backers Limit',
    'Amount Raised',
    'Total Asset Value',
    'Actions',
  ];
  return (
    <>
      <CenterModal open={open} setOpen={setOpen} width="666" padding={'30px'} title="Select Range">
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
                startDate: format(new Date(startDate), 'yyyy-MM-dd'),
                endDate: format(new Date(endDate), 'yyyy-MM-dd'),
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
                startDate: '',
                endDate: '',
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
        padding={'25px'}
        headImage={SuccessIcon}>
        <SuccessModal heading="Statement Sent Successfully!" paragraph={modalParagraph} />
      </CenterModal>
      <CenterModal
        open={productDetailModal}
        setOpen={setProductDetailModal}
        title={`${selecteData?.productName} Property Detail`}
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
        <SuccessfulModal title={'Product Deleted Successfully!'} />
      </CenterModal>

      <CenterModal
        open={productAdvertiseModal}
        setOpen={setProductAdvertiseModal}
        title="Advertise Product"
        width="667">
        <AdvertiseModal
          handleAdvertiseModal={handleAdvertiseModal}
          setProductAdvertiseModal={setProductAdvertiseModal}
          product={selectedProduct}
          setAdvertisedDays={setAdvertisedDays}
        />
      </CenterModal>
      <CenterModal
        open={advertiseSuccessfulModal}
        setOpen={setAdvertiseSuccessfulModal}
        title={<Image src={SuccessIcon} alt="SuccessIcon" />}
        width="543">
        <AdvertiseSuccessfulModal advertisedDays={advertisedDays} />
      </CenterModal>

      <TableContainer>
        <Image src={TableStyle} draggable="false" className="tableStyle" alt="tableStyle" />
        <TableLayout
          onChangeFilters={e => {
            setSearchQuery(prev => ({ ...prev, searchText: e }));
          }}
          tableHeading={<ButtonsGroup title={title} setSearchQuery={setSearchQuery} />}
          placeholder="Search Product"
          btnWidth={'40px'}
          btnType="download"
          iconImg={CalenderIcon}
          openModal={openModal}>
          <Table width={1024} rowsData={product_rows} loading={products_loading} columnNames={columnNamess} noPadding />
        </TableLayout>
      </TableContainer>
    </>
  );
};

export default PortfolioTable;
