// Import necessary dependencies
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Define the Zod schema for validation
const schema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string(),
  startDate: z
    .string()
    .refine(
      (date) => /\d{2}\/\d{2}\/\d{4} \d{2}:\d{2} [APMapm]{2}/.test(date),
      {
        message: "Invalid date format. Please use DD/MM/YYYY HH:mm AM/PM.",
      }
    ),
  endDate: z
    .string()
    .refine(
      (date) => /\d{2}\/\d{2}\/\d{4} \d{2}:\d{2} [APMapm]{2}/.test(date),
      {
        message: "Invalid date format. Please use DD/MM/YYYY HH:mm AM/PM.",
      }
    ),
  color: z.string(),
  allDay: z.boolean(),
});

// Define the color options
const colorOptions = [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Orange",
  "Purple",
  "Pink",
  "Brown",
];

// Define the form data interface
interface FormData {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  color: string;
  allDay: boolean;
}

// Form component
const MyForm: React.FC = () => {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // Form submit handler
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data); // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="my-4">
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input {...register("title")} className="form-control" />
        {errors.title && <p className="text-danger">{errors.title.message}</p>}
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <input {...register("description")} className="form-control" />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Start Date</label>
        <input
          {...register("startDate")}
          className="form-control"
          placeholder="DD/MM/YYYY HH:mm AM/PM"
        />
        {errors.startDate && (
          <p className="text-danger">{errors.startDate.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">End Date</label>
        <input
          {...register("endDate")}
          className="form-control"
          placeholder="DD/MM/YYYY HH:mm AM/PM"
        />
        {errors.endDate && (
          <p className="text-danger">{errors.endDate.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Color</label>
        {colorOptions.map((color, index) => (
          <div key={index} className="form-check form-check-inline">
            <input
              type="radio"
              {...register("color")}
              value={color}
              id={color}
              className="form-check-input"
            />
            <label htmlFor={color} className="form-check-label">
              {color}
            </label>
          </div>
        ))}
      </div>

      {/* <div>
    <label className="form-label">All Day</label>
    <Controller
      control={control}
      name="allDay"
      render={({ field }) => <input type="checkbox" {...field} className="form-check-input" />}
    />
  </div> */}

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default MyForm;
