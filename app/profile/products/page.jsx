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
                    <th class="pb-8 pr-4 text-sm text-body text-right text-opacity-40 font-heading font-semibold uppercase">
                      Actions / Downloads
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
                                  : row.product_type_detail}{" "}
                                {row.product_code ===
                                  "Unlimited Test Engine Access" ||
                                row.product_code === "Unlimited PDF Access"
                                  ? ""
                                  : `- ${row.product_code}`}
                              </h4>
                              <p className="font-semibold text-base text-gray-600">
                                {row.product_code ===
                                  "Unlimited Test Engine Access" ||
                                row.product_code === "Unlimited PDF Access"
                                  ? ""
                                  : row.product_type_detail}
                              </p>
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
                                      href={`https://certsgang.com${product.url}`}
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
                                          width="2em"
                                          height="2em"
                                          viewBox="0 0 24 24"
                                        >
                                          <g
                                            fill="white"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                          >
                                            <path d="M15.68 5.348a2.95 2.95 0 0 0-2.953 2.946a2.95 2.95 0 0 0 2.954 2.945a2.95 2.95 0 0 0 2.954-2.945a2.95 2.95 0 0 0-2.954-2.946m-1.453 2.946a1.45 1.45 0 0 1 1.454-1.446c.806 0 1.454.65 1.454 1.446a1.45 1.45 0 0 1-1.454 1.445a1.45 1.45 0 0 1-1.454-1.445" />
                                            <path d="M9.53 20.878a2.2 2.2 0 0 0 .432-1.355c.392.116.78.13 1.152.06c.768-.146 1.337-.632 1.639-1.032l.005-.007l.005-.007a2.42 2.42 0 0 0 .396-2.02a2.9 2.9 0 0 0-.36-.85a2.2 2.2 0 0 0-.272-.393l.009-.01l.464-.462c.382.183.796.298 1.158.373a8 8 0 0 0 1.523.162c3.901 0 7.069-3.15 7.069-7.044c0-3.892-3.168-7.043-7.07-7.043c-3.9 0-7.069 3.15-7.069 7.043a6.5 6.5 0 0 0 .57 2.635l-7.256 7.226a2.37 2.37 0 0 0-.648 1.255c-.099.603.063 1.274.648 1.856l.882.878l.042.04a2.46 2.46 0 0 0 1.197.544a1.98 1.98 0 0 0 1.73-.584l.566-.564a2.33 2.33 0 0 0 1.617.276a2.62 2.62 0 0 0 1.56-.963l.006-.007zm.581-12.585c0-3.058 2.491-5.543 5.57-5.543c3.078 0 5.569 2.485 5.569 5.543c0 3.06-2.49 5.544-5.57 5.544c-.272 0-.743-.033-1.218-.13c-.497-.104-.887-.257-1.095-.43a.75.75 0 0 0-1.008.047l-.882.878c-.201.2-.395.428-.498.691c-.13.333-.088.653.06.92c.088.157.23.307.289.37l.02.021c.07.077.107.127.135.183l.027.053l.03.042l.007.01q.014.023.042.076c.038.073.082.176.11.297a.92.92 0 0 1-.15.79c-.14.183-.407.396-.714.454c-.258.049-.678.017-1.238-.54a.75.75 0 0 0-1.059 0l-.294.292a.75.75 0 0 0-.032 1.03q.018.024.055.08c.048.075.104.18.144.3c.076.225.088.466-.095.726c-.12.155-.363.332-.639.384c-.234.045-.534.012-.872-.325a.75.75 0 0 0-1.059 0l-1.029 1.025c-.165.164-.31.183-.452.162a1 1 0 0 1-.424-.187l-.857-.854c-.239-.237-.248-.42-.227-.55a.87.87 0 0 1 .227-.436l7.644-7.613a.746.746 0 0 0 .105-.925l-.002-.003a2 2 0 0 1-.082-.15a5 5 0 0 1-.538-2.232m-1.91 10.583q0 .002.004.005l-.001-.001z" />
                                          </g>
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
