"use client";

import { Box, Card, CardMedia, Typography, Button } from "@mui/material";
import { useEffect } from "react";
import { useProductStore } from "@/store/productStore";
import { useParams, useRouter } from "next/navigation";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { selectedProduct, fetchProduct } = useProductStore();

  // Guard for id
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

  useEffect(() => {
    if (!id) return;
    fetchProduct(id);
  }, [id, fetchProduct]);

  if (!selectedProduct) return <div>Loading...</div>;

  // Ensure images is always array
  const images: string[] = Array.isArray(selectedProduct.images)
    ? selectedProduct.images
    : [];

  return (
    <Box sx={{ p: 2 }}>
      <Button onClick={() => router.back()} sx={{ mb: 2 }}>
        ⬅ Back
      </Button>

      <Typography variant="h4" gutterBottom>
        {selectedProduct.title}
      </Typography>
      <Typography variant="h6">${selectedProduct.price}</Typography>
      <Typography>Category: {selectedProduct.category}</Typography>
      <Typography>Rating: {selectedProduct.rating}</Typography>
      <Typography sx={{ mb: 2 }}>{selectedProduct.description}</Typography>

      {/* Images as responsive flex */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {images.map((img, i) => (
          <Card
            key={i}
            sx={{
              flex: "1 1 calc(33.333% - 16px)", // 3 per row, responsive
              minWidth: 200,
            }}
          >
            <CardMedia
              component="img"
              height={140}
              image={img}
              alt={selectedProduct.title}
            />
          </Card>
        ))}
      </Box>
    </Box>
  );
}
