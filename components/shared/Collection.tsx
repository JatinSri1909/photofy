import { IImage } from "@/lib/database/models/image.model";
import React from "react";

const Collection = ({
  hasSearch = false,
  images,
  totalPages = 1,
  page,
}: {
  images: IImage[];
  totalPages?: number;
  page: number;
  hasSearch?: boolean;
}) => {
  return <div>Collection</div>;
};

export default Collection;
