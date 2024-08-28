"use client";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Icon } from "@iconify/react";
import {
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const ScAccessAccordian = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedLecture, setSelectedLecture] = useState(null);

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleChange = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const handleLectureClick = (lecture) => {
    setSelectedLecture(lecture);
  };

  const handleVideoNext = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === selectedLecture?.lecture_videos.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  const handleVideoPrev = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0
        ? selectedLecture?.lecture_videos.length - 1
        : prevIndex - 1
    );
  };

  const handleCloseDialog = () => {
    setSelectedLecture(null);
    setCurrentVideoIndex(0);
  };

  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center relative overflow-hidden sm:p-4">
      {data?.sections.map((item, index) => {
        const { section_title, lectures } = item;
        return (
          <Accordion
            className="text-gray-600 "
            key={index}
            expanded={index === expandedIndex}
            onChange={() => handleChange(index)}
            sx={{ width: "100%", mb: "4px" }}
          >
            <AccordionSummary
              expandIcon={
                <Icon
                  icon="material-symbols:expand-more"
                  width="1.2em"
                  height="1.2em"
                  style={{ color: "#3D445A" }}
                />
              }
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <div className="flex items-center gap-2">
                <Icon
                  icon="streamline:live-video-solid"
                  width="1.2em"
                  height="1.2em"
                  style={{ color: "#3D445A" }}
                />
                <h4 className="font-medium text-sm text-gray-700">
                  {section_title}
                </h4>
              </div>
            </AccordionSummary>
            <Divider color="#3D445A" />
            <AccordionDetails>
              <div className="w-full bg-white p-1 mt-2">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-500 tracking-wider">
                        No
                      </th>
                      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
                        Lectures
                      </th>
                      <th className="px-6 py-3 border-b-2 border-gray-300  text-sm leading-4 text-gray-500 text-right tracking-wider">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  {lectures.map((lecture, index) => {
                    const {
                      lecture_seq,
                      lecture_title,
                      lecture_duration,
                      lecture_videos,
                    } = lecture;
                    return (
                      <tbody key={index} className="bg-white">
                        <tr onClick={() => handleLectureClick(lecture)}>
                          <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-500">
                            <div className="flex items-center">
                              <div>
                                <div className="text-md leading-5 text-gray-800">
                                  {lecture_seq}.
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-md leading-5 cursor-pointer">
                            {lecture_title}
                          </td>
                          <td className="px-6 py-2 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-md text-right leading-5">
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              ></span>
                              <span className="relative text-xs">
                                {lecture_duration}
                              </span>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
      <Dialog
        sx={{ borderRadius: "100px" }}
        open={!!selectedLecture}
        onClose={handleCloseDialog}
      >
        <DialogTitle sx={{ borderRadius: "0px" }} className="text-gray-600 ">
          {selectedLecture?.lecture_title} - Video ({currentVideoIndex + 1} /{" "}
          {selectedLecture?.lecture_videos.length})
        </DialogTitle>
        <Divider />
        <DialogContent className="text-gray-600 ">
          <div
            id="default-carousel"
            className="relative w-full"
            data-carousel="slide"
          >
            <div className="relative overflow-hidden rounded-lg ">
              {selectedLecture?.lecture_videos.map((video, index) => (
                <div
                  key={index}
                  className={`${
                    index === currentVideoIndex ? "" : "hidden"
                  } duration-700 ease-in-out`}
                  data-carousel-item
                >
                  <video controls width="100%" height="auto">
                    <source src={video.source} type={`video/${video.type}`} />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
        <Divider />
        <DialogActions className="text-gray-600 ">
          <div className="flex justify-between w-full">
            <button
              type="button"
              className="top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
              onClick={handleVideoPrev}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-gray-600 dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
              onClick={handleVideoNext}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-gray-600 dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
          <Button
            variant="contained"
            className="bg-red-600 text-white hover:bg-red-600"
            onClick={handleCloseDialog}
          >
            <span>Close</span>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ScAccessAccordian;
