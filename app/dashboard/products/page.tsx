"use client";

import {
  Box,
  TextField,
  MenuItem,
  Pagination,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useProductStore } from "@/store/productStore";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const { products, total, fetchProducts } = useProductStore();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchProducts((page - 1) * 10, search, category);
  }, [page, search, category, fetchProducts]);

  const categories = ["smartphones", "laptops", "fragrances", "skincare"]; // example

  return (
    <Box sx={{ p: 2 }}>
      <TextField
        label="Search Products"
        fullWidth
        sx={{ mb: 2 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <TextField
        select
        label="Category"
        fullWidth
        sx={{ mb: 2 }}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <MenuItem value="">All</MenuItem>
        {categories.map((c) => (
          <MenuItem key={c} value={c}>
            {c}
          </MenuItem>
        ))}
      </TextField>

      {/* Flex layout instead of Grid */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {products.map((p) => (
          <Card
            key={p.id}
            sx={{
              cursor: "pointer",
              flex: "1 1 calc(33.333% - 16px)", // 3 per row, responsive
              minWidth: 200,
            }}
            onClick={() => router.push(`/dashboard/products/${p.id}`)}
          >
            {p.images?.[0] && (
              <CardMedia
                component="img"
                height={140}
                image={p.images[0]}
                alt={p.title}
              />
            )}
            <CardContent>
              <Typography variant="h6">{p.title}</Typography>
              <Typography>${p.price}</Typography>
              <Typography>Category: {p.category}</Typography>
              <Typography>Rating: {p.rating}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Pagination
        count={Math.ceil(total / 10)}
        page={page}
        onChange={(_, v) => setPage(v)}
        sx={{ mt: 2 }}
      />
    </Box>
  );
}
