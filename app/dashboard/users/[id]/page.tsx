"use client";

import { Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";

export default function UserDetailPage() {
  const { id } = useParams(); // ✅ CORRECT
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    if (!id) return;

    axios
      .get(`https://dummyjson.com/users/${id}`)
      .then((res) => setUser(res.data))
      .catch(console.error);
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <Box sx={{ p: 2 }}>
      <Button onClick={() => router.back()} sx={{ mb: 2 }}>
        ⬅ Back
      </Button>

      <Typography variant="h5" gutterBottom>
        {user.firstName} {user.lastName}
      </Typography>

      <Typography>Email: {user.email}</Typography>
      <Typography>Phone: {user.phone}</Typography>
      <Typography>Company: {user.company?.name}</Typography>
      <Typography>City: {user.address?.city}</Typography>
    </Box>
  );
}
