import React from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading} from "../../redux/rootSlice"
import axios from "axios";
import { message } from "antd";

function AdminContact() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async(values) => {
    try{
      dispatch(ShowLoading());
      const response = await axios.post("http://localhost:8000/api/portfolio/update-contact", {
        ...values,
        _id: portfolioData.contact._id,
      });
      dispatch(HideLoading());
      if(response.data.success){
        message.success(response.data.message);
      }
      else{
        message.error(response.data.message);
      }
    }
    catch(error){
      dispatch(HideLoading());
      message.error(error.message);
      
    }
  };
  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData.contact}
      >
        
        <Form.Item name="name" label="Name">
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <Input placeholder="Gender" />
        </Form.Item>
        <Form.Item name="age" label="Age">
          <Input placeholder="Age" />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="mobile" label="Mobile">
          <Input placeholder="Mobile" />
        </Form.Item>
        <Form.Item name="address" label="Address">
          <Input placeholder="Address" />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button className="px-10 py-2 bg-primary text-white" type="submit">SAVE</button>
        </div>
      </Form>
    </div>
  );
}

export default AdminContact;
