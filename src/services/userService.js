import { Fetch } from '../helpers/fetchWrapper';
import { useEffect, useState } from 'react';
import { useCancellablePromise } from '@/helpers/promiseHandler';

const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const userService = {
  _url: `${process.env.NEXT_PUBLIC_USER_URL}`,

  async login({ username = '', password = '', type = '', sellerType }) {
    let res = await Fetch.post(`${this._url}/login`, {
      username,
      password,
      type,
      sellerType,
    });
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async update(payload, id) {
    let res = await Fetch.put(`${this._url}/update-chunk-info/${id}`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async updateKyc(payload) {
    let res = await Fetch.post(`${this._url}/request-kyc`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async uploadMedia(payload, id) {
    let res = await Fetch.upload(`${this._url}/update-chunk-info/${id}`, 'PUT', payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async addInheritance(payload) {
    let res = await Fetch.put(`${this._url}/update-chunk-info`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async deleteInheritance(id) {
    let res = await Fetch.delete(`${this._url}/delete-inhertance/${id}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  // register
  async createUser(payload) {
    let res = await Fetch.upload(`${this._url}/registeration`, 'POST', payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  // update password

  async updatePassword(payload, id) {
    let res = await Fetch.patch(`${this._url}/update-password/${id}`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async getCurrentAdmin() {
    let res = await Fetch.get(`${this._url}/me`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async logout() {
    let res = await Fetch.delete(`${this._url}/logout`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  GetAllTransactions(searchQuery, fetch) {
    const [transactions, setTransactions] = useState({
      transactions: [],
      totalItems: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [transactionStatus, setTransactionStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setTransactionStatus(STATUS.LOADING);
      cancellablePromise(this.getAllTransactions(searchQuery))
        .then(res => {
          setTransactions(() => res);
          setTransactionStatus(STATUS.SUCCESS);
        })
        .catch(() => setTransactionStatus(STATUS.ERROR));
    }, [searchQuery, fetch]);
    return {
      transactions_loading: transactionStatus === STATUS.LOADING,
      transactions_error: transactionStatus === STATUS.ERROR,
      transactions_data: transactions,
    };
  },

  async getAllTransactions({
    page = 1,
    itemsPerPage = 10,
    status = '',
    searchText = '',
    type = '',
    startDate = '',
    endDate = '',
  }) {
    let res = await Fetch.get(
      `${this._url}/get-all-transactions?page=${page}&itemsPerPage=${itemsPerPage}&searchText=${searchText}&type=${type}&startDate=${startDate}&endDate=${endDate}`,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        transactions: res.items,
        totalItems: res.totalItems,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something Went Wrong');
  },

  GetAllProducts(fetch) {
    const [walletDetails, setWalletDetails] = useState();
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getWalletDetails())
        .then(res => {
          setWalletDetails(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, [fetch]);
    return {
      walletDetails_loading: productStatus === STATUS.LOADING,
      walletDetails_error: productStatus === STATUS.ERROR,
      walletDetails_data: walletDetails,
    };
  },

  async getWalletDetails() {
    let res = await Fetch.get(`${this._url}/get-wallet-details`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        walletDetails: res,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  GetWalletDetails() {
    const [wallet, setWallet] = useState();
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getWalletDetails())
        .then(res => {
          setWallet(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, []);
    return {
      wallet_loading: status === STATUS.LOADING,
      wallet_error: status === STATUS.ERROR ? status : '',
      wallet_Details: wallet,
    };
  },

  async getWalletDetails() {
    let res = await Fetch.get(`${this._url}/get-wallet-details`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        wallet: res,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
};

export default userService;
