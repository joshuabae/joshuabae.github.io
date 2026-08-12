// Mosaic photo gallery shown at the bottom of the home page.
// To add a photo: drop the file in src/assets/gallery/, import it here,
// and add an entry below. `span` controls the mosaic tile size.
import weddingPhoto from "@/assets/josh-photo.jpg";

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption?: string;
  /** Mosaic tile size: "tall" (spans 2 rows), "wide" (spans 2 cols), or "square" */
  span?: "tall" | "wide" | "square";
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: weddingPhoto,
    alt: "Josh on the dance floor at a wedding",
    caption: "2026",
    span: "tall",
  },
];
