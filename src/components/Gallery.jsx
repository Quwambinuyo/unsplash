import axios from "axios";
import React from "react";
import { useQuery } from "@tanstack/react-query";

const url =
  "https://api.unsplash.com/search/photos?client_id=WvXsev_jeSuqrVGunnTdFT_7j4UgSsvrxAx0e3sNu70&query=cat";

const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);

      return result.data;
    },
  });

  console.log(response);
  return <h2>Gallery</h2>;
};

export default Gallery;
