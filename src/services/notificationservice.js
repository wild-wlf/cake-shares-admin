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

  GetAllConversations(searchQuery, fetch) {
    const [conversations, setConversations] = useState({
      conversations: [],
      totalItems: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [notificationStatus, setNotificationStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setNotificationStatus(STATUS.LOADING);
      cancellablePromise(this.getAllConversations(searchQuery))
        .then(res => {
          setConversations({
            conversations: res.items,
            totalItems: res.totalItems,
          });
          setNotificationStatus(STATUS.SUCCESS);
        })
        .catch(() => setNotificationStatus(STATUS.ERROR));
    }, [searchQuery?.page, searchQuery?.itemsPerPage, searchQuery?.type, searchQuery?.searchText, fetch]);

    return {
      conversations_loading: notificationStatus === STATUS.LOADING,
      conversations_error: notificationStatus === STATUS.ERROR,
      conversations_data: conversations,
    };
  },

  GetAllConversationMessages(searchQuery, fetch, chosenChatDetails) {
    const [messages, setMessages] = useState({
      messages: [],
      totalItems: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [notificationStatus, setNotificationStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setNotificationStatus(STATUS.LOADING);
      cancellablePromise(this.getAllConversationMessages(searchQuery))
        .then(res => {
          setMessages({
            messages: res.items,
            totalItems: res.totalItems,
          });
          setNotificationStatus(STATUS.SUCCESS);
        })
        .catch(() => setNotificationStatus(STATUS.ERROR));
    }, [
      searchQuery?.page,
      searchQuery?.itemsPerPage,
      searchQuery?.author,
      searchQuery?.receiver,
      searchQuery?.conversationId,
      chosenChatDetails?.conversationId,
      fetch,
    ]);
    return {
      messages_loading: notificationStatus === STATUS.LOADING,
      messages_error: notificationStatus === STATUS.ERROR,
      messages_data: messages,
    };
  },

  GetAllCommunityConversationMessages(searchQuery, fetch) {
    const [messages, setMessages] = useState({
      messages: [],
      totalItems: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [notificationStatus, setNotificationStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setNotificationStatus(STATUS.LOADING);
      cancellablePromise(this.getAllCommunityConversationMessages(searchQuery))
        .then(res => {
          setMessages({
            messages: res.items,
            totalItems: res.totalItems,
          });
          setNotificationStatus(STATUS.SUCCESS);
        })
        .catch(() => setNotificationStatus(STATUS.ERROR));
    }, [searchQuery?.page, searchQuery?.itemsPerPage, searchQuery?.conversationId, searchQuery?.type, fetch]);
    return {
      messages_loading: notificationStatus === STATUS.LOADING,
      messages_error: notificationStatus === STATUS.ERROR,
      messages_data: messages,
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

  async getAllConversationMessages({ page = 1, itemsPerPage = 10, author = '', receiver = '', conversationId = '' }) {
    let res = await Fetch.get(
      `${this._url}/get-conversation-messages?page=${page}&itemsPerPage=${itemsPerPage}&author=${author}&receiver=${receiver}&conversationId=${conversationId}`,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something Went Wrong');
  },

  async getAllConversations({ page = 1, itemsPerPage = 10, type = '', searchText = '' }) {
    let res = await Fetch.get(
      `${this._url}/get-all-conversations?page=${page}&itemsPerPage=${itemsPerPage}&type=${type}&searchText=${searchText}`,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something Went Wrong');
  },

  async readAllNotifications() {
    let res = await Fetch.get(`${this._url}/read-all-notification`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something Went Wrong');
  },

  async getAllCommunityConversationMessages({ page = 1, itemsPerPage = 10, conversationId = '', type }) {
    let res = await Fetch.get(
      `${this._url}/get-com-conversation-messages?page=${page}&itemsPerPage=${itemsPerPage}&conversationId=${conversationId}&type=${type}`,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something Went Wrong');
  },

  async reportMessage(payload) {
    let res = await Fetch.post(`${this._url}/report-message`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async requestMessage(payload) {
    let res = await Fetch.post(`${this._url}/unblock-request`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
};

export default notificationService;
