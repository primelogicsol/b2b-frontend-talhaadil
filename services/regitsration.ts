import api from "@/lib/axios";

export const sendLevel = (body: { levels: [string]; is_lateral: boolean }) => {
    console.log(body)
  return api.post("/registration/level", body, {
    headers: {
      requiresAuth: true,
    },
  });
};
export const sendInfo = (body : any) => {
  return api.post("/registration/info", body, {
    headers: {
      requiresAuth: true,
    },
  });
};
export const submitDocumentToAPI = (body: any) => {
  const formData = new FormData();
  formData.append("file", body.file); // only 'file' — no 'file_name'
    console.log(formData)
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


