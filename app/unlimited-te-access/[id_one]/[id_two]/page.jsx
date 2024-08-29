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
  CircularProgress,
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
  const [bannerUrl, setBannerUrl] = useState({});
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [loading, setLoading] = useState(false);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    fetchData(letter);
  };

  const fetchData = async (letter) => {
    setLoading(true);
    const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    try {
      const response = await axios.get(
        `${Base_URL}/v1/account/te-unlimited-access/${params.id_one}/${params.id_two}/${letter}`,
        {
          headers: {
            "x-api-key": X_API_Key,
            Authorization: `Bearer ${loginResponse._token}`,
          },
        }
      );
      setUnlimitedTeAccess(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error.message);
      setLoading(false);
    } finally {
      setLoading(false); // Hide loading spinner
    }
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
        `${Base_URL}${exam.activation_keys_url}`,
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
    const fetchBanner = async () => {
      try {
        const bannerResponse = await axios.get(`${Base_URL}/v1/banner`, {
          headers: {
            "x-api-key": X_API_Key,
          },
        });
        setBannerUrl(bannerResponse.data);
      } catch (error) {
        console.error("Error fetching banner:", error.message);
      }
    };

    fetchBanner();

    if (!unlimitedTeAccess) {
      fetchData(selectedLetter);
    }
  }, [params.id_one, params.id_two]);

  return (
    <>
      {loading && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <CircularProgress />
        </Box>
      )}

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
      <section className="pt-6 pb-6 px-6 bg-white">
        {bannerUrl?.banner_link ? (
          <Link
            href={bannerUrl.banner_link}
            className="flex justify-center mb-4"
          >
            <img src={bannerUrl?.banner_src} alt={bannerUrl?.banner_website} />
          </Link>
        ) : (
          <div className="flex justify-center mb-4">
            <img src={bannerUrl?.banner_src} alt={bannerUrl?.banner_website} />
          </div>
        )}
      </section>

      <section class="px-6 bg-white">
        <div class="flex flex-wrap -m-4">
          <div class="w-full lg:w-4/12 p-12">
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
            <div class="p-5 pt-20">
              <h2 class="font-heading uppercase text-3xl mb-2 max-w-xl">
                Unlimited Test Engine Access
              </h2>
              <hr className="mb-4" style={{ border: "2px solid #F5F6FA" }} />
              <p class="text-gray-500 text-base mt-2 font-semibold max-w-xl">
                You have unlimited access to Test Engine Dumps files.
              </p>

              <p class="text-blue-500 text-base mt-2 font-semibold max-w-xl">
                You have downloaded: {unlimitedTeAccess?.total_downloaded}
              </p>

              <p class="text-green-500 text-base mt-2 font-semibold max-w-xl">
                Monthly Download Limit: {unlimitedTeAccess?.total_limit}
              </p>

              <p class="text-gray-500 text-base mt-2 font-semibold mb-6 max-w-xl">
                (Each download of a different or the same Test Engine file will
                affect the download limit)
              </p>
              <p class="text-red-500 text-base mt-2 font-semibold mb-6 max-w-xl">
                (For Activation Key. Must have to download TEST ENGINE file
                first.)
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className="container m-auto" />
      {/* Alphabet Pagination */}
      {unlimitedTeAccess?.purchase_approved && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          className="container mx-auto"
          mb={-8}
          sx={{
            flexWrap: "wrap",
            gap: 2, // Add some gap between buttons for better spacing
            padding: { xs: "10px", sm: "15px", md: "20px" }, // Responsive padding
          }}
        >
          {alphabet.map((letter) => (
            <Button
              key={letter}
              variant={selectedLetter === letter ? "contained" : "outlined"}
              onClick={() => handleLetterClick(letter)}
              sx={{
                margin: "0 5px",
                padding: { xs: "5px 10px", sm: "7px 15px", md: "10px 20px" }, // Responsive padding
                minWidth: { xs: "30px", sm: "40px", md: "50px" }, // Responsive width
                fontSize: { xs: "12px", sm: "14px", md: "16px" }, // Responsive font size
              }}
            >
              {letter}
            </Button>
          ))}
        </Box>
      )}

      {unlimitedTeAccess?.purchase_valid &&
        !unlimitedTeAccess?.purchase_approved && (
          <section class="pt-6 pb-6 container mx-auto px-6 bg-white">
            <div className="text-center">
              <div role="alert">
                <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                  Unlimited Test Engine Access!
                </div>
                <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                  <p>
                    {" "}
                    Your Unlimited Test Engine access is not approved yet. We
                    are checking your payment so this might take a few hours.
                    Please contact our sales chat support or send an email to{" "}
                    <a
                      href="mailto:sales@examprince.com"
                      className="text-blue-600"
                    >
                      sales@examprince.com
                    </a>{" "}
                    for fast approval. Thank you.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

      {unlimitedTeAccess?.purchase_approved && (
        <section className="b-8 bg-blueGray-50">
          <div className="container mx-auto">
            <div className="pt-14 px-6 2xl:px-0 pb-12 bg-white rounded-5xl">
              <div className="overflow-x-auto">
                <div className="inline-block w-full min-w-max overflow-hidden">
                  {unlimitedTeAccess?.vendors
                    ?.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    .map((vendor, index) => (
                      <div key={index}>
                        <div className="mb-1 mt-3 text-2xl pl-5 py-4 font-bold tracking-tight text-blue-700">
                          {vendor.vendor_title}
                        </div>
                        <Card
                          sx={{
                            padding: "15px",
                            borderRadius: "10px",
                            boxShadow: "inset 0px 0px 8px rgba(0, 0, 0, 0.5)",
                          }}
                        >
                          <table className="table-auto w-full">
                            <thead>
                              <tr>
                                <th className="pb-2 text-base pl-5 text-body text-left text-opacity-40 font-heading font-semibold uppercase">
                                  <b>{vendor.vendor_title}</b>
                                </th>
                                <th className="pb-2 text-base text-body text-center text-opacity-40 font-heading font-semibold uppercase">
                                  Question & Answer
                                </th>
                                <th className="pb-2 text-base text-body text-right pr-4 text-opacity-40 font-heading font-semibold uppercase">
                                  Downloads
                                </th>
                              </tr>
                            </thead>

                            <tbody className="mt-4">
                              {vendor?.exams.map((exam, examIndex) => (
                                <tr
                                  key={examIndex}
                                  style={{ borderRadius: "4px" }}
                                >
                                  <td className="p-0">
                                    <div
                                      className={`${
                                        examIndex % 2 === 0
                                          ? "flex items-center pl-4 pr-4 h-20 bg-blueGray-50 border-l border-t border-b border-gray-100 bg-gray-50 rounded-tl-2xl rounded-bl-2xl"
                                          : "flex items-center pl-4 pr-4 h-20"
                                      }`}
                                    >
                                      <div className="flex items-center">
                                        <img
                                          className="mr-4 h-8"
                                          src="/placeholder-icon2.png"
                                          alt=""
                                        />
                                        <div className="flex-shrink-1">
                                          <h4 className="font-heading text-wrap font-medium leading-4 text-lg">
                                            <span className="text-blue-600 text-base">
                                              {exam.exam_code}
                                            </span>
                                            <br />
                                            <span className="text-green-500 w-48 mt-2 text-xs break-words whitespace-normal">
                                              {exam.exam_name}
                                            </span>
                                          </h4>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="p-0">
                                    <div
                                      className={`${
                                        examIndex % 2 === 0
                                          ? "flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100 bg-gray-50"
                                          : "flex items-center justify-center p-5 h-20 text-center"
                                      }`}
                                    >
                                      <span className="font-heading text-darkBlueGray-400 text-lg">
                                        {exam.exam_questions}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="p-0">
                                    <div
                                      className={`${
                                        examIndex % 2 === 0
                                          ? "flex items-center justify-end pr-6 h-20 text-right bg-blueGray-50 border-t border-b border-r border-gray-100 bg-gray-50 rounded-tr-2xl rounded-br-2xl"
                                          : "flex items-center justify-end pr-6 h-20 text-right"
                                      }`}
                                    >
                                      <div className="flex justify-end">
                                        <Tooltip title="Download Premium TE File">
                                          <Link
                                            href={`https://certsgang.com${exam.download_url}`}
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
                                                  d="M6 3v26h20V9.6l-.3-.3l-6-6l-.3-.3zm2 2h10v6h6v16H8zm12 1.4L22.6 9H20zM15 13v5h-3l4 4l4-4h-3v-5zm-3 10v2h8v-2z"
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
                                              viewBox="0 0 24 24"
                                            >
                                              <g
                                                fill="white"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                              >
                                                <path d="M15.68 5.348a2.95 2.95 0 0 0-2.953 2.946a2.95 2.95 0 0 0 2.954 2.945a2.95 2.95 0 0 0 2.954-2.945a2.95 2.95 0 0 0-2.954-2.946m-1.453 2.946a1.45 1.45 0 0 1 1.454-1.446c.806 0 1.454.65 1.454 1.446a1.45 1.45 0 0 1-1.454 1.445a1.45 1.45 0 0 1-1.454-1.445" />
                                                <path d="M9.53 20.878a2.2 2.2 0 0 0 .432-1.355c.392.116.78.13 1.152.06c.768-.146 1.337-.632 1.639-1.032l.005-.007l.005-.007a2.42 2.42 0 0 0 .396-2.02a2.9 2.9 0 0 0-.36-.85a2.2 2.2 0 0 0-.272-.393l.009-.01l.464-.462c.382.183.796.298 1.158.373a8 8 0 0 0 1.523.162c3.901 0 7.069-3.15 7.069-7.044c0-3.892-3.168-7.043-7.07-7.043c-3.9 0-7.069 3.15-7.069 7.043a6.5 6.5 0 0 0 .57 2.635l-7.256 7.226a2.37 2.37 0 0 0-.648 1.255c-.099.603.063 1.274.648 1.856l.882.878l.042.04a2.46 2.46 0 0 0 1.197.544a1.98 1.98 0 0 0 1.73-.584l.566-.564a2.33 2.33 0 0 0 1.617.276a2.62 2.62 0 0 0 1.56-.963l.006-.007zm.581-12.585c0-3.058 2.491-5.543 5.57-5.543c3.078 0 5.569 2.485 5.569 5.543c0 3.06-2.49 5.544-5.57 5.544c-.272 0-.743-.033-1.218-.13c-.497-.104-.887-.257-1.095-.43a.75.75 0 0 0-1.008.047l-.882.878c-.201.2-.395.428-.498.691c-.13.333-.088.653.06.92c.088.157.23.307.289.37l.02.021c.07.077.107.127.135.183l.027.053l.03.042l.007.01q.014.023.042.076c.038.073.082.176.11.297a.92.92 0 0 1-.15.79c-.14.183-.407.396-.714.454c-.258.049-.678.017-1.238-.54a.75.75 0 0 0-1.059 0l-.294.292a.75.75 0 0 0-.032 1.03q.018.024.055.08c.048.075.104.18.144.3c.076.225.088.466-.095.726c-.12.155-.363.332-.639.384c-.234.045-.534.012-.872-.325a.75.75 0 0 0-1.059 0l-1.029 1.025c-.165.164-.31.183-.452.162a1 1 0 0 1-.424-.187l-.857-.854c-.239-.237-.248-.42-.227-.55a.87.87 0 0 1 .227-.436l7.644-7.613a.746.746 0 0 0 .105-.925l-.002-.003a2 2 0 0 1-.082-.15a5 5 0 0 1-.538-2.232m-1.91 10.583q0 .002.004.005l-.001-.001z" />
                                              </g>
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
                      </div>
                    ))}
                </div>
                <hr />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default UnlimitedTeAccessPage;
