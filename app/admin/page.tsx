"use client"

import { useState, useEffect } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell, Tooltip as PieTooltip, Legend as PieLegend } from 'recharts';
import { documentVerified, getAllUsers } from "@/services/admin";

// Define User interface based on schema
interface User {
  id: number;
  username: string;
  email: string;
  role: "vendor" | "buyer";
  is_active: boolean;
  visibility_level: number;
  ownership: {
    additionalProp1: string[];
    additionalProp2: string[];
    additionalProp3: string[];
  };
  kpi_score: number;
  partnership_level: string;
  retention_period: string;
  is_registered: "PENDING" | "APPROVED" | "REJECTED";
  registration_step: number;
}

// StatCard component
interface StatCardProps {
  title: string;
  value: number | string;
  description: string;
  trend?: { value: number; isPositive: boolean };
}

const StatCard: React.FC<StatCardProps> = ({ title, value, description, trend }) => {
  return (
    <div className="bg-white border border-blue-600 rounded-xl p-4 shadow-md transition-transform hover:scale-105">
      <h3 className="text-lg font-semibold text-blue-600">{title}</h3>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
      <p className="text-sm text-gray-500">{description}</p>
      {trend && (
        <p className={`text-sm ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {trend.isPositive ? '+' : '-'}{trend.value}%
        </p>
      )}
    </div>
  );
};

export default function VendorBuyerDashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch users from API and filter for vendors and buyers
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await getAllUsers();
       
        // Filter for only vendor and buyer roles
        const filteredUsers = (response.data || []).filter(
          (user: User) => user.role === "vendor" || user.role === "buyer"
        );
        setUsers(filteredUsers);
        setError(null);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch users. Please try again later.');
        console.error('Error fetching users:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Calculate stats for vendors and buyers
  const totalUsers = users.length;
  const vendors = users.filter((u) => u.role === "vendor").length;
  const buyers = users.filter((u) => u.role === "buyer").length;
  const activeUsers = users.filter((u) => u.is_active).length;
  const pendingUsers = users.filter((u) => u.is_registered === "PENDING").length;
  const approvedUsers = users.filter((u) => u.is_registered === "APPROVED").length;
  const averageKPI = users.length > 0 ? Math.round(users.reduce((sum, u) => sum + u.kpi_score, 0) / users.length) : 0;
  const highestKPI = users.length > 0 ? Math.max(...users.map((u) => u.kpi_score)) : 0;

  // Data for charts
  const kpiData = users.map(u => ({ name: u.username, kpi: u.kpi_score, role: u.role }));

  const registrationData = [
    { name: 'Pending', value: pendingUsers },
    { name: 'Approved', value: approvedUsers },
    { name: 'Rejected', value: users.filter((u) => u.is_registered === "REJECTED").length },
  ].filter(d => d.value > 0);

  const roleData = [
    { name: 'Vendors', value: vendors },
    { name: 'Buyers', value: buyers },
  ].filter(d => d.value > 0);

  const partnershipCounts = users.reduce((acc: Record<string, { count: number; totalKPI: number }>, u) => {
    if (!acc[u.partnership_level]) {
      acc[u.partnership_level] = { count: 0, totalKPI: 0 };
    }
    acc[u.partnership_level].count += 1;
    acc[u.partnership_level].totalKPI += u.kpi_score;
    return acc;
  }, {});

  const partnershipData = Object.keys(partnershipCounts).map(level => ({
    name: level.charAt(0).toUpperCase() + level.slice(1),
    value: partnershipCounts[level].count,
  }));

  const avgKPIPerPartnership = Object.keys(partnershipCounts).map(level => ({
    name: level.charAt(0).toUpperCase() + level.slice(1),
    avgKPI: partnershipCounts[level].count > 0 ? Math.round(partnershipCounts[level].totalKPI / partnershipCounts[level].count) : 0,
  }));

  const visibilityData = users.reduce((acc: Record<number, number>, u) => {
    acc[u.visibility_level] = (acc[u.visibility_level] || 0) + 1;
    return acc;
  }, {});

  const visibilityPieData = Object.keys(visibilityData).map(level => ({
    name: `Level ${level}`,
    value: visibilityData[parseInt(level)],
  }));

  const COLORS = ['#2563eb', '#1e40af', '#60a5fa', '#3b82f6', '#93c5fd'];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
    </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-red-600 text-lg">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8 space-y-8">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-600">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2 text-base sm:text-lg">Insights into your vendors and buyers.</p>
        </div>
        <div className="mt-4 sm:mt-0 sm:flex items-center space-x-4 hidden">
          <div className="bg-white rounded-xl px-4 py-2 border border-blue-600 shadow-sm">
            <span className="text-sm text-gray-500">Last updated:</span>
            <span className="text-sm font-medium text-gray-900 ml-1">{new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <StatCard title="Total Users" value={totalUsers} description="Vendors and buyers" trend={{ value: 10, isPositive: true }} />
        <StatCard title="Pending Registrations" value={pendingUsers} description="Awaiting approval" />
        <StatCard title="Approved Users" value={approvedUsers} description="Registration complete" />
        <StatCard title="Average KPI" value={averageKPI} description="Overall performance" trend={{ value: 6, isPositive: true }} />
      
      </div>

      {/* Graphs Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* KPI Scores Bar Chart */}
        <div className="bg-white border border-blue-600 rounded-xl p-4 sm:p-6 shadow-md">
          <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-4">KPI Scores per User</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={kpiData} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" fontSize={12} />
              <YAxis fontSize={12} />
              <Tooltip contentStyle={{ fontSize: 12 }} formatter={(value, name, props) => [value, `${props.payload.role} KPI`]} />
              <Legend formatter={(value) => 'KPI Score'} />
              <Bar dataKey="kpi" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Role Distribution Pie Chart */}
        <div className="bg-white border border-blue-600 rounded-xl p-4 sm:p-6 shadow-md">
          <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-4">Vendor vs Buyer Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={roleData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label={{ fontSize: 12 }}
              >
                {roleData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <PieTooltip contentStyle={{ fontSize: 12 }} />
              <PieLegend wrapperStyle={{ fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        

        {/* Partnership Levels Pie Chart */}
        <div className="bg-white border border-blue-600 rounded-xl p-4 sm:p-6 shadow-md">
          <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-4">Partnership Levels Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={partnershipData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label={{ fontSize: 12 }}
              >
                {partnershipData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <PieTooltip contentStyle={{ fontSize: 12 }} />
              <PieLegend wrapperStyle={{ fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Average KPI per Partnership Bar Chart */}
        <div className="bg-white border border-blue-600 rounded-xl p-4 sm:p-6 shadow-md">
          <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-4">Average KPI per Partnership Level</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={avgKPIPerPartnership} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" fontSize={12} />
              <YAxis fontSize={12} />
              <Tooltip contentStyle={{ fontSize: 12 }} />
              <Legend formatter={(value) => 'Average KPI'} />
              <Bar dataKey="avgKPI" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      
       
      </div>

    </div>
  );
}