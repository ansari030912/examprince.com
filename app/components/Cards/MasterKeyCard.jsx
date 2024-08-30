"use client";
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import axios from "axios";
import React, { useEffect, useState } from "react";

const MasterKeyCard = ({ params }) => {
  const [masterKey, setMasterKey] = useState(null);
  const [message, setMessage] = useState(null);
  const [ip, setIp] = useState(null);

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/get-ip");
        setIp(response.data.ip);
      } catch (error) {
        console.error("Error fetching IP:", error);
      }
    };

    const fetchMasterKey = async (ipAddress) => {
      try {
        const response = await axios.post(
          `${Base_URL}/v1/te-activate-master`,
          {
            key1: params.key_1,
            key2: params.key_2,
            ip: ipAddress,
          },
          {
            headers: {
              "x-api-key": X_API_Key,
            },
          }
        );

        const data = response.data;
        setMasterKey(data.master_key);
        setMessage(data.message);
      } catch (error) {
        console.error("Error fetching master key:", error);
      }
    };

    fetchIp().then(() => {
      if (ip) {
        fetchMasterKey(ip);
      }
    });
  }, [params.key_1, params.key_2, ip]); // Dependencies to rerun the effect if these values change

  return (
    <div>
      {masterKey && <p>Master Key: {masterKey}</p>}
      {message && <p>Message: {message}</p>}
    </div>
  );
};

export default MasterKeyCard;
