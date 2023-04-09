import React from 'react';
import { useState } from 'react';

export default function BigForm() {
  const [form, setForm] = useState({
    firstName: 'Damodar',
    lastName: 'Pulla',
    email: 'damodar.pulla@gmail.com',
  });

  return (
    <>
      {/* first Name */}
      <label> First Name </label>
      <input
        type="text"
        value={form.firstName}
        onChange={(e) => {
          setForm({ ...form, firstName: e.target.value });
        }}
      />
      {/* last Name */}
      <label> Last Name </label>
      <input
        type="text"
        value={form.lastName}
        onChange={(e) => {
          setForm({ ...form, lastName: e.target.value });
        }}
      />

      {/* Email */}
      <label>Email Address </label>
      <input
        type="email"
        value={form.email}
        onChange={(e) => {
          setForm({ ...form, email: e.target.value });
        }}
      />

      <p>
        {' '}
        The values are : {form.firstName}, {form.lastName}, ({form.email}){' '}
      </p>
    </>
  );
}
