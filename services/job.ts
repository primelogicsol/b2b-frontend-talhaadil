
import api from "@/lib/axios";

export const getAllJobs = () => {
  return api.get(`/jobs`, {
    headers: {
      requiresAuth: true,
    },
  });
};

export const getJobDetails = (id: number) => {
  return api.get(`/admin/jobs/${id}`, {
    headers: {
      requiresAuth: true,
    },
  });
};

export const createJob = (jobData: {
  title: string;
  location: string;
  type: string;
  summary: string;
  description: string;
  requirements: string;
  salary_range: string;
  application_deadline: string;
}) => {
  return api.post(`/jobs`, jobData, {
    headers: {
      requiresAuth: true,
    },
  });
};

export const updateJob = (
  jobId: number,
  jobData: {
    title: string;
    location: string;
    type: string;
    summary: string;
    description: string;
    requirements: string;
    salary_range: string;
    application_deadline: string;
  }
) => {
  return api.post(
    `/jobs/update`,
    jobData,
    {
      headers: {
        requiresAuth: true,
      },
      params: {
        job_id: jobId,
      },
    }
  );
};

export const deleteJob = (id: number) => {
  return api.delete(`/jobs/${id}`, {
    headers: {
      requiresAuth: true,
    },
  });
};
