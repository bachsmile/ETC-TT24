import axiosIns from "../plugins/Axios";

export default class MethodsUtil {
  /**
   * @name: Request API
   * @param {string} url => Đường dẫn api
   * @param {string} method => Phương thức 'POST', 'GET'
   * @param {any} payload =>  Dữ liệu đính kèm api
   * @return {object}
   */
  static requestApiCustom = async (url = "", method = "GET", payload, arg) => {
    if (url === undefined) return;
    const data = method === "GET" ? null : payload || null;
    const params = method === "GET" ? payload : null;
    return await axiosIns({
      url,
      method,
      data,
      params,
      ...arg,
    })
      .then((res) => {
        return Promise.resolve(res);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
  static setLocalStorage = (key, value) => {
    localStorage.setItem('CLS'+ key, value);
  };
  static getLocalStorage = (key) => {
    return localStorage.getItem('CLS'+ key);
  };
}
