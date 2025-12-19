// components/ProtectedRoute.tsx
"use client";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { Props } from "next/script";
import { useEffect } from "react";

export default function ProtectedRoute({ children }: Props) {
  const token = useAuthStore((s) => s.token);
  const router = useRouter();

  useEffect(() => {
    if (!token) router.push("/login");
  }, [token]);

  return children;
}
