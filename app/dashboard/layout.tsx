// src/app/dashboard/layout.tsx
"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  Container,
} from "@mui/material";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const logout = useAuthStore((s) => s.logout);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <ProtectedRoute>
      <Box sx={{ minHeight: "100vh", backgroundColor: "#f4f6f8" }}>
        {/* TOP NAVBAR */}
        <AppBar
          position="sticky"
          elevation={1}
          sx={{
            backgroundColor: "#ffffff",
            color: "#111",
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mr: 3 }}
            >
              Admin Dashboard
            </Typography>

            <Button
              component={Link}
              href="/dashboard/users"
              sx={{
                color: "text.primary",
                fontWeight: 500,
                textTransform: "none",
                mr: 1,
              }}
            >
              Users
            </Button>

            <Button
              component={Link}
              href="/dashboard/products"
              sx={{
                color: "text.primary",
                fontWeight: 500,
                textTransform: "none",
              }}
            >
              Products
            </Button>

            <Box sx={{ flexGrow: 1 }} />

            <Button
              variant="outlined"
              color="error"
              onClick={handleLogout}
              sx={{ textTransform: "none", fontWeight: 500 }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>

        {/* PAGE CONTENT */}
        <Container maxWidth="xl" sx={{ py: 4 }}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 2,
              p: 3,
              boxShadow: 1,
            }}
          >
            {children}
          </Box>
        </Container>
      </Box>
    </ProtectedRoute>
  );
}
