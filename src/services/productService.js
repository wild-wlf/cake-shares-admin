import { useEffect, useState } from 'react';
import { Fetch } from '../helpers/fetchWrapper';
import { useCancellablePromise } from '@/helpers/promiseHandler';
const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};
const productService = {
  _url: `${process.env.NEXT_PUBLIC_PRODUCT_URL}`,

  async addProduct(payload) {
    let res = await Fetch.upload(`${this._url}/create-product`, 'POST', payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something Went Wrong');
  },
  GetAllProducts(searchQuery, fetch) {
    const [products, setProducts] = useState({
      products: [],
      totalItems: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [productStatus, setProductStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setProductStatus(STATUS.LOADING);
      cancellablePromise(this.getAllProducts(searchQuery))
        .then(res => {
          setProducts(() => res);
          setProductStatus(STATUS.SUCCESS);
        })
        .catch(() => setProductStatus(STATUS.ERROR));
    }, [searchQuery, fetch]);
    return {
      products_loading: productStatus === STATUS.LOADING,
      products_error: productStatus === STATUS.ERROR,
      products_data: products,
    };
  },

  GetFinancialInfo(fetch) {
    const [financialInfo, setFinancialInfo] = useState();
    const [productStatus, setProductStatus] = useState(STATUS.LOADING);
    const { cancellablePromise } = useCancellablePromise();
    useEffect(() => {
      setProductStatus(STATUS.LOADING);
      cancellablePromise(this.getFinancialInfo())
        .then(res => {
          setFinancialInfo(() => res);
          setProductStatus(STATUS.SUCCESS);
        })
        .catch(() => setProductStatus(STATUS.ERROR));
    }, [fetch]);
    return {
      data_loading: productStatus === STATUS.LOADING,
      data_error: productStatus === STATUS.ERROR,
      financial_data: financialInfo,
    };
  },

  GetBestSellingSellerProducts(fetch) {
    const [bestSellingSellerProd, setBestSellingSellerProd] = useState();
    const [bestSellingSellerProdStatus, setbestSellingSellerProdStatus] = useState(STATUS.LOADING);
    const { cancellablePromise } = useCancellablePromise();
    useEffect(() => {
      setbestSellingSellerProdStatus(STATUS.LOADING);
      cancellablePromise(this.getBestSellingSellerProducts())
        .then(res => {
          setBestSellingSellerProd(() => res);
          setbestSellingSellerProdStatus(STATUS.SUCCESS);
        })
        .catch(() => setbestSellingSellerProdStatus(STATUS.ERROR));
    }, [fetch]);
    return {
      data_loading: bestSellingSellerProdStatus === STATUS.LOADING,
      data_error: bestSellingSellerProdStatus === STATUS.ERROR,
      best_selling_seller_prod_data: bestSellingSellerProd,
    };
  },

  async getAllProducts({
    page = 1,
    itemsPerPage = 10,
    searchText = '',
    getAll = false,
    type = '',
    kyc = '',
    startDate = '',
    endDate = '',
  }) {
    let res = await Fetch.get(
      `${this._url}/get-all-products?page=${page}&itemsPerPage=${itemsPerPage}&searchText=${searchText}&getAll=${getAll}&type=${type}&kyc=${kyc}&startDate=${startDate}&endDate=${endDate}`,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something Went Wrong');
  },
  async getFinancialInfo() {
    let res = await Fetch.get(`${this._url}/get-ongoing-products`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something Went Wrong');
  },

  async getBestSellingSellerProducts() {
    let res = await Fetch.get(`${this._url}/best-selling-seller-product`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        bestSellingProducts: res?.data,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something Went Wrong');
  },

  async updateProduct(id, payload) {
    let res = await Fetch.upload(`${this._url}/update-product/${id}`, 'PUT', payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something Went Wrong');
  },

  async deleteProduct(id) {
    let res = await Fetch.delete(`${this._url}/delete-product/${id}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something Went Wrong');
  },

  async advertiseProduct(payload) {
    let res = await Fetch.post(`${this._url}/advertise-product`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something Went Wrong');
  },

  async downloadStatement(payload) {
    let res = await Fetch.post(`${this._url}/download-statement`, payload);

    const blob = await res.blob();
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Statement.xlsx');
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  },
};

export default productService;
