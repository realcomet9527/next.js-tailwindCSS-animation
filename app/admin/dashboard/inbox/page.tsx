"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../../layouts/dashboardlayout";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { Updatelength } from "@/lib/store/slices/Authslice";
import serverLink from "@/app/link";


const Inbox = () => {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
  dispatch(Updatelength(messages.length));

  useEffect(() => {
    // Fetch messages using Axios
    axios
      .get(`${serverLink}get-messages`)
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
      });
  }, []);

  const handleDelete = (id: any) => {
    axios
      .delete(`${serverLink}delete-message/${id}`)
      .then(() => {
        axios.get(`${serverLink}get-messages`).then((response) => {
          setMessages(response.data);
        });
      })
      .catch((error) => {
        console.error("Error deleting message:", error);
      });
  };

  return (
    <DashboardLayout>
      <div className="p-10">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">All Messages</h1>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className=" py-2 text-start">#no</th>
                <th className=" py-2 text-start">Name</th>
                <th className=" py-2 text-start">Number</th>
                <th className=" py-2 text-start">Email</th>
                <th className=" py-2 text-start">Message</th>
                <th className=" py-2 text-start">Action</th>
              </tr>
            </thead>
            <tbody>
              {messages.length > 0 ? (
                messages.map((message: any, index: number) => (
                  <tr key={message._id} className="hover:bg-gray-100">
                    <td className="border py-2">{`${index + 1}`}</td>
                    <td className="border py-2">{message.name}</td>
                    <td className="border py-2">{message.number}</td>
                    <td className="border py-2">{message.email}</td>
                    <td className="border py-2">{message.message}</td>
                    <td className="border py-2">
                      <Link href={`mailto:${message.email}`}>
                        <button className="bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded mr-2">
                          Reply
                        </button>
                      </Link>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                        onClick={() => handleDelete(message._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <h1 className="text-red-600 text-2xl">Inbox Empty</h1>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Inbox;
