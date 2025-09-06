import api from "@/lib/axios";

export const get_product_by_user_id = (user_id: number) => {
    return api.get(`/user/user-product_data/${user_id}`, {
      headers: {
        requiresAuth: true,
      },
    }); 
};


export const getCurrentLevel = () =>{
    return api.get(`/verification/current-partnership`, {
      headers: {
        requiresAuth: true,
      },
    });
}

export const getAvaliableLevels = () =>{
    return api.get(`/verification/available-partnerships`, {
      headers: {
        requiresAuth: true,
      },
    });
}

