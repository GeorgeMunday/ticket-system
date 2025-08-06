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
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/Tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Something went wrong while submitting the form.");
      }

      router.refresh();
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center">
      <form
        className="rounded-xl bg-white p-10 mt-10 mb-10"
        method="post"
        onSubmit={handleSubmit}
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
          <option value="no catagory">no cataory</option>
          <option value="Software">Software</option>
          <option value="Hardeare">Hardware</option>
        </select>
        <label>Priority</label>
        <div>
          {[1, 2, 3, 4, 5].map((priority) => (
            <label key={priority}>
              {priority}
              <input
                id={`priority-${priority}`}
                name="priority"
                type="radio"
                onChange={handleChange}
                value={priority}
                checked={formData.priority == priority}
              />
            </label>
          ))}
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
