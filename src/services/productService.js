import { Fetch } from "../helpers/fetchWrapper";

const productService = {
  _url: `${process.env.NEXT_PUBLIC_USER_URL}`,

  async addProduct(payload) {
    let res = await Fetch.upload(
      `${this._url}/create-product`,
      "POST",
      payload
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },

  //   async getCurrentAdmin() {
  //     let res = await Fetch.get(`${this._url}/me`);
  //     if (res.status >= 200 && res.status < 300) {
  //       res = await res.json();
  //       return res;
  //     }
  //     const { message } = await res.json();
  //     throw new Error(message ?? "Something went wrong");
  //   },

  //   async logout() {
  //     let res = await Fetch.delete(`${this._url}/logout`);
  //     if (res.status >= 200 && res.status < 300) {
  //       res = await res.json();
  //       return res;
  //     }
  //     const { message } = await res.json();
  //     throw new Error(message ?? "Something went wrong");
  //   },
};

export default productService;
