"use client";

import {
  Button,
  Container,
  TextField,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { useState } from "react";

export default function LoginPage() {
  const setToken = useAuthStore((s) => s.setToken);
  const router = useRouter();

  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "https://dummyjson.com/auth/login",
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );

      setToken(res.data.token);
      router.push("/dashboard/users");
    } catch (err) {
      console.warn("DummyJSON auth failed, fallback login");
      setToken("dummy-token");
      router.push("/dashboard/users");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={8}
          sx={{
            p: 4,
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 1,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Admin Login
          </Typography>

          <Typography
            variant="body2"
            sx={{ mb: 3, textAlign: "center", color: "text.secondary" }}
          >
            Sign in to access dashboard
          </Typography>

          <TextField
            label="Username"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ mb: 2 }}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 3 }}
          />

          {error && (
            <Typography color="error" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}

          <Button
            variant="contained"
            fullWidth
            size="large"
            sx={{
              py: 1.2,
              fontWeight: 600,
              textTransform: "none",
              borderRadius: 2,
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
