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
          value={formData.description}
          className="mt-2 rounded-xl p-2 bg-amber-700"
        />
        <label htmlFor="title">catagoty</label>
        <select
          name="catagory"
          value={formData.catagory}
          onChange={handleChange}
        >
          <option value-="no catagory">no cataory</option>
          <option value-="Software">Software</option>
          <option value-="Hardeare">Hardware</option>
        </select>
        <label>Priority</label>
        <div>
          <label>1 </label>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            chacked={FormData.priority == 1}
          ></input>
          <label>2 </label>
          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            chacked={FormData.priority == 2}
          ></input>
          <label>3 </label>
          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            chacked={FormData.priority == 3}
          ></input>
          <label>4 </label>
          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            chacked={FormData.priority == 4}
          ></input>
          <label>5 </label>
          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            chacked={FormData.priority == 5}
          ></input>
        </div>
        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        ></input>
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <input type="submit" value="create ticket" />
      </form>
    </div>
  );
};

export default TicketForm;
