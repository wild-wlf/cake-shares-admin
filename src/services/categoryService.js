/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import { Fetch } from '../helpers/fetchWrapper';
import { useCancellablePromise } from '@/helpers/promiseHandler';

const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const categoryService = {
  _url: `${process.env.NEXT_PUBLIC_PRODUCT_URL}`,

  GetAllCategories(searchQuery, fetch) {
    const [categories, setCategories] = useState({
      categories: [],
      totalItems: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [categoryStatus, setCategoryStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setCategoryStatus(STATUS.LOADING);
      cancellablePromise(this.getAllCategories(searchQuery))
        .then(res => {
          setCategories(() => res);
          setCategoryStatus(STATUS.SUCCESS);
        })
        .catch(() => setCategoryStatus(STATUS.ERROR));
    }, [searchQuery?.getAll ? JSON.stringify(searchQuery) : searchQuery, fetch]);
    return {
      categories_loading: categoryStatus === STATUS.LOADING,
      categories_error: categoryStatus === STATUS.ERROR,
      categories_data: categories,
    };
  },

  async getAllCategories({ page = 1, itemsPerPage = 10, getAll = false, searchText = '' }) {
    let res = await Fetch.get(
      `${this._url}/get-all-categories?page=${page}&itemsPerPage=${itemsPerPage}&getAll=${getAll}&searchText=${searchText}`,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something Went Wrong');
  },
};

export default categoryService;
