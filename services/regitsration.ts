import api from "@/lib/axios";

export const sendLevel = (body: { levels: string[]; is_lateral: boolean }) => {
  console.log(body);
  return api.post("/registration/level", body, {
    headers: {
      requiresAuth: true,
    },
  });
};
export const sendInfo = (body: any) => {
  return api.post("/registration/info", body, {
    headers: {
      requiresAuth: true,
    },
  });
};
export const sendAgreement = (body: any) => {
  return api.post("/registration/agreement", body, {
    headers: {
      requiresAuth: true,
    },
  });
};
//

export const submitDocumentToAPI = async (body: any) => {
  const formData = new FormData();

  let fileUrl = "";

  // Upload first file to /api/upload to get Cloudinary URL
  if (body.files && Array.isArray(body.files) && body.files.length > 0) {
    const firstFile = body.files[0];

    const uploadForm = new FormData();
    uploadForm.append("file", firstFile);

    const ext = firstFile.name.split(".").pop()?.toLowerCase();
    uploadForm.append("doc_type", ext || "");

    const uploadRes = await fetch("/api/upload-pdf", {
      method: "POST",
      body: uploadForm,
    });

    if (!uploadRes.ok) {
      const errData = await uploadRes.json().catch(() => ({}));
      throw new Error(errData?.detail || "File upload failed");
    }
    const { url } = await uploadRes.json();
    fileUrl = url;
    formData.append("file_url", fileUrl);
  }

  // Still append the raw files for your backend
  if (body.files && Array.isArray(body.files)) {
    body.files.forEach((file: File) => {
      formData.append("files", file);
    });
  }

  return api.post(
    `/user/documents?document_type=${body.document_type}`,
    formData,
    {
      headers: {
        requiresAuth: true,
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export const submitProductsToAPI = (body: any) => {
  return api.post(`/registration/products`, body, {
    headers: {
      requiresAuth: true,
    },
  });
};

export const getDocumentStatus = () => {
  return api.get(`/user/documents/progress`, {
    headers: {
      requiresAuth: true,
    },
  });
};
export const getVerificationStatus = () => {
  return api.get(`/verification/status`, {
    headers: {
      requiresAuth: true,
    },
  });
};

export const getUserInfo = () => {
  return api.get(`/registration/registration_info`, {
    headers: {
      requiresAuth: true,
    },
  });
};

export const getDocumentProgress = () => {
  return api.get(`/user/documents/progress`, {
    headers: {
      requiresAuth: true,
    },
  });
};

export const reuploadDocument = (body: FormData) => {
  return api.post(`/user/reupload`, body, {
    headers: {
      requiresAuth: true,
      "Content-Type": "multipart/form-data",
    },
  });
};

export const checkRegistrationStatus = () => {
  return api.get(`/user/is-registered`, {
    headers: {
      requiresAuth: true,
    },
  });
};
