import { Fetch } from '../helpers/fetchWrapper';

const kycService = {
  _url: `${process.env.NEXT_PUBLIC_USER_URL}`,

  async requestKyc(payload) {
    let res = await Fetch.upload(`${this._url}/request-kyc`, 'POST', payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
};
export default kycService;
