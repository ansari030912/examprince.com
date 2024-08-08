"use client";
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const UnlimitedTeAccessPage = ({ params }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [unlimitedTeAccess, setUnlimitedTeAccess] = useState(null);
  const [activationKeys, setActivationKeys] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleCopyToClipboard = (keys) => {
    navigator.clipboard.writeText(keys);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  const handleGetKey = async (exam) => {
    setDialogOpen(true);
    const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    try {
      const response = await axios.get(
        `${Base_URL}${exam.activation_keys_url.replace("/api/", "/v1/")}`,
        {
          headers: {
            "x-api-key": X_API_Key,
            Authorization: `Bearer ${loginResponse._token}`,
          },
        }
      );

      setActivationKeys(response.data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${Base_URL}/v1/account/te-unlimited-access/${params.id_one}/${params.id_two}/A`,
          {
            headers: {
              "x-api-key": X_API_Key,
              Authorization: `Bearer ${loginResponse._token}`,
            },
          }
        );
        setUnlimitedTeAccess(response.data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    if (!unlimitedTeAccess) {
      fetchData();
    }
  }, [params.id_one, params.id_two]);

  return (
    <>
      <Dialog fullWidth open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Activation & Purchase Keys</DialogTitle>
        <Divider />
        <DialogContent>
          {activationKeys?.map((key, index) => (
            <Box key={index} width="100%" mb={2} mt={3}>
              <TextField
                variant="outlined"
                size="medium"
                fullWidth
                value={`${key.purchase_key}|${key.activation_key}`}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          handleCopyToClipboard(
                            `${key.purchase_key}|${key.activation_key}`
                          )
                        }
                      >
                        <Icon icon="akar-icons:copy" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          ))}
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleCloseDialog}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <section class="pt-6 pb-6 px-6 bg-white">
        <div className="flex justify-center mb-4">
          <img src="/MEGASALE DA-min.png" alt="" />
        </div>
      </section>

      <section class="px-6 bg-white">
        <div class="flex flex-wrap -m-4">
          <div class="w-full lg:w-4/12  p-12">
            <div class="flex items-end gap-6">
              <span
                style={{ display: "flex", justifyContent: "center" }}
                class="group flex-1"
              >
                <div
                  class="relative overflow-hidden rounded-xl transition duration-200"
                  style={{
                    height: "270px",
                    width: "270px",
                  }}
                >
                  <img
                    class="absolute inset-0 rounded-xl w-full h-full transform group-hover:scale-105 transition duration-200"
                    src="/package-small-min_optimized.png"
                    alt=""
                  />
                </div>
              </span>
            </div>
          </div>
          <div class="w-full lg:w-8/12 p-4">
            <div class="p-5 pt-20 ">
              <h2 class="font-heading uppercase text-3xl mb-2 max-w-xl">
                Unlimited PDF Access
              </h2>
              <hr className="mb-4" style={{ border: "2px solid #F5F6FA" }} />
              <p class="text-gray-500 text-base mt-2 font-semibold max-w-xl">
                You have the unlimited access of PDF Dumps files.
              </p>

              <p class="text-blue-500 text-base mt-2 font-semibold max-w-xl">
                You have downloaded : {unlimitedTeAccess?.total_downloaded}
              </p>

              <p class="text-green-500 text-base mt-2 font-semibold  max-w-xl">
                Monthly Download Limit : {unlimitedTeAccess?.total_limit}
              </p>

              <p class="text-gray-500 text-base mt-2 font-semibold mb-6 max-w-xl">
                (Each download of different or same PDF file will effect the
                download limit)
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className="container m-auto" />
      <section class="py-8 bg-blueGray-50">
        <div class="container mx-auto">
          <div class="pt-14 px-8 pb-12 bg-white rounded-5xl">
            <div class="overflow-x-auto">
              <div class="inline-block w-full min-w-max overflow-hidden">
                {unlimitedTeAccess?.vendors
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((vendor, index) => (
                    <>
                      <div className="mb-1 mt-3 text-2xl font-bold tracking-tight text-blue-700">
                        {vendor.vendor_title}
                      </div>
                      <Card
                        sx={{
                          padding: "15px",
                          borderRadius: "10px",
                          boxShadow: "inset 0px 0px 8px rgba(0, 0, 0, 0.5)",
                        }}
                      >
                        <table class="table-auto w-full">
                          <thead>
                            <tr>
                              <th class="pb-2 text-base pl-5 text-body text-left text-opacity-40 font-heading font-semibold uppercase">
                                <b>{vendor.vendor_title}</b>
                              </th>
                              <th class="pb-2 text-base text-body text-center text-opacity-40 font-heading font-semibold uppercase">
                                Question & Answer
                              </th>
                              <th class="pb-2 text-base text-body text-center text-opacity-40 font-heading font-semibold uppercase">
                                Action
                              </th>
                            </tr>
                          </thead>

                          <tbody className="mt-4">
                            {vendor?.exams.map((exam, index) => (
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
                                          <span className="text-blue-600 text-base">
                                            {exam.exam_code}
                                          </span>
                                          <br />
                                          <span className="text-green-500 mt-2 text-xs">
                                            {exam.exam_name}
                                          </span>
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
                                      {exam.exam_questions}
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
                                      <Tooltip title="Download Premium PDF File">
                                        <Link
                                          href={`https://api.dumpsboss.com${exam.download_url}`}
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
                                      <Tooltip title="Test Engine Access">
                                        <IconButton
                                          onClick={() => handleGetKey(exam)}
                                          className="bg-blue-400 h-10 w-10 hover:bg-blue-500 mr-1"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="2em"
                                            height="2em"
                                            viewBox="0 0 512 512"
                                          >
                                            <path
                                              fill="white"
                                              d="M328.9 17.89h-1.8c-8.2.27-18.6 2.98-31.8 8.59L59.61 126.4c-21.18 8.9-31.79 17.7-35.74 27.5c-3.95 9.7-2.41 23.4 6.57 44.6l49.95 117.8c8.97 21.2 17.72 31.8 27.51 35.7c9.7 4 23.4 2.5 44.6-6.5l235.7-99.9c13.5-5.7 22.7-11.3 28.6-17.2c4.5 5.5 8.7 11.6 12.2 18.2c3.8 7 6.8 14.4 8.9 21.8c-2.5-.3-5.1-.4-7.7-.4c-14.1.3-28.1 5.7-39.2 16.2c-20.6 19.6-24.2 50.4-10.1 73.8l-50.2 47.7l-22-5.9l.8 26.1l-27.4-.8l-2.6 29.4l-23.7-4.4l4.6 22.5l-17 21.5l62.8-10.9l104.9-100c20.2 7.5 43.7 3.4 60.5-12.6c23.7-22.5 24.9-59.9 2.5-83.9c-4.9-5.2-10.4-9.3-16.4-12.3c-2.1-12.5-6.7-24.9-12.8-36.3c-5.4-10-11.9-19.3-19.2-27c1.1-9.1-1.4-21.1-8.4-37.6L367.4 55.67c-8.9-21.17-17.7-31.78-27.5-35.74c-3.2-1.3-6.8-2-11-2.04m-15.6 50.96l7 16.58l-132.6 56.17l-7-16.6zm14.9 38.25l7 16.6l-73.7 31.2l-7-16.6zm-189.7 18.4L208 289.4l-90.3 38.2L51.81 172l-3.51-8.3zm206 17l7 16.6l-88.4 37.4l-7-16.6zm-215.6 6.6l-57 24.2L127.3 304l57.1-24.2zm255.7 25c13.1 0 23.9 10.3 24.9 23.1c-8.9-6-18.7-9.6-28.6-8.9c-1.7.1-3.4.3-5.1.7l4 17.6c6-1.4 14.6 1.2 23.8 8.5c0 0 .1 0 .1.1c-4.6 5.4-11.5 8.9-19.1 8.9c-13.7 0-25-11.3-25-25s11.3-25 25-25m53.7 120.1c.8 0 1.6 0 2.4.1c-.9 8.9-4.1 16.5-10.1 22.5l12.6 12.8c7.7-7.7 12.3-17.1 14.4-27.2c9.7 10.5 9.2 27.1-1.1 36.9c-10.4 9.9-26.9 9.4-36.6-1c-9.8-10.5-9.2-27.2 1.1-37c4.9-4.6 11.1-6.9 17.3-7.1"
                                            />
                                          </svg>
                                        </IconButton>
                                      </Tooltip>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </Card>
                    </>
                  ))}
              </div>
              <hr />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UnlimitedTeAccessPage;
