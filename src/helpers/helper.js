/* eslint-disable no-unused-vars */
import { AppState } from "../Context/AppContext";
import { API } from "./API";
const token = localStorage.getItem("token");
export async function getAllDoctor() {
  const res = await fetch(`${API}/all`, {
    method: "GET",
    headers: {
      "x-auth-token": token,
    },
  });
  const data = await res.json();
  return data;
}

export async function deleteDoctor(id) {
  const res = await fetch(`${API}/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      "x-auth-token": token,
    },
  });
  const data = await res.json();
  return data;
}

export async function addNewDoctor(newDoc) {
  const res = await fetch(`${API}/add`, {
    method: "POST",
    body: JSON.stringify(newDoc),
    headers: {
      "Content-type": "application/json",
      "x-auth-token": token,
    },
  });
  const data = await res.json();
  return data;
}

export async function editNewDoctor(id, editDoc) {
  const res = await fetch(`${API}/edit/'${id}`, {
    method: "PUT",
    body: JSON.stringify(editDoc),
    headers: {
      "Content-type": "application/json",
      "x-auth-token": token,
    },
  });
  const data = await res.json();
  return data;
}
