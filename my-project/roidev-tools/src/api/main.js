import axios from "axios";
class API {
  constructor() {
    this.url = `https://api.lolhuman.xyz/api/`
    this.apikey = 'roiwithzakiya';
  }
  getApi() {
    axios.get(this.url, {
      params: {
        apikey: this.apikey,
      }
    }).then((res) => res).catch((err) => { throw new Error(err) });
  }

}
export default { API }