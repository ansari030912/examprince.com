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
    <section class="py-8">
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
                            {row?.product_access?.map((product, i) => (
                              <div key={i}>
                                {product?.type === "download_pdf" ? (
                                  <div className="mr-3 py-2 px-3 rounded-xl text-green-600 font-semibold bg-green-300">
                                    <Tooltip title="Download Premium PDF File">
                                      <Link
                                        href={`https://certsgang.com${product.url}`}
                                      >
                                        Download PDF
                                      </Link>
                                    </Tooltip>
                                  </div>
                                ) : product?.type === "te_access" ? (
                                  <div className="mr-3 py-2 px-3 rounded-xl text-blue-600 font-semibold bg-blue-300">
                                    <Tooltip title="Test Engine Access">
                                      <Link
                                        href={`/te-access/${product?.prams?.payment_id}/${product?.prams?.exam_id}/${product?.prams?.rel_id}`}
                                      >
                                        Test Engine Access
                                      </Link>
                                    </Tooltip>
                                  </div>
                                ) : product?.type === "sc_access" ? (
                                  <div className="mr-3 py-2 px-3 rounded-xl text-red-600 font-semibold bg-red-300">
                                    <Tooltip title="Start Training Course">
                                      <Link
                                        href={`/sc-access/${product?.prams?.payment_id}/${product?.prams?.exam_id}`}
                                      >
                                        SC Access
                                      </Link>
                                    </Tooltip>
                                  </div>
                                ) : product?.type === "unlimited_te_access" ? (
                                  <div className="mr-3 py-2 px-3 rounded-xl text-yellow-600 font-semibold bg-yellow-300">
                                    <Tooltip title="Unlimited Test Engine Access">
                                      <Link
                                        href={`/unlimited-te-access/${product?.prams.payment_id}/${product?.prams.rel_id}`}
                                      >
                                        Unlimited TE Access
                                      </Link>
                                    </Tooltip>
                                  </div>
                                ) : product?.type === "unlimited_pdf_access" ? (
                                  <div className="mr-3 py-2 px-3 rounded-xl text-purple-600 font-semibold bg-purple-300">
                                    <Tooltip title="Unlimited PDF Access">
                                      <Link
                                        href={`/unlimited-pdf-access/${product?.prams.payment_id}/${product?.prams.rel_id}`}
                                      >
                                        Unlimited PDF Access
                                      </Link>
                                    </Tooltip>
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
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
