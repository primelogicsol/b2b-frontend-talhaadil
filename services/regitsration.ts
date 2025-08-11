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
