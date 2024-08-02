import { Fetch } from '../helpers/fetchWrapper';

const paymentService = {
  _url: `${process.env.NEXT_PUBLIC_PAYMENT_URL}`,

  async getStripeConfig() {
    let res = await Fetch.get(`${this._url}/stripe-config`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async createPaymentIntent(payload) {
    let res = await Fetch.post(`${this._url}/create-payment-intent`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async cardSave(payload) {
    let res = await Fetch.post(`${this._url}/attach-card`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
};

export default paymentService;
