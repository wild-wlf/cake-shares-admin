import { Fetch } from "../helpers/fetchWrapper";

const userService = {
    _url: `${process.env.NEXT_PUBLIC_USER_URL}`,

    async login({username = "", password = ""}) {
        let res = await Fetch.post(`${this._url}/login`, {
            username,
            password,
        });
        if (res.status >= 200 && res.status < 300) {
            res = await res.json();
            return res;
        }
        const {message} = await res.json();
        throw new Error(message ?? "Something went wrong");
    },

    async update(payload, id) {
      let res = await Fetch.put(`${this._url}/update-chunk-info/${id}`, payload);
      if (res.status >= 200 && res.status < 300) {
        res = await res.json();
        return res;
      }
      const { message } = await res.json();
      throw new Error(message ?? "Something went wrong");
    },
    async uploadMedia(payload, id) {
      let res = await Fetch.upload(
        `${this._url}/update-chunk-info/${id}`,
        "PUT",
        payload
      );
      if (res.status >= 200 && res.status < 300) {
        res = await res.json();
        return res;
      }
      const { message } = await res.json();
      throw new Error(message ?? "Something went wrong");
    },
    async addInheritance(payload) {
      let res = await Fetch.put(`${this._url}/update-chunk-info`, payload);
      if (res.status >= 200 && res.status < 300) {
        res = await res.json();
        return res;
      }
      const { message } = await res.json();
      throw new Error(message ?? "Something went wrong");
    },
    async deleteInheritance(id) {
      let res = await Fetch.delete(`${this._url}/delete-inhertance/${id}`);
      if (res.status >= 200 && res.status < 300) {
        res = await res.json();
        return res;
      }
      const { message } = await res.json();
      throw new Error(message ?? "Something went wrong");
    },
  
    // register
    async createUser(payload) {
      let res = await Fetch.upload(`${this._url}/registeration`, "POST", payload);
      if (res.status >= 200 && res.status < 300) {
        res = await res.json();
        return res;
      }
      const { message } = await res.json();
      throw new Error(message ?? "Something went wrong");
    },
    // update password
  
    async updatePassword(payload, id) {
      let res = await Fetch.patch(`${this._url}/update-password/${id}`, payload);
      if (res.status >= 200 && res.status < 300) {
        res = await res.json();
        return res;
      }
      const { message } = await res.json();
      throw new Error(message ?? "Something went wrong");
    },

    async getCurrentAdmin() {
        let res = await Fetch.get(`${this._url}/me`);
        if (res.status >= 200 && res.status < 300) {
            res = await res.json();
            return res;
        }
        const {message} = await res.json();
        throw new Error(message ?? "Something went wrong");
    },

    async logout() {
        let res = await Fetch.delete(`${this._url}/logout`);
        if (res.status >= 200 && res.status < 300) {
            res = await res.json();
            return res;
        }
        const {message} = await res.json();
        throw new Error(message ?? "Something went wrong");
    },
};

export default userService;
