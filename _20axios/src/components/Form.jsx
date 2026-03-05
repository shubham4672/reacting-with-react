import React, { useEffect, useState } from "react";
import { postData, updateData } from "../api/PostAPI";

const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  let isEmpty = Object.keys(updateDataApi).length === 0;

  useEffect(() => {
    updateDataApi &&
      setAddData({
        title: updateDataApi.title || "",
        body: updateDataApi.body || "",
      });
  }, [updateDataApi]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const updatePostData = async () => {
    const res = await updateData(updateDataApi.id, addData);
    setData((prev) => {
      return prev.map((curr) => {
        return curr.id === updateDataApi.id ? res.data : curr;
      });
    });
    setAddData({
      title: updateDataApi.title || "",
      body: updateDataApi.body || "",
    });
    setUpdateDataApi({});
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    if (action === "Add") handlePostSubmit();
    else if (action === "Edit") updatePostData();
  };

  const handlePostSubmit = async () => {
    const res = await postData(addData);
    if (res.status === 201) {
      setData([...data, res.data]);
      setAddData({ title: "", body: "" });
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            autoComplete='off'
            id='title'
            name='title'
            value={addData.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='body'>Body</label>
          <input
            type='text'
            autoComplete='off'
            id='body'
            name='body'
            value={addData.body}
            onChange={handleInputChange}
          />
        </div>
        <button type='submit' value={isEmpty ? "Add" : "Edit"}>
          {isEmpty ? "Add" : "Edit"}
        </button>
      </form>
    </>
  );
};

export default Form;
