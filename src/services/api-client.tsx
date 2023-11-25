import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "be0d5ed55788463aaa88ee5523591e02",
  },
});
