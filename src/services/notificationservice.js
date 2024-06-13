import { useState, useEffect } from 'react';
import { useCancellablePromise } from '../helpers/promiseHandler';
import { Fetch } from '../helpers/fetchWrapper';

const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const notificationService = {
  _url: `${process.env.NEXT_PUBLIC_NOTIFICATION_URL}`,

  GetAllNotifications(searchQuery, fetch) {
    const [notifications, setNotifications] = useState([]);
    const { cancellablePromise } = useCancellablePromise();
    const [notificationStatus, setNotificationStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setNotificationStatus(STATUS.LOADING);
      cancellablePromise(this.getAllNotifications(searchQuery))
        .then(res => {
          setNotifications(() => res.data.items);
          setNotificationStatus(STATUS.SUCCESS);
        })
        .catch(() => setNotificationStatus(STATUS.ERROR));
    }, [searchQuery, fetch]);
    return {
      notification_loading: notificationStatus === STATUS.LOADING,
      notification_error: notificationStatus === STATUS.ERROR,
      notification_data: notifications,
    };
  },

  async getAllNotifications({ page = 1, itemsPerPage = 10 }) {
    let res = await Fetch.get(`${this._url}/notification?page=${page}&itemsPerPage=${itemsPerPage}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something Went Wrong');
  },
  async readAllNotifications() {
    let res = await Fetch.get(`${this._url}//read-all-notification`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something Went Wrong');
  },
};

export default notificationService;
