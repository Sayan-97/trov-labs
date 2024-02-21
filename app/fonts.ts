import MonaSans from "next/font/local";

export const monaSansFont = MonaSans({
  src: [
    {
      path: "../public/fonts/MonaSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/MonaSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/MonaSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/MonaSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});
