import React, { useMemo, useState } from 'react';
import { ActionBtnList } from '@/components/atoms/ActionBtns/ActionBtns.styles';
import Table from '@/components/molecules/Table';
import TableLayout from '@/components/atoms/TableLayout';
import { TableContainer } from './PorfolioTable.style';
import CenterModal from '@/components/molecules/Modal/CenterModal';
import SuccessModal from '@/components/molecules/SuccessModal/SuccessModal';
import SuccessIcon from '../../../../_assets/successIcon.png';
import ButtonsGroup from '@/components/atoms/ButtonsGroup';
import CalenderIcon from '../../../../_assets/calander.svg';
import { MdModeEditOutline } from 'react-icons/md';
import DeleteIcon from '../../../../_assets/delete.svg';
import DeleteDisabledIcon from '../../../../_assets/delete-disabled.svg';
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
import { convertToCurrencyFormat, formatNumber, getStatus } from '@/helpers/common';

const PortfolioTable = ({ title }) => {
  const { fetch, refetch, user } = useContextHook(AuthContext, v => ({
    fetch: v.fetch,
    refetch: v.refetch,
    user: v.user,
  }));

  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    itemsPerPage: 10,
    searchText: '',
    type: 'all',
    startDate: '',
    status: 'all',
    endDate: '',
  });

  const { products_data, products_loading } = productService.GetAllProducts(searchQuery, fetch);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
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
    setProductDetailModal?.(false);
  };
  async function handelDeleteProduct() {
    await productService.deleteProduct(selecteData);
    refetch();
    setProductDeleteModal(false);
    setDeleteSuccessfulModal(true);
  }

  const actionBtns = (_, user) => (
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
            disabled={_?.valueRaised > 0 || _?.isProductRequest}
            className="btn edit"
            onClick={() => {
              setEditProductModal(true);
              setSelecteData(_);
            }}>
            <MdModeEditOutline color="rgba(64, 143, 140, 1)" size={16} />
          </button>
        </li>
        <li>
          <button
            // disabled={ _?.isAdvertised === true || _?.isVerified !== true}
            disabled={
              parseFloat(user?.wallet) <= 0 ||
              _?.isAdvertised === true ||
              _?.isVerified !== true ||
              _?.valueRaised === _?.assetValue
            }
            type="button"
            className="btn speaker"
            onClick={() => {
              setSelectedProduct(_);
              setProductAdvertiseModal(true);
            }}>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.8533 8.06582V12.1499C14.8521 12.3184 14.7879 12.4804 14.6733 12.6039C14.5587 12.7275 14.4021 12.8037 14.2342 12.8177C14.0663 12.8317 13.8992 12.7823 13.7658 12.6794C13.6324 12.5764 13.5424 12.4273 13.5133 12.2613C13.2507 10.6864 11.0696 10.1248 9.11596 10.1248H6.07819V2.69908H9.11596C11.0696 2.69908 13.2507 2.1381 13.5133 0.562506C13.5415 0.395714 13.6313 0.24559 13.7649 0.14185C13.8986 0.038109 14.0662 -0.0116867 14.2348 0.00231914C14.4034 0.0163249 14.5606 0.0931114 14.6752 0.217479C14.7899 0.341847 14.8537 0.504732 14.854 0.673891V4.75802C15.2355 4.83548 15.5785 5.04246 15.8249 5.34388C16.0712 5.6453 16.2058 6.02262 16.2058 6.41192C16.2058 6.80121 16.0712 7.17853 15.8249 7.47995C15.5785 7.78137 15.2348 7.98835 14.8533 8.06582ZM4.72739 10.1248V2.69908H3.71479C1.66733 2.69908 0.00195312 4.36445 0.00195312 6.41192C0.00195312 8.45938 1.66733 10.1248 3.71479 10.1248H4.72739ZM5.75551 11.4749H3.71479C3.13862 11.4754 2.56663 11.377 2.02376 11.1839L3.48932 15.0939C3.56451 15.3016 3.68013 15.4924 3.82948 15.6552C3.97884 15.818 4.15897 15.9496 4.35948 16.0424C4.5596 16.1359 4.77624 16.189 4.99695 16.1985C5.21765 16.208 5.43805 16.1737 5.64547 16.0977C5.85321 16.0225 6.04399 15.9069 6.20678 15.7575C6.36958 15.6082 6.50116 15.4281 6.59393 15.2276C6.78363 14.8198 6.8032 14.3635 6.64929 13.9422L5.75483 11.4742L5.75551 11.4749Z"
                fill={
                  parseFloat(user.wallet) <= 0 || _?.isAdvertised || !_?.isVerified || _?.valueRaised === _?.assetValue
                    ? 'grey'
                    : '#419400'
                }
              />
            </svg>
          </button>
        </li>

        <li>
          <button
            disabled={_?.isAdvertised || _?.valueRaised === _?.assetValue}
            type="button"
            className="btn delete"
            onClick={() => {
              setProductDeleteModal(true);
              setSelecteData(_?._id);
            }}>
            <Image src={_?.isAdvertised ? DeleteDisabledIcon : DeleteIcon} alt="delete" />
          </button>
        </li>
      </ActionBtnList>
    </>
  );

  const { product_rows, totalCount } = useMemo(() => {
    const items = products_data.items || [];
    return {
      product_rows: items.map(data => [
        data.productName || '------------',
        data.investmentType?.name || '------------',
        getStatus(data),
        data?.isProductRequest == true ? 'Requested' : '-----------',
        formatNumber(data.maximumBackers) ?? 0 ?? '------------',
        data?.isInfiniteBackers ? 'Infinite' : formatNumber(data.maximumBackers) ?? 0 ?? '------------',
        `${convertToCurrencyFormat(data.minimumInvestment)}` ?? 0 ?? '------------',
        `${convertToCurrencyFormat(data.valueRaised)}` ?? 0 ?? '------------',
        `${convertToCurrencyFormat(data.assetValue)}` ?? 0 ?? '------------',
        actionBtns(data, user),
      ]),
      totalCount: products_data.totalItems,
    };
  }, [products_data, user]);
  const columnNamess = [
    `Product`,
    `Investment type`,
    `Status`,
    `Edit Status`,
    'Backers Limit',
    'Minimum Investment',
    'Value Raised',
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
        title={`${selecteData?.productName} Detail`}
        width="1030">
        <ProductDetailModal
          data={selecteData}
          setSelectedProduct={setSelectedProduct}
          setProductAdvertiseModal={setProductAdvertiseModal}
        />
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
          setProductDetailModal={setProductDetailModal}
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
          // onChangeFilters={e => {
          //   setSearchQuery(prev => ({ ...prev, searchText: e }));
          // }}
          onChangeFilters={filters => {
            setSearchQuery(_ => ({
              ..._,
              // searchText: filters,
              ...filters,
            }));
          }}
          currentPage={searchQuery.page}
          totalCount={totalCount}
          pageSize={searchQuery.itemsPerPage}
          tableHeading={<ButtonsGroup title={title} setSearchQuery={setSearchQuery} />}
          statusFilter={false}
          placeholder="Search Product"
          btnWidth={'40px'}
          btnType="download"
          iconImg={CalenderIcon}
          searchQuery={searchQuery}
          openModal={openModal}>
          <Table width={1024} rowsData={product_rows} loading={products_loading} columnNames={columnNamess} noPadding />
        </TableLayout>
      </TableContainer>
    </>
  );
};

export default PortfolioTable;
