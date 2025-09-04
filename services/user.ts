import api from "@/lib/axios";

export const get_product_by_user_id = (user_id: number) => {
    return api.get(`/admin/user-product_data/${user_id}`, {
      headers: {
        requiresAuth: true,
      },
    }); 
};