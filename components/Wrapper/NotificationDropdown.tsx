"use client";

import { useState, useEffect, useRef } from "react";
import { Bell, X } from "lucide-react";
import Link from "next/link";
import {
  getNotification,
  filterNotificationsForUser,
  type Notification,
} from "@/services/notification";
import Cookies from "js-cookie";
export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
        const sortedNotifications = filteredNotifications
          .sort((a, b) => b.id - a.id)
          .slice(0, 4);

        setNotifications(sortedNotifications);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-[var(--primary-hover-color)] hover:text-[var(--primary-color)] hover:bg-[var(--secondary-light-color)] rounded-md transition-colors"
      >
        <Bell className="h-5 w-5" />
        {/* Always show red dot */}
        <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-[var(--secondary-light-color)] z-50">
          <div className="flex items-center justify-between p-4 border-b border-[var(--secondary-light-color)]">
            <h3 className="text-lg font-semibold text-[var(--primary-color)]">
              Notifications
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-[var(--secondary-light-color)] rounded-md transition-colors"
            >
              <X className="h-4 w-4 text-[var(--primary-hover-color)]" />
            </button>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {loading ? (
              <div className="p-4 text-center text-[var(--primary-hover-color)]">
                Loading notifications...
              </div>
            ) : notifications.length === 0 ? (
              <div className="p-4 text-center text-[var(--primary-hover-color)]">
                No notifications found
              </div>
            ) : (
              <div className="divide-y divide-[var(--secondary-light-color)]">
                {notifications.map((notification) => {
                  const formattedDate = new Date(
                    notification.created_at ?? ""
                  ).toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  });

                  return (
                    <div
                      key={notification.id}
                      className="p-4 hover:bg-[var(--secondary-light-color)] transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-sm text-[var(--primary-color)] font-medium">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {formattedDate}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="p-4 border-t border-[var(--secondary-light-color)]">
            <Link
              href="/user/notifications"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-2 px-4 bg-[var(--primary-color)] text-white rounded-md hover:bg-[var(--primary-hover-color)] transition-colors text-sm font-medium"
            >
              View All Notifications
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
