"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

// Define interfaces for type safety
interface FormData {
  name: string;
  role: string;
  phone: string;
  district: string;
  state: string;
}

interface FormErrors {
  name?: string;
  role?: string;
  phone?: string;
  district?: string;
  state?: string;
}

// Mock API service
const api = {
  signup: async (userData: FormData) => {
    return new Promise<{ success: boolean }>((resolve) => {
      setTimeout(() => {
        // Get existing submissions or initialize empty array
        const existingData = JSON.parse(
          localStorage.getItem("signupData") || "[]",
        );

        // Add new submission with timestamp
        const newData = [
          ...existingData,
          {
            ...userData,
            id: Date.now(),
            submittedAt: new Date().toISOString(),
          },
        ];

        // Store updated data
        localStorage.setItem("signupData", JSON.stringify(newData));
        resolve({ success: true });
      }, 800); // Simulate network delay
    });
  },
};

export default function TypePage() {
  const params = useParams();
  const router = useRouter();
  const type = params.type as string;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    role: type === "farmer" ? "Farmer" : type === "buyer" ? "Buyer" : "",
    phone: "",
    district: "",
    state: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Validate the URL parameter
  useEffect(() => {
    if (type !== "farmer" && type !== "buyer") {
      router.push("/");
    }
  }, [type, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.role) newErrors.role = "Role is required";

    // Phone number validation (10 digits)
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.district.trim()) newErrors.district = "District is required";
    if (!formData.state.trim()) newErrors.state = "State is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await api.signup(formData);
        setSubmitted(true);
      } catch (error) {
        console.error("Submission error:", error);
        alert("There was an error submitting your form. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-green-600">
              Thank You!
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Your registration as a {formData.role.toLowerCase()} has been
              successfully submitted.
            </p>
            <div className="mt-6">
              <Link href="/" className="text-green-600 hover:text-green-500">
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Join UKI as a {type === "farmer" ? "Farmer" : "Buyer"}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Fill in your details below to get started with our agriculture
            network
          </p>
        </div>

        <form
          className="mt-8 space-y-6 bg-white p-8 rounded-lg shadow"
          onSubmit={handleSubmit}
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.name ? "border-red-300" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                Role
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.role ? "border-red-300" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500`}
              >
                <option value="">Select Role</option>
                <option value="Farmer">Farmer</option>
                <option value="Buyer">Buyer</option>
              </select>
              {errors.role && (
                <p className="mt-1 text-sm text-red-600">{errors.role}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.phone ? "border-red-300" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500`}
                placeholder="10-digit mobile number"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="district"
                className="block text-sm font-medium text-gray-700"
              >
                District
              </label>
              <input
                id="district"
                name="district"
                type="text"
                value={formData.district}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.district ? "border-red-300" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500`}
              />
              {errors.district && (
                <p className="mt-1 text-sm text-red-600">{errors.district}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State
              </label>
              <input
                id="state"
                name="state"
                type="text"
                value={formData.state}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.state ? "border-red-300" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500`}
              />
              {errors.state && (
                <p className="mt-1 text-sm text-red-600">{errors.state}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </div>

          <div className="text-center">
            <Link
              href="/"
              className="text-sm text-green-600 hover:text-green-500"
            >
              Back to Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
