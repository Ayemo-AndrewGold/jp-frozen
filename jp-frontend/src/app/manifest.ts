import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JP-Froze Foods",
    short_name: "JP-Froze",
    description: "Quality frozen foods, delivered cold across Sango Ota and Ogun State.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f4",
    theme_color: "#245b4d",
    categories: ["shopping", "food"],
  };
}
