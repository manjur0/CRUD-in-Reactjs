import { useEffect } from "react";
import { getPost } from "./API/PostApi";

const App = () => {
  console.log(getPost());

  // getPostData
  const getPostData = async () => {
    try {
      const response = await getPost();
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // Call data from UseEffect
  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div>
      <h1>React CRUD application</h1>
    </div>
  );
};

export default App;
