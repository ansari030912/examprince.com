"use client";
/* eslint-disable @next/next/no-img-element */
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import { IconButton, Tooltip } from "@mui/material";
import axios from "axios";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const fetchData = async () => {
    try {
      const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
      const response = await axios.get(`${Base_URL}/v1/account/products`, {
        headers: {
          "x-api-key": X_API_Key,
          Authorization: `Bearer ${loginResponse._token}`,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <section class="py-8 bg-blueGray-50">
      <div class="container px-4 mx-auto">
        <div class="pt-14 px-8 pb-12 bg-white rounded-5xl">
          <div class="flex flex-wrap mb-8 justify-between items-center">
            <div class="w-full md:w-auto mb-10 md:mb-0">
              <h3 class="text-3xl font-heading font-medium leading-10">
                Sales Invoices
              </h3>
            </div>
          </div>
          <div class="overflow-x-auto">
            <div class="inline-block w-full min-w-max overflow-hidden">
              <table class="table-auto w-full">
                <thead>
                  <tr>
                    <th class="pb-8 text-sm pl-5 text-body text-left text-opacity-40 font-heading font-semibold uppercase">
                      Vendor
                    </th>
                    <th class="pb-8 text-sm text-body text-center text-opacity-40 font-heading font-semibold uppercase">
                      Product Id
                    </th>
                    <th class="pb-8 text-sm text-body text-center text-opacity-40 font-heading font-semibold uppercase">
                      Status / Expiry
                    </th>
                    <th class="pb-8 text-sm text-body text-center text-opacity-40 font-heading font-semibold uppercase">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index} style={{ borderRadius: "4px" }}>
                      <td class="p-0">
                        <div
                          class={
                            index % 2 === 0
                              ? "flex items-center pl-4 pr-4 h-20 bg-blueGray-50 border-l border-t border-b border-gray-100 bg-gray-50 rounded-tl-2xl rounded-bl-2xl"
                              : "flex items-center pl-4 pr-4 h-20 "
                          }
                        >
                          <div class="flex items-center">
                            <img
                              class="mr-4 h-8"
                              src="/placeholder-icon2.png"
                              alt=""
                            />
                            <div class="flex-shrink-1">
                              <h4 class="font-heading text-wrap font-medium leading-4 text-lg">
                                {row.product_vendor
                                  ? row.product_vendor
                                  : row.product_type_detail}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="p-0">
                        <div
                          class={
                            index % 2 === 0
                              ? "flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100 bg-gray-50"
                              : "flex items-center justify-center p-5 h-20 text-center"
                          }
                        >
                          <span class="font-heading text-darkBlueGray-400  text-lg">
                            # {row.product_invoice_id}
                          </span>
                        </div>
                      </td>
                      <td class="p-0">
                        <div
                          class={
                            index % 2 === 0
                              ? "flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b  border-gray-100 bg-gray-50"
                              : "flex items-center justify-center p-5 h-20 text-center"
                          }
                        >
                          <span
                            class={
                              row.product_expired
                                ? "py-2 pb-3 px-3 text-xs text-red-600 font-medium bg-red-200 rounded-full"
                                : "py-2 pb-3 px-3 text-xs text-green-900 font-medium bg-green-200 rounded-full"
                            }
                          >
                            {row.product_expired ? "Expired" : "Active"}
                            <br />
                            {moment(row.product_expiry_date).format("LL")}
                          </span>
                        </div>
                      </td>

                      <td class="p-0">
                        <div
                          class={
                            index % 2 === 0
                              ? "flex items-center justify-end pr-6 h-20 text-right bg-blueGray-50 border-t border-b border-r border-gray-100 bg-gray-50 rounded-tr-2xl rounded-br-2xl"
                              : "flex items-center justify-end pr-6 h-20 text-right bg-blueGray-50"
                          }
                        >
                          <div class="flex justify-end">
                            {row?.product_access?.map((product) => (
                              <>
                                {product?.type === "download_pdf" ? (
                                  <Tooltip title="Download Premium PDF File">
                                    <Link
                                      href={
                                        "https://api.dumpsboss.com/v1/download/pdf-file/?token=222QkEIbM5COm1qhoPhqkAu1Xa2gmks1HOgD9jFkbNwizEDxEtxcYhMWhAxhm7CM5tIUSTZJCk"
                                      }
                                    >
                                      <IconButton className="bg-green-400 h-10 w-10 hover:bg-green-500 mr-1">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="2em"
                                          height="2em"
                                          viewBox="0 0 32 32"
                                        >
                                          <path
                                            fill="white"
                                            d="M24 24v4H8v-4H6v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4Z"
                                          />
                                          <path
                                            fill="white"
                                            d="m21 21l-1.414-1.414L17 22.172V14h-2v8.172l-2.586-2.586L11 21l5 5zm7-17V2h-6v10h2V8h3V6h-3V4zm-11 8h-4V2h4a3.003 3.003 0 0 1 3 3v4a3.003 3.003 0 0 1-3 3m-2-2h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2zM9 2H4v10h2V9h3a2.003 2.003 0 0 0 2-2V4a2 2 0 0 0-2-2M6 7V4h3l.001 3z"
                                          />
                                        </svg>
                                      </IconButton>
                                    </Link>
                                  </Tooltip>
                                ) : product?.type === "te_access" ? (
                                  <Tooltip title="Test Engine Access">
                                    <Link
                                      href={`/te-access/${product?.prams?.payment_id}/${product?.prams?.exam_id}/${product?.prams?.rel_id}`}
                                    >
                                      <IconButton className="bg-blue-400 h-10 w-10 hover:bg-blue-500 mr-1">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1em"
                                          height="1em"
                                          viewBox="0 0 512 512"
                                        >
                                          <path
                                            fill="white"
                                            d="M328.9 17.89h-1.8c-8.2.27-18.6 2.98-31.8 8.59L59.61 126.4c-21.18 8.9-31.79 17.7-35.74 27.5c-3.95 9.7-2.41 23.4 6.57 44.6l49.95 117.8c8.97 21.2 17.72 31.8 27.51 35.7c9.7 4 23.4 2.5 44.6-6.5l235.7-99.9c13.5-5.7 22.7-11.3 28.6-17.2c4.5 5.5 8.7 11.6 12.2 18.2c3.8 7 6.8 14.4 8.9 21.8c-2.5-.3-5.1-.4-7.7-.4c-14.1.3-28.1 5.7-39.2 16.2c-20.6 19.6-24.2 50.4-10.1 73.8l-50.2 47.7l-22-5.9l.8 26.1l-27.4-.8l-2.6 29.4l-23.7-4.4l4.6 22.5l-17 21.5l62.8-10.9l104.9-100c20.2 7.5 43.7 3.4 60.5-12.6c23.7-22.5 24.9-59.9 2.5-83.9c-4.9-5.2-10.4-9.3-16.4-12.3c-2.1-12.5-6.7-24.9-12.8-36.3c-5.4-10-11.9-19.3-19.2-27c1.1-9.1-1.4-21.1-8.4-37.6L367.4 55.67c-8.9-21.17-17.7-31.78-27.5-35.74c-3.2-1.3-6.8-2-11-2.04m-15.6 50.96l7 16.58l-132.6 56.17l-7-16.6zm14.9 38.25l7 16.6l-73.7 31.2l-7-16.6zm-189.7 18.4L208 289.4l-90.3 38.2L51.81 172l-3.51-8.3zm206 17l7 16.6l-88.4 37.4l-7-16.6zm-215.6 6.6l-57 24.2L127.3 304l57.1-24.2zm255.7 25c13.1 0 23.9 10.3 24.9 23.1c-8.9-6-18.7-9.6-28.6-8.9c-1.7.1-3.4.3-5.1.7l4 17.6c6-1.4 14.6 1.2 23.8 8.5c0 0 .1 0 .1.1c-4.6 5.4-11.5 8.9-19.1 8.9c-13.7 0-25-11.3-25-25s11.3-25 25-25m53.7 120.1c.8 0 1.6 0 2.4.1c-.9 8.9-4.1 16.5-10.1 22.5l12.6 12.8c7.7-7.7 12.3-17.1 14.4-27.2c9.7 10.5 9.2 27.1-1.1 36.9c-10.4 9.9-26.9 9.4-36.6-1c-9.8-10.5-9.2-27.2 1.1-37c4.9-4.6 11.1-6.9 17.3-7.1"
                                          />
                                        </svg>
                                      </IconButton>
                                    </Link>
                                  </Tooltip>
                                ) : product?.type === "sc_access" ? (
                                  <Tooltip title="Start Training Course">
                                    <Link
                                      href={`/sc-access/${product?.prams?.payment_id}/${product?.prams?.exam_id}`}
                                    >
                                      <IconButton className="bg-red-400 h-10 w-10 hover:bg-red-500 mr-1">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1em"
                                          height="1em"
                                          viewBox="0 0 1024 1024"
                                        >
                                          <path
                                            fill="white"
                                            d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768a384 384 0 0 0 0 768m-48-247.616L668.608 512L464 375.616zm10.624-342.656l249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"
                                          />
                                        </svg>
                                      </IconButton>
                                    </Link>
                                  </Tooltip>
                                ) : product?.type === "unlimited_te_access" ? (
                                  <Tooltip title="Unlimited Test Engine Access">
                                    <Link
                                      href={`/unlimited-te-access/${product?.prams.payment_id}/${product?.prams.rel_id}`}
                                    >
                                      <IconButton className="bg-yellow-400 h-10 w-10 hover:bg-yellow-500 mr-1">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1em"
                                          height="1em"
                                          viewBox="0 0 48 48"
                                        >
                                          <path
                                            fill="white"
                                            d="m21.483 8.474l2.397 8.153H4.758l2.458-8.153zM9.134 18.125l8.212 1.979l-9.531 16.545L2 30.473zm2.158 15.526l5.815-6.174l9.591 16.545L18.426 46zm28.773 5.815H25.798L23.4 31.373h19.123m2.757-13.907l-7.133 12.409l-8.212-1.979l9.53-16.545m-3.476 2.998l-5.815 6.174l-9.591-16.605L28.856 2z"
                                          />
                                        </svg>
                                      </IconButton>
                                    </Link>
                                  </Tooltip>
                                ) : product?.type === "unlimited_pdf_access" ? (
                                  <Tooltip title="Unlimited PDF Access">
                                    <Link
                                      href={`/unlimited-pdf-access/${product?.prams.payment_id}/${product?.prams.rel_id}`}
                                    >
                                      <IconButton className="bg-purple-400 h-10 w-10 hover:bg-purple-500 mr-1">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1em"
                                          height="1em"
                                          viewBox="0 0 24 24"
                                        >
                                          <g
                                            fill="none"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                          >
                                            <path d="M15.536 17.586a2.123 2.123 0 0 0-2.929 0a1.95 1.95 0 0 0 0 2.828c.809.781 2.12.781 2.929 0s-.805.778 0 0l1.46-1.41l1.46-1.419" />
                                            <path d="m15.54 17.582l1.46 1.42l1.46 1.41c.809.78-.805-.779 0 0s2.12.781 2.929 0a1.95 1.95 0 0 0 0-2.828a2.123 2.123 0 0 0-2.929 0M14 3v4a1 1 0 0 0 1 1h4" />
                                            <path d="M9.5 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v6" />
                                          </g>
                                        </svg>
                                      </IconButton>
                                    </Link>
                                  </Tooltip>
                                ) : (
                                  ""
                                )}
                              </>
                            ))}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
