import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

const test = async () => {
  try {
    const response = await api.get("/posts");
    console.log("Success:", response.data.length, "posts");
  } catch (error) {
    console.log("Error:", error.message);
  }
};

test();