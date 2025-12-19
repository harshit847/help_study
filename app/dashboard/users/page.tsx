"use client";

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Pagination,
  Box,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "next/navigation";

export default function UsersPage() {
  const { users, total, fetchUsers } = useUserStore();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchUsers((page - 1) * 10, search);
  }, [page, search, fetchUsers]);

  return (
    <Box>
      {/* Search */}
      <TextField
        label="Search Users"
        fullWidth
        sx={{ mb: 2 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Users Table */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Company</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((u) => (
            <TableRow
              key={u.id}
              hover
              sx={{ cursor: "pointer" }}
              onClick={() => router.push(`/dashboard/users/${u.id}`)}
            >
              <TableCell>
                {u.firstName} {u.lastName}
              </TableCell>
              <TableCell>{u.email}</TableCell>
              <TableCell>{u.gender}</TableCell>
              <TableCell>{u.phone}</TableCell>
              <TableCell>{u.company?.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <Pagination
        count={Math.ceil(total / 10)}
        page={page}
        onChange={(_, v) => setPage(v)}
        sx={{ mt: 2 }}
      />
    </Box>
  );
}
