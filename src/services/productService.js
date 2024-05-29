import {useEffect, useState} from "react";
import {Fetch} from "../helpers/fetchWrapper";
import {useCancellablePromise} from "@/helpers/promiseHandler";
const STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    ERROR: "error",
};
const productService = {
    _url: `${process.env.NEXT_PUBLIC_PRODUCT_URL}`,

    async addProduct(payload) {
        let res = await Fetch.upload(`${this._url}/create-product`, "POST", payload);
        if (res.status >= 200 && res.status < 300) {
            res = await res.json();
            return res;
        }
        const {message} = await res.json();
        throw new Error(message ?? "Something Went Wrong");
    },
    GetAllProducts(searchQuery, fetch) {
        const [products, setProducts] = useState({
            products: [],
            totalItems: 0,
        });
        const {cancellablePromise} = useCancellablePromise();
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
    async getAllProducts({page = 1, itemsPerPage = 10, status = "", searchText = "", type = ""}) {
        let res = await Fetch.get(
            `${this._url}/get-all-products?page=${page}&itemsPerPage=${itemsPerPage}&status=${status}`
        );
        if (res.status >= 200 && res.status < 300) {
            res = await res.json();
            return res;
        }
        const {message} = await res.json();
        throw new Error(message ?? "Something Went Wrong");
    },
    async updateProduct(id, payload) {
        let res = await Fetch.upload(`${this._url}/update-product/${id}`, "PUT", payload);
        if (res.status >= 200 && res.status < 300) {
            res = await res.json();
            return res;
        }
        const {message} = await res.json();
        throw new Error(message ?? "Something Went Wrong");
    },
    async deleteProduct(id) {
        let res = await Fetch.delete(`${this._url}/delete-product/${id}`);
        if (res.status >= 200 && res.status < 300) {
            res = await res.json();
            return res;
        }
        const {message} = await res.json();
        throw new Error(message ?? "Something Went Wrong");
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
