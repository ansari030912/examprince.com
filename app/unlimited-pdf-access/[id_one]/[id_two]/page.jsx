/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import withAuth from "@/app/auth/RouterAuth";
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
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
  CircularProgress,
  Icon,
  Pagination,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UnlimitedPDFPage = ({ params }) => {
  const router = useRouter();

  const [unlimitedTeAccess, setUnlimitedTeAccess] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Items to display per page
  const [totalPages, setTotalPages] = useState(0);

  const [bannerUrl, setBannerUrl] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState("A");
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setCurrentPage(1); // Reset to first page when selecting a new letter
    fetchData(letter);
  };

  const fetchData = async (letter = "A") => {
    setLoading(true);
    try {
      const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
      if (!loginResponse?._token) {
        return router.push("/sign-in");
      }
      const response = await axios.get(
        `${Base_URL}/v1/account/pdf-unlimited-access/${params.id_one}/${params.id_two}/${letter}`,
        {
          headers: {
            "x-api-key": X_API_Key,
            Authorization: `Bearer ${loginResponse._token}`,
          },
        }
      );
      setUnlimitedTeAccess(response.data);
      setTotalPages(Math.ceil(response.data.vendors.length / itemsPerPage));
      setLoading(false);
    } catch (error) {
      console.error("Error:", error.message);
      setLoading(false);
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
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

    fetchData(selectedLetter);
  }, [params.id_one, params.id_two]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedVendors = unlimitedTeAccess?.vendors?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

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
                Unlimited PDF Access
              </h2>
              <hr className="mb-4" style={{ border: "2px solid #F5F6FA" }} />
              <p class="text-gray-500 text-base mt-2 font-semibold max-w-xl">
                You have unlimited access to PDF Dumps files.
              </p>

              <p class="text-blue-500 text-base mt-2 font-semibold max-w-xl">
                You have downloaded: {unlimitedTeAccess?.total_downloaded}
              </p>

              <p class="text-green-500 text-base mt-2 font-semibold max-w-xl">
                Monthly Download Limit: {unlimitedTeAccess?.total_limit}
              </p>

              <p class="text-gray-500 text-base mt-2 font-semibold mb-6 max-w-xl">
                (Each download of a different or the same PDF file will affect
                the download limit)
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
                  Unlimited PDF Access!
                </div>
                <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                  <p>
                    Your Unlimited PDF access is not approved yet. We are
                    checking your payment so this might take a few hours. Please
                    contact our sales chat support or send an email to{" "}
                    <Link
                      href="mailto:sales@examprince.com"
                      className="text-blue-600"
                    >
                      sales@examprince.com
                    </Link>{" "}
                    for fast approval. Thank you.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

      {unlimitedTeAccess?.purchase_approved && (
        <section class="pb-4 bg-blueGray-50">
          <div class="container mx-auto">
            <div class="pt-14 px-8 pb-12 bg-white rounded-5xl">
              <div class="overflow-x-auto">
                <div class="inline-block w-full min-w-max overflow-hidden">
                  {selectedVendors?.map((vendor, index) => (
                    <div key={index}>
                      <div className="mb-1 mt-3 text-2xl pl-5 py-4 font-bold tracking-tight text-blue-700">
                        {vendor.vendor_title}
                      </div>
                      <Card
                        sx={{
                          padding: "15px",
                          borderRadius: "10px",
                          boxShadow:
                            "inset 0px 0px 8px rgba(0, 0, 0, 0.5)",
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
                              <th class="pb-2 text-base text-body text-right pr-4 text-opacity-40 font-heading font-semibold uppercase">
                                Downloads
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
                                        : "flex items-center pl-4 pr-4 h-20"
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
                                    <span class="font-heading text-darkBlueGray-400 text-lg">
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

              {/* Pagination Controls */}
              <div className="flex justify-between items-center mt-4">
                <div>
                  Showing {startIndex + 1} to{" "}
                  {Math.min(startIndex + itemsPerPage, unlimitedTeAccess?.vendors.length)}{" "}
                  of {unlimitedTeAccess?.vendors.length} exams
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outlined"
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default withAuth(UnlimitedPDFPage);
