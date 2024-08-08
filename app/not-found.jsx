/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Container } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const redirectHome = setTimeout(() => {
      router.replace("/");
    }, 0); // Redirect immediately

    return () => clearTimeout(redirectHome);
  }, []); // Run only once on component mount

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        backgroundImage: `url('/pattern-white.png')`,
      }}
    >
      <section class="py-24 md:py-32" style={{}}>
        <div class="container px-4 mx-auto">
          <div class="max-w-sm mx-auto">
            <div class="mb-6 text-center">
              <h3 class="mb-4 text-2xl md:text-3xl font-bold">
                EXAMPRINCE.COM
              </h3>
              <p class="text-lg text-coolGray-500 font-medium">
                404 | Page Not Found
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
