"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    catagory: "no catagory",
  };

  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handelSubmit = () => {
    console.log("formData", FormData);
  };

  return (
    <div className="flex justify-center">
      <form
        className="rounded-xl bg-white p-10 mt-10 mb-10"
        method="post"
        onSubmit={handelSubmit}
      >
        <h3>Create Your Ticket Here!</h3>
        <label htmlFor="title">Title: </label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required
          value={formData.title}
          className="mt-2 rounded-xl p-2 bg-amber-700"
        />
        <label htmlFor="title">Description</label>
        <input
          id="description"
          name="description"
          type="text"
          onChange={handleChange}
          required
          value={formData.title}
          className="mt-2 rounded-xl p-2 bg-amber-700"
        />
      </form>
    </div>
  );
};

export default TicketForm;
