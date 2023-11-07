/* eslint-disable no-unused-vars */
import { API } from "./API";

export async function getAllDoctor() {
  const res = await fetch(API, {
    method: "GET",
  });
  const data = await res.json();
  return data;
}

export async function deleteDoctor(id) {
  const res = await fetch(`${API}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}

export async function addNewDoctor(newDoc) {
  const res = await fetch(`${API}`, {
    method: "POST",
    body: JSON.stringify(newDoc),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}

export async function editNewDoctor(id, editDoc) {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    body: JSON.stringify(editDoc),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}
