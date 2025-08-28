import api from "@/lib/axios"

export const postNotification = (body:any) => {
  return api.post(`/admin/notifications`, body, {
    headers: {
      requiresAuth: true,
    },
  });
};


export const getNotification = () =>{
    return api.get(`/notifications`, {
        headers: {
        requiresAuth: true,
        },
    });
}


export interface Notification {
  id: number
  admin_id: number
  user_id: number | null
  message: string
  target_type: string
  visibility: boolean
  created_at: string | null
}


export const filterNotificationsForUser = (
  notifications: Notification[],
  currentUserId: string | null,
): Notification[] => {
  return notifications.filter((notification) => {
    // Show notification if user_id is null (for all users)
    if (notification.user_id === null) {
      return true
    }
    // Show notification if user_id matches current user
    if (currentUserId && notification.user_id === Number.parseInt(currentUserId)) {
      return true
    }
    return false
  })
}