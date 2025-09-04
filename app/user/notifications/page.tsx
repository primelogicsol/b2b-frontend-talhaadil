"use client";

import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import {
  getNotification,
  filterNotificationsForUser,
  type Notification,
} from "@/services/notification";
import Cookies from "js-cookie";
export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      setLoading(true);
      try {
        const response = await getNotification();
        const allNotifications = response.data as Notification[];
        const currentUserId = Cookies.get("user_id") ?? null;
        const filteredNotifications = filterNotificationsForUser(
          allNotifications,
          currentUserId
        );
        // Sort by ID in descending order and take only first 4
        const sortedNotifications = filteredNotifications.sort(
          (a, b) => b.id - a.id
        );

        setNotifications(sortedNotifications);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Link
          href="/user/dashboard"
          className="p-2 hover:bg-[var(--secondary-light-color)] rounded-md transition-colors"
        >
          <ArrowLeft className="h-5 w-5 text-[var(--primary-hover-color)]" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-[var(--primary-color)]">
            All Notifications
          </h1>
          <p className="text-[var(--primary-hover-color)] mt-1">
            {notifications.length} notification
            {notifications.length !== 1 ? "s" : ""} found
          </p>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[var(--primary-color)]"></div>
        </div>
      ) : notifications.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-[var(--primary-hover-color)] mb-2">
            No notifications found
          </div>
          <p className="text-sm text-[var(--secondary-color)]">
            You'll see notifications here when they're available
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {notifications.map((notification) => {
            const formattedDate = new Date(notification.created_at ?? "");
            return (
              <div
                key={notification.id}
                className="bg-white border border-[var(--secondary-light-color)] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-[var(--primary-color)] font-medium mb-2">
                      {notification.message}
                    </p>
                    <span className="text-xs text-[var(--primary-hover-color)]">
                      {formattedDate.toLocaleDateString()}{" "}
                      {formattedDate.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
