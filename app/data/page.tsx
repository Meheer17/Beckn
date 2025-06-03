
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";

interface Submission {
  id: number;
  name: string;
  role: string;
  phone: string;
  district: string;
  state: string;
  submittedAt: string;
}

export default function DataPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load data from localStorage
    try {
      const data = JSON.parse(localStorage.getItem("signupData") || "[]");
      setSubmissions(data);
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearData = () => {
    if (window.confirm("Are you sure you want to clear all submission data?")) {
      localStorage.removeItem("signupData");
      setSubmissions([]);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading submissions...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4 pt-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">UKI Registrations</h1>
        <div className="flex gap-4">
          <Button variant="outline" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
          <Button variant="destructive" onClick={clearData}>
            Clear All Data
          </Button>
        </div>
      </div>

      {submissions.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-lg text-gray-600">No submissions yet</p>
          <Link href="/" className="text-green-600 hover:underline mt-2 inline-block">
            Return to homepage to add users
          </Link>
        </div>
      ) : (
        <Table>
          <TableCaption>A list of all UKI registrations.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className="text-right">Submitted</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {submissions.map((submission) => (
              <TableRow key={submission.id}>
                <TableCell className="font-medium">{submission.name}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    submission.role === 'Farmer' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {submission.role}
                  </span>
                </TableCell>
                <TableCell>{submission.phone}</TableCell>
                <TableCell>{`${submission.district}, ${submission.state}`}</TableCell>
                <TableCell className="text-right">
                  {formatDistanceToNow(new Date(submission.submittedAt), { addSuffix: true })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
