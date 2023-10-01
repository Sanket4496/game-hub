import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5ec40685db4c423191a3c85b76306ee6",
  },
});
