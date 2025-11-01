"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  DollarSign,
  Globe,
  Users,
  TrendingUp,
  Award,
  Leaf,
  Target,
  Key,
  Heart,
  Clock,
  Star,
} from "lucide-react";
import { useGlobalContext } from "@/context/ScreenProvider";

// Updated categories array with JSON data
const categories = [
  {
    name: "Boutique",
    id: "cat1",
    subcategories: [
      {
        name: "Pashmina",
        id: "pashmina",
        details: {
          global_share: "12.5%",
          global_export: "11.5%",
          artisans: "2850",
          market_growth: "36.0% YoY",
          quality_rating: "4.9/5",
          sustainability: "96.0%",
          product_range: "2010",
          customer_satisfaction: "99.0%",
          avg_production_time: "720 Days",
          innovation_index: "4.8/5",
        },
      },
      {
        name: "Kani",
        id: "kani",
        details: {
          global_share: "8.2%",
          global_export: "7.544%",
          artisans: "1870",
          market_growth: "30.8% YoY",
          quality_rating: "4.83/5",
          sustainability: "94.6%",
          product_range: "1319",
          customer_satisfaction: "98.0%",
          avg_production_time: "485 Days",
          innovation_index: "4.7/5",
        },
      },
      {
        name: "Cashmere",
        id: "cashmere",
        details: {
          global_share: "1.2%",
          global_export: "1.104%",
          artisans: "274",
          market_growth: "22.3% YoY",
          quality_rating: "4.44/5",
          sustainability: "88.5%",
          product_range: "193",
          customer_satisfaction: "94.3%",
          avg_production_time: "40 Days",
          innovation_index: "4.25/5",
        },
      },
      {
        name: "Silk",
        id: "silk",
        details: {
          global_share: "0.8%",
          global_export: "0.736%",
          artisans: "182",
          market_growth: "21.8% YoY",
          quality_rating: "4.43/5",
          sustainability: "88.3%",
          product_range: "129",
          customer_satisfaction: "94.2%",
          avg_production_time: "29 Days",
          innovation_index: "4.23/5",
        },
      },
      {
        name: "Jewelry",
        id: "jewelry",
        details: {
          global_share: "0.6%",
          global_export: "0.552%",
          artisans: "137",
          market_growth: "21.5% YoY",
          quality_rating: "4.42/5",
          sustainability: "88.2%",
          product_range: "96",
          customer_satisfaction: "94.1%",
          avg_production_time: "23 Days",
          innovation_index: "4.22/5",
        },
      },
      {
        name: "Bags",
        id: "bags",
        details: {
          global_share: "0.5%",
          global_export: "0.46%",
          artisans: "114",
          market_growth: "21.4% YoY",
          quality_rating: "4.41/5",
          sustainability: "88.2%",
          product_range: "80",
          customer_satisfaction: "94.1%",
          avg_production_time: "20 Days",
          innovation_index: "4.22/5",
        },
      },
      {
        name: "Jackets",
        id: "jackets",
        details: {
          global_share: "0.5%",
          global_export: "0.46%",
          artisans: "114",
          market_growth: "21.4% YoY",
          quality_rating: "4.41/5",
          sustainability: "88.2%",
          product_range: "80",
          customer_satisfaction: "94.1%",
          avg_production_time: "20 Days",
          innovation_index: "4.22/5",
        },
      },
      {
        name: "Pherans",
        id: "pherans",
        details: {
          global_share: "0.5%",
          global_export: "0.46%",
          artisans: "114",
          market_growth: "21.4% YoY",
          quality_rating: "4.41/5",
          sustainability: "88.2%",
          product_range: "80",
          customer_satisfaction: "94.1%",
          avg_production_time: "20 Days",
          innovation_index: "4.22/5",
        },
      },
      {
        name: "Sarongs",
        id: "sarongs",
        details: {
          global_share: "0.4%",
          global_export: "0.368%",
          artisans: "91",
          market_growth: "21.3% YoY",
          quality_rating: "4.41/5",
          sustainability: "88.1%",
          product_range: "64",
          customer_satisfaction: "94.1%",
          avg_production_time: "17 Days",
          innovation_index: "4.21/5",
        },
      },
      {
        name: "Purses",
        id: "purses",
        details: {
          global_share: "0.4%",
          global_export: "0.368%",
          artisans: "91",
          market_growth: "21.3% YoY",
          quality_rating: "4.41/5",
          sustainability: "88.1%",
          product_range: "64",
          customer_satisfaction: "94.1%",
          avg_production_time: "17 Days",
          innovation_index: "4.21/5",
        },
      },
      {
        name: "Kaftans",
        id: "kaftans",
        details: {
          global_share: "0.4%",
          global_export: "0.368%",
          artisans: "91",
          market_growth: "21.3% YoY",
          quality_rating: "4.41/5",
          sustainability: "88.1%",
          product_range: "64",
          customer_satisfaction: "94.1%",
          avg_production_time: "17 Days",
          innovation_index: "4.21/5",
        },
      },
      {
        name: "Kurtas",
        id: "kurtas",
        details: {
          global_share: "0.4%",
          global_export: "0.368%",
          artisans: "91",
          market_growth: "21.3% YoY",
          quality_rating: "4.41/5",
          sustainability: "88.1%",
          product_range: "64",
          customer_satisfaction: "94.1%",
          avg_production_time: "17 Days",
          innovation_index: "4.21/5",
        },
      },
    ],
  },
  {
    name: "Ceiling Treatment",
    id: "cat6",
    subcategories: [
      {
        name: "Ceiling Treatment (Khatamband)",
        id: "ceiling",
        details: {
          global_share: "0.2%",
          global_export: "0.184%",
          artisans: "46",
          market_growth: "21.1% YoY",
          quality_rating: "4.5/5",
          sustainability: "88.0%",
          product_range: "32",
          customer_satisfaction: "93.0%",
          avg_production_time: "11 Days",
          innovation_index: "4.3/5",
        },
      },
    ],
  },
  {
    name: "Culinary Craft",
    id: "cat11",
    subcategories: [
      {
        name: "Kashmiri Wazwan Canned Food",
        id: "wazwan",
        details: {
          global_share: "0.25%",
          global_export: "0.23%",
          artisans: "57",
          market_growth: "21.1% YoY",
          quality_rating: "4.5/5",
          sustainability: "88.0%",
          product_range: "40",
          customer_satisfaction: "93.0%",
          avg_production_time: "11 Days",
          innovation_index: "4.3/5",
        },
      },
      {
        name: "Kahwa & Pink Tea",
        id: "kahwa",
        details: {
          global_share: "0.15%",
          global_export: "0.138%",
          artisans: "34",
          market_growth: "21.0% YoY",
          quality_rating: "4.5/5",
          sustainability: "88.0%",
          product_range: "24",
          customer_satisfaction: "93.0%",
          avg_production_time: "10 Days",
          innovation_index: "4.3/5",
        },
      },
    ],
  },
  {
    name: "Dining & Serving Ware",
    id: "cat3",
    subcategories: [
      {
        name: "Silverware",
        id: "silverware",
        details: {
          global_share: "0.5%",
          global_export: "0.46%",
          artisans: "114",
          market_growth: "21.4% YoY",
          quality_rating: "4.51/5",
          sustainability: "88.1%",
          product_range: "80",
          customer_satisfaction: "93.1%",
          avg_production_time: "15 Days",
          innovation_index: "4.31/5",
        },
      },
      {
        name: "Papermachieware",
        id: "papermachieware",
        details: {
          global_share: "0.4%",
          global_export: "0.368%",
          artisans: "91",
          market_growth: "21.3% YoY",
          quality_rating: "4.5/5",
          sustainability: "88.1%",
          product_range: "64",
          customer_satisfaction: "93.1%",
          avg_production_time: "13 Days",
          innovation_index: "4.31/5",
        },
      },
      {
        name: "Walnutware",
        id: "walnutware",
        details: {
          global_share: "0.3%",
          global_export: "0.276%",
          artisans: "68",
          market_growth: "21.2% YoY",
          quality_rating: "4.5/5",
          sustainability: "88.0%",
          product_range: "48",
          customer_satisfaction: "93.0%",
          avg_production_time: "12 Days",
          innovation_index: "4.3/5",
        },
      },
      {
        name: "Copperware",
        id: "copperware",
        details: {
          global_share: "0.3%",
          global_export: "0.276%",
          artisans: "68",
          market_growth: "21.2% YoY",
          quality_rating: "4.5/5",
          sustainability: "88.0%",
          product_range: "48",
          customer_satisfaction: "93.0%",
          avg_production_time: "12 Days",
          innovation_index: "4.3/5",
        },
      },
    ],
  },
  {
    name: "Embroidery",
    id: "cat12",
    subcategories: [
      {
        name: "Suzani/Sozni – Fine Needlework",
        id: "sozni",
        details: {
          global_share: "3.2%",
          global_export: "2.944%",
          artisans: "730",
          market_growth: "24.7% YoY",
          quality_rating: "4.75/5",
          sustainability: "93.0%",
          product_range: "515",
          customer_satisfaction: "96.7%",
          avg_production_time: "212 Days",
          innovation_index: "4.57/5",
        },
      },
      {
        name: "Zardozi – Metal Thread Work",
        id: "zardozi",
        details: {
          global_share: "2.8%",
          global_export: "2.576%",
          artisans: "638",
          market_growth: "24.2% YoY",
          quality_rating: "4.74/5",
          sustainability: "92.9%",
          product_range: "450",
          customer_satisfaction: "96.6%",
          avg_production_time: "190 Days",
          innovation_index: "4.56/5",
        },
      },
      {
        name: "Ari/Aari – Hook Work",
        id: "aari",
        details: {
          global_share: "2.4%",
          global_export: "2.208%",
          artisans: "547",
          market_growth: "23.7% YoY",
          quality_rating: "4.74/5",
          sustainability: "92.7%",
          product_range: "386",
          customer_satisfaction: "96.5%",
          avg_production_time: "168 Days",
          innovation_index: "4.55/5",
        },
      },
      {
        name: "Kashidakari – Surface Embroidery",
        id: "kashidakari",
        details: {
          global_share: "2.2%",
          global_export: "2.024%",
          artisans: "502",
          market_growth: "23.5% YoY",
          quality_rating: "4.73/5",
          sustainability: "92.7%",
          product_range: "354",
          customer_satisfaction: "96.5%",
          avg_production_time: "157 Days",
          innovation_index: "4.55/5",
        },
      },
      {
        name: "Zalakdozi – Crewel Work",
        id: "zalakdozi",
        details: {
          global_share: "2.0%",
          global_export: "1.84%",
          artisans: "456",
          market_growth: "23.2% YoY",
          quality_rating: "4.73/5",
          sustainability: "92.6%",
          product_range: "322",
          customer_satisfaction: "96.4%",
          avg_production_time: "146 Days",
          innovation_index: "4.54/5",
        },
      },
      {
        name: "Jaaldar – Net Work",
        id: "jaaldar",
        details: {
          global_share: "1.6%",
          global_export: "1.472%",
          artisans: "365",
          market_growth: "22.8% YoY",
          quality_rating: "4.72/5",
          sustainability: "92.5%",
          product_range: "257",
          customer_satisfaction: "96.4%",
          avg_production_time: "124 Days",
          innovation_index: "4.54/5",
        },
      },
      {
        name: "Dorukh – Double-sided Work",
        id: "dorukh",
        details: {
          global_share: "1.2%",
          global_export: "1.104%",
          artisans: "274",
          market_growth: "22.3% YoY",
          quality_rating: "4.72/5",
          sustainability: "92.3%",
          product_range: "193",
          customer_satisfaction: "96.3%",
          avg_production_time: "102 Days",
          innovation_index: "4.53/5",
        },
      },
      {
        name: "Papier-Mâché Inspired Embroidery",
        id: "paperMachieInspired",
        details: {
          global_share: "0.8%",
          global_export: "0.736%",
          artisans: "182",
          market_growth: "21.8% YoY",
          quality_rating: "4.71/5",
          sustainability: "92.2%",
          product_range: "129",
          customer_satisfaction: "96.2%",
          avg_production_time: "81 Days",
          innovation_index: "4.52/5",
        },
      },
    ],
  },
  {
    name: "Furniture",
    id: "cat5",
    subcategories: [
      {
        name: "Walnut Wood Carving Furniture",
        id: "walnut",
        details: {
          global_share: "7.5%",
          global_export: "6.9%",
          artisans: "1710",
          market_growth: "29.9% YoY",
          quality_rating: "4.75/5",
          sustainability: "91.8%",
          product_range: "1206",
          customer_satisfaction: "96.8%",
          avg_production_time: "441 Days",
          innovation_index: "4.62/5",
        },
      },
      {
        name: "Crewel Upholstered Furniture",
        id: "crewel",
        details: {
          global_share: "4.5%",
          global_export: "4.14%",
          artisans: "1026",
          market_growth: "26.3% YoY",
          quality_rating: "4.69/5",
          sustainability: "91.1%",
          product_range: "724",
          customer_satisfaction: "96.1%",
          avg_production_time: "273 Days",
          innovation_index: "4.57/5",
        },
      },
      {
        name: "Room Dividers",
        id: "roomDivider",
        details: {
          global_share: "3.0%",
          global_export: "2.76%",
          artisans: "684",
          market_growth: "24.5% YoY",
          quality_rating: "4.66/5",
          sustainability: "90.7%",
          product_range: "482",
          customer_satisfaction: "95.7%",
          avg_production_time: "189 Days",
          innovation_index: "4.55/5",
        },
      },
      {
        name: "Wicker Furniture",
        id: "wicker",
        details: {
          global_share: "0.2%",
          global_export: "0.184%",
          artisans: "46",
          market_growth: "21.1% YoY",
          quality_rating: "4.6/5",
          sustainability: "90.0%",
          product_range: "32",
          customer_satisfaction: "95.0%",
          avg_production_time: "33 Days",
          innovation_index: "4.5/5",
        },
      },
    ],
  },
  {
    name: "Hide Craft",
    id: "cat10",
    subcategories: [
      {
        name: "Leather",
        id: "leather",
        details: {
          global_share: "1.5%",
          global_export: "1.38%",
          artisans: "342",
          market_growth: "22.6% YoY",
          quality_rating: "4.52/5",
          sustainability: "88.4%",
          product_range: "241",
          customer_satisfaction: "93.4%",
          avg_production_time: "29 Days",
          innovation_index: "4.33/5",
        },
      },
      {
        name: "Fur & Astrakhan",
        id: "astrakhan",
        details: {
          global_share: "0.2%",
          global_export: "0.184%",
          artisans: "46",
          market_growth: "21.1% YoY",
          quality_rating: "4.5/5",
          sustainability: "88.0%",
          product_range: "32",
          customer_satisfaction: "93.0%",
          avg_production_time: "11 Days",
          innovation_index: "4.3/5",
        },
      },
    ],
  },
  {
    name: "Interior Décor",
    id: "cat2",
    subcategories: [
      {
        name: "Papier-Mâché",
        id: "papierMachie",
        details: {
          global_share: "6.0%",
          global_export: "5.52%",
          artisans: "1368",
          market_growth: "28.1% YoY",
          quality_rating: "4.69/5",
          sustainability: "91.9%",
          product_range: "965",
          customer_satisfaction: "96.4%",
          avg_production_time: "183 Days",
          innovation_index: "4.52/5",
        },
      },
      {
        name: "Tapestry",
        id: "tapestry",
        details: {
          global_share: "5.0%",
          global_export: "4.6%",
          artisans: "1140",
          market_growth: "26.9% YoY",
          quality_rating: "4.68/5",
          sustainability: "91.6%",
          product_range: "804",
          customer_satisfaction: "96.2%",
          avg_production_time: "155 Days",
          innovation_index: "4.5/5",
        },
      },
      {
        name: "Jeweled Wall Hangings",
        id: "jeweled",
        details: {
          global_share: "4.5%",
          global_export: "4.14%",
          artisans: "1026",
          market_growth: "26.3% YoY",
          quality_rating: "4.67/5",
          sustainability: "91.4%",
          product_range: "724",
          customer_satisfaction: "96.1%",
          avg_production_time: "142 Days",
          innovation_index: "4.49/5",
        },
      },
      {
        name: "Sofa & Cushion Covers",
        id: "sofaCushion",
        details: {
          global_share: "3.5%",
          global_export: "3.22%",
          artisans: "798",
          market_growth: "25.1% YoY",
          quality_rating: "4.65/5",
          sustainability: "91.1%",
          product_range: "563",
          customer_satisfaction: "95.8%",
          avg_production_time: "114 Days",
          innovation_index: "4.47/5",
        },
      },
      {
        name: "Office Accessories",
        id: "officeAcc",
        details: {
          global_share: "0.6%",
          global_export: "0.552%",
          artisans: "137",
          market_growth: "21.5% YoY",
          quality_rating: "4.61/5",
          sustainability: "90.1%",
          product_range: "96",
          customer_satisfaction: "95.1%",
          avg_production_time: "33 Days",
          innovation_index: "4.41/5",
        },
      },
      {
        name: "Room Divider Screens",
        id: "roomDividerSec",
        details: {
          global_share: "0.5%",
          global_export: "0.46%",
          artisans: "114",
          market_growth: "21.4% YoY",
          quality_rating: "4.61/5",
          sustainability: "90.1%",
          product_range: "80",
          customer_satisfaction: "95.1%",
          avg_production_time: "30 Days",
          innovation_index: "4.41/5",
        },
      },
      {
        name: "Bed Linens",
        id: "bedLinens",
        details: {
          global_share: "0.4%",
          global_export: "0.368%",
          artisans: "91",
          market_growth: "21.3% YoY",
          quality_rating: "4.6/5",
          sustainability: "90.1%",
          product_range: "64",
          customer_satisfaction: "95.1%",
          avg_production_time: "27 Days",
          innovation_index: "4.41/5",
        },
      },
    ],
  },
  {
    name: "Recycled Craft",
    id: "cat8",
    subcategories: [
      {
        name: "Papier-Mâché (Recycled)",
        id: "papier-machie",
        details: {
          global_share: "0.25%",
          global_export: "0.23%",
          artisans: "57",
          market_growth: "21.1% YoY",
          quality_rating: "4.6/5",
          sustainability: "90.0%",
          product_range: "40",
          customer_satisfaction: "95.0%",
          avg_production_time: "23 Days",
          innovation_index: "4.4/5",
        },
      },
      {
        name: "Gabba",
        id: "gabba",
        details: {
          global_share: "0.15%",
          global_export: "0.138%",
          artisans: "34",
          market_growth: "21.0% YoY",
          quality_rating: "4.6/5",
          sustainability: "90.0%",
          product_range: "24",
          customer_satisfaction: "95.0%",
          avg_production_time: "20 Days",
          innovation_index: "4.4/5",
        },
      },
    ],
  },
  {
    name: "Rugs & Carpets",
    id: "cat4",
    subcategories: [
      {
        name: "Rugs & Carpets",
        id: "rugs",
        details: {
          global_share: "9.5%",
          global_export: "8.74%",
          artisans: "2166",
          market_growth: "32.4% YoY",
          quality_rating: "4.79/5",
          sustainability: "92.3%",
          product_range: "1528",
          customer_satisfaction: "97.3%",
          avg_production_time: "552 Days",
          innovation_index: "4.65/5",
        },
      },
      {
        name: "Namda Embroidery Rugs",
        id: "namda",
        details: {
          global_share: "5.5%",
          global_export: "5.06%",
          artisans: "1254",
          market_growth: "27.5% YoY",
          quality_rating: "4.71/5",
          sustainability: "91.3%",
          product_range: "884",
          customer_satisfaction: "96.3%",
          avg_production_time: "329 Days",
          innovation_index: "4.59/5",
        },
      },
    ],
  },
  {
    name: "Sports Craft",
    id: "cat9",
    subcategories: [
      {
        name: "Cricket Bat",
        id: "circketBat",
        details: {
          global_share: "0.25%",
          global_export: "0.23%",
          artisans: "57",
          market_growth: "21.1% YoY",
          quality_rating: "4.5/5",
          sustainability: "88.0%",
          product_range: "40",
          customer_satisfaction: "93.0%",
          avg_production_time: "11 Days",
          innovation_index: "4.3/5",
        },
      },
      {
        name: "Chess Board",
        id: "chess-board",
        details: {
          global_share: "0.15%",
          global_export: "0.138%",
          artisans: "34",
          market_growth: "21.0% YoY",
          quality_rating: "4.5/5",
          sustainability: "88.0%",
          product_range: "24",
          customer_satisfaction: "93.0%",
          avg_production_time: "10 Days",
          innovation_index: "4.3/5",
        },
      },
    ],
  },
  {
    name: "Window Treatment",
    id: "cat7",
    subcategories: [
      {
        name: "Crewel – Embroidery Curtains",
        id: "crewel_embroi",
        details: {
          global_share: "2.6%",
          global_export: "2.392%",
          artisans: "593",
          market_growth: "24.0% YoY",
          quality_rating: "4.64/5",
          sustainability: "90.8%",
          product_range: "418",
          customer_satisfaction: "95.6%",
          avg_production_time: "88 Days",
          innovation_index: "4.45/5",
        },
      },
      {
        name: "Pinjrakaari – Kashmir Lattice Work",
        id: "pinjrakari",
        details: {
          global_share: "0.2%",
          global_export: "0.184%",
          artisans: "46",
          market_growth: "21.1% YoY",
          quality_rating: "4.6/5",
          sustainability: "90.0%",
          product_range: "32",
          customer_satisfaction: "95.0%",
          avg_production_time: "21 Days",
          innovation_index: "4.4/5",
        },
      },
    ],
  },
];

// MetricCard component remains unchanged
interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  position: "left" | "right";
  index: number;
  is4K: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({
  icon,
  title,
  value,
  position,
  index,
  is4K,
}) => (
  <motion.div
    className={`flex items-center gap-4 ${position === "right" ? "flex-row-reverse text-right" : ""
      }`}
    initial={{ opacity: 0, x: position === "right" ? 50 : -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.2 },
    }}
  >
    <motion.div
      className={`flex-shrink-0 ${is4K ? "w-16 h-16" : "w-12 h-12"
        } bg-[var(--primary-color)] rounded-full flex items-center justify-center cursor-pointer shadow-lg`}
      whileHover={{
        backgroundColor: "#ffffff",
        rotate: 360,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="text-gray-400"
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>
    </motion.div>
    <motion.div
      whileHover={{ x: position === "right" ? -5 : 5 }}
      transition={{ duration: 0.2 }}
    >
      <motion.h3
        className={`${is4K ? "text-2xl" : "text-sm md:text-md lg:text-lg"
          } text-white font-semibold mb-1`}
        whileHover={{ color: "#808080" }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h3>
      <motion.p
        className={`${is4K ? "text-3xl" : "text-xl"} text-gray-300`}
        whileHover={{ color: "#ffffff" }}
        transition={{ duration: 0.2 }}
      >
        {value}
      </motion.p>
    </motion.div>
  </motion.div>
);

export default function KashmirCraftsCarousel() {
  const { is4K } = useGlobalContext();
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [selectedSubcategoryIndex, setSelectedSubcategoryIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const categoryScrollRef = useRef<HTMLDivElement>(null);
  const subcategoryScrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentCategory = categories[currentCategoryIndex];
  const selectedSubcategory =
    currentCategory.subcategories[selectedSubcategoryIndex];

  // Touch handlers for swipe functionality
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextCategory();
    }
    if (isRightSwipe) {
      prevCategory();
    }
  };

  const nextCategory = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setCurrentCategoryIndex((prev) => (prev + 1) % categories.length);
    setSelectedSubcategoryIndex(0);
  };

  const prevCategory = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setCurrentCategoryIndex(
      (prev) => (prev - 1 + categories.length) % categories.length
    );
    setSelectedSubcategoryIndex(0);
  };

  const scrollToCategory = (index: number, e?: React.MouseEvent) => {
    e?.preventDefault();
    setCurrentCategoryIndex(index);
    setSelectedSubcategoryIndex(0);
  };

  const selectSubcategory = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedSubcategoryIndex(index);
  };

  // Scroll functions for mobile
  const scrollCategoryLeft = () => {
    if (categoryScrollRef.current) {
      categoryScrollRef.current.scrollBy({ left: -150, behavior: "smooth" });
    }
  };

  const scrollCategoryRight = () => {
    if (categoryScrollRef.current) {
      categoryScrollRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

  const scrollSubcategoryLeft = () => {
    if (subcategoryScrollRef.current) {
      subcategoryScrollRef.current.scrollBy({ left: -120, behavior: "smooth" });
    }
  };

  const scrollSubcategoryRight = () => {
    if (subcategoryScrollRef.current) {
      subcategoryScrollRef.current.scrollBy({ left: 120, behavior: "smooth" });
    }
  };

  const getMetricIcon = (key: string) => {
    const iconSize = is4K ? 32 : 24;
    const iconProps = { size: iconSize, className: "text-gray-400" };
    switch (key) {
      case "global_share":
        return <Target {...iconProps} />;
      case "global_export":
        return <Globe {...iconProps} />;
      case "artisans":
        return <Users {...iconProps} />;
      case "market_growth":
        return <TrendingUp {...iconProps} />;
      case "quality_rating":
        return <Award {...iconProps} />;
      case "sustainability":
        return <Leaf {...iconProps} />;
      case "product_range":
        return <Key {...iconProps} />;
      case "customer_satisfaction":
        return <Heart {...iconProps} />;
      case "avg_production_time":
        return <Clock {...iconProps} />;
      case "innovation_index":
        return <Star {...iconProps} />;
      default:
        return (
          <div
            className={`w-${is4K ? "8" : "6"} h-${is4K ? "9" : "6"
              } rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]`}
          />
        );
    }
  };

  const formatMetricKey = (key: string) => {
    return key
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const detailsKeys = Object.keys(selectedSubcategory.details);
  const leftColumnDetails = detailsKeys.slice(0, 5);
  const rightColumnDetails = detailsKeys.slice(5);

  const createDottedEarth = () => {
    const dots = [];
    const radius = is4K ? 450 : 300;
    const centerX = 400;
    const centerY = 400;

    for (let ring = 0; ring < 4; ring++) {
      const currentRadius = radius - ring * (is4K ? 90 : 60);
      const dotsInRing = Math.max(24 - ring * 4, 8);

      for (let i = 0; i < dotsInRing; i++) {
        const angle = (i / dotsInRing) * 2 * Math.PI;
        const x = centerX + Math.cos(angle) * currentRadius;
        const y = centerY + Math.sin(angle) * currentRadius;

        dots.push(
          <motion.circle
            key={`${ring}-${i}`}
            cx={x}
            cy={y}
            r={(is4K ? 3 : 2) + ring * (is4K ? 0.75 : 0.5)}
            fill="rgba(59, 130, 246, 0.3)"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              delay: ring * 0.2 + i * 0.1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        );
      }
    }

    const continentPaths = [
      { x: 350, y: 320, size: is4K ? 4.5 : 3 },
      { x: 420, y: 350, size: is4K ? 3.75 : 2.5 },
      { x: 480, y: 380, size: is4K ? 6 : 4 },
      { x: 380, y: 380, size: is4K ? 5.25 : 3.5 },
      { x: 320, y: 480, size: is4K ? 3 : 2 },
      { x: 520, y: 480, size: is4K ? 3.75 : 2.5 },
    ];

    continentPaths.forEach((continent, index) => {
      dots.push(
        <motion.circle
          key={`continent-${index}`}
          cx={continent.x}
          cy={continent.y}
          r={continent.size}
          fill="rgba(34, 197, 94, 1)"
          initial={{ opacity: 0.7 }}
          animate={{
            opacity: [0.8, 1, 0.8],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4,
            delay: index * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      );
    });

    return dots;
  };

  return (
    <div
      ref={containerRef}
      className={`${is4K ? "py-30" : ""
        } bg-gradient-to-br from-slate-900 via-[var(--primary-hover-color)] to-slate-900 relative overflow-hidden`}
      style={
        {
          "--primary-hover-color": "#2a5f7a",
          "--primary-color": "#1b4f68",
          "--secondary-color": "#d85834",
          "--secondary-light-color": "#f9c6b2",
        } as React.CSSProperties
      }
    >
      {/* Animated Dotted Earth Background */}
      <motion.div
        className={`absolute inset-0 flex items-center justify-center opacity-100`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 60,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <svg width="800" height="800" viewBox="0 0 800 800">
          {createDottedEarth()}
          <motion.circle
            cx="400"
            cy="400"
            r={is4K ? "525" : "350"}
            fill="none"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="1"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.circle
            cx="400"
            cy="400"
            r={is4K ? "420" : "280"}
            fill="none"
            stroke="rgba(34, 197, 94, 0.2)"
            strokeWidth="1"
            strokeDasharray="3,3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 4,
              delay: 1,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
        </svg>
      </motion.div>

      {/* Header */}
      <motion.div
        className="relative z-10 text-center py-8 px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className={`${is4K ? "text-8xl" : "text-4xl md:text-6xl"
            } font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4 tracking-tight`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          Dekoshur Crafts
        </motion.h1>
        <motion.p
          className={`${is4K ? "text-3xl" : "text-lg md:text-xl"
            } text-gray-300 font-light tracking-wide`}
          whileHover={{ scale: 1.02, color: "#fb923c" }}
          transition={{ duration: 0.2 }}
        >
          Hand ♡ Made | Kashmir India Sourced
        </motion.p>
      </motion.div>

      {/* Mobile Category Slider with Scroll Buttons */}
      <div className="lg:hidden px-4 mb-8 relative z-10">
        <div className="flex items-center gap-2">
          <motion.button
            onClick={scrollCategoryLeft}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm shadow-lg flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </motion.button>

          <div
            ref={categoryScrollRef}
            className="flex flex-grow gap-3 overflow-x-auto no-scrollbar pb-2"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                id={`category-btn-${category.id}`}
                onClick={(e) => scrollToCategory(index, e)}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg backdrop-blur-sm ${currentCategoryIndex === index
                    ? "bg-[var(--secondary-color)] text-white scale-105 shadow-[var(--secondary-color)]/30"
                    : "bg-white/10 text-gray-200 hover:bg-white/20"
                  }`}
                style={{ scrollSnapAlign: "center" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          <motion.button
            onClick={scrollCategoryRight}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm shadow-lg flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </div>

      {/* Desktop Category Navigation */}
      <div className="hidden lg:flex items-center justify-center mb-12 px-8 relative z-10">
        <div
          className="flex items-center"
          style={{ width: is4K ? "800px" : "500px" }}
        >
          <motion.button
            onClick={(e) => prevCategory(e)}
            className={`group flex-shrink-0 flex items-center justify-center ${is4K ? "w-20 h-20" : "w-16 h-16"
              } rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm shadow-xl`}
            aria-label="Previous category"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft
              className={`${is4K ? "w-12 h-12" : "w-8 h-8"
                } text-white group-hover:text-[var(--secondary-color)] transition-colors`}
            />
          </motion.button>

          <motion.div
            className="text-center cursor-pointer select-none flex-1 px-6"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className={`${is4K ? "text-4xl" : "text-2xl lg:text-3xl"
                } font-bold text-white mb-2 tracking-tight break-words`}
              whileHover={{ scale: 1.02, color: "#fb923c" }}
              transition={{ duration: 0.2 }}
            >
              {currentCategory.name}
            </motion.h2>
            <div className="flex justify-center space-x-2 mt-4">
              {categories.map((_, index) => (
                <motion.div
                  key={index}
                  className={`${is4K ? "w-4 h-4" : "w-3 h-3"
                    } rounded-full transition-all duration-300 ${currentCategoryIndex === index
                      ? "bg-[var(--secondary-color)] scale-125"
                      : "bg-white/30 hover:bg-white/50"
                    }`}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>

          <motion.button
            onClick={(e) => nextCategory(e)}
            className={`group flex-shrink-0 flex items-center justify-center ${is4K ? "w-20 h-20" : "w-16 h-16"
              } rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm shadow-xl`}
            aria-label="Next category"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight
              className={`${is4K ? "w-12 h-12" : "w-8 h-8"
                } text-white group-hover:text-[var(--secondary-color)] transition-colors`}
            />
          </motion.button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 px-4 md:px-8 pb-12">
        {/* Desktop Layout: Left Details + Center Tabs + Right Details */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto">
          <div className="col-span-4 space-y-8">
            {leftColumnDetails.map((key, index) => (
              <MetricCard
                key={key}
                icon={getMetricIcon(key)}
                title={formatMetricKey(key)}
                value={
                  selectedSubcategory.details[
                  key as keyof typeof selectedSubcategory.details
                  ]
                }
                position="left"
                index={index}
                is4K={is4K}
              />
            ))}
          </div>

          <motion.div
            className="col-span-4 bg-slate-800/40 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 shadow-2xl h-[545px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{
              backgroundColor: "rgba(30, 41, 59, 0.6)",
              borderColor: "rgba(71, 85, 105, 0.7)",
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.h3
                className={`${is4K ? "text-5xl" : "text-3xl"
                  } font-bold text-white mb-2`}
                whileHover={{ scale: 1.05, color: "#fb923c" }}
                transition={{ duration: 0.2 }}
              >
                {currentCategory.name}
              </motion.h3>
              <motion.p
                className={`${is4K ? "text-2xl" : "text-lg"
                  } text-gray-300 font-medium`}
                whileHover={{ color: "#ffffff" }}
                transition={{ duration: 0.2 }}
              >
                Product Range
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {currentCategory.subcategories.map((sub, index) => (
                <motion.button
                  key={sub.id}
                  onClick={(e) => selectSubcategory(index, e)}
                  className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg ${is4K ? "text-xl" : "text-base"
                    } ${selectedSubcategoryIndex === index
                      ? "bg-[var(--secondary-color)] text-white scale-105"
                      : "bg-slate-700/50 text-gray-200 border border-slate-600/30 hover:bg-slate-600/50"
                    }`}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    whileHover={{ fontWeight: 600 }}
                    transition={{ duration: 0.2 }}
                  >
                    {sub.name}
                  </motion.span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="col-span-4 space-y-8">
            {rightColumnDetails.map((key, index) => (
              <MetricCard
                key={key}
                icon={getMetricIcon(key)}
                title={formatMetricKey(key)}
                value={
                  selectedSubcategory.details[
                  key as keyof typeof selectedSubcategory.details
                  ]
                }
                position="right"
                index={index}
                is4K={is4K}
              />
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden max-w-4xl mx-auto">
          <motion.div
            className="bg-slate-800/40 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-700/50 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="text-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {currentCategory.name}
              </h3>
              <p className="text-base md:text-lg text-gray-200">
                Product Range
              </p>
            </motion.div>

            <div className="flex items-center gap-2">
              <motion.button
                onClick={scrollSubcategoryLeft}
                className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </motion.button>

              <div
                ref={subcategoryScrollRef}
                className="flex flex-nowrap no-scrollbar overflow-x-auto whitespace-nowrap gap-3 pb-2 flex-grow"
                style={{ scrollSnapType: "x mandatory" }}
              >
                {currentCategory.subcategories.map((sub, index) => (
                  <motion.button
                    key={sub.id}
                    onClick={(e) => selectSubcategory(index, e)}
                    className={`flex-shrink-0 px-4 py-3 rounded-xl font-medium text-sm md:text-base transition-all duration-300 shadow-lg backdrop-blur-sm ${selectedSubcategoryIndex === index
                        ? "bg-[var(--secondary-color)] text-white scale-105 shadow-[var(--secondary-color)]/30"
                        : "bg-slate-700/50 text-gray-200 hover:bg-slate-600/50 border border-slate-600/30"
                      }`}
                    style={{ scrollSnapAlign: "start" }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(249, 115, 22, 0.2)",
                      borderColor: "rgba(249, 115, 22, 0.5)",
                      color: "#fb923c",
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      whileHover={{ fontWeight: 600 }}
                      transition={{ duration: 0.2 }}
                    >
                      {sub.name}
                    </motion.span>
                  </motion.button>
                ))}
              </div>

              <motion.button
                onClick={scrollSubcategoryRight}
                className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {detailsKeys.map((key, index) => (
              <MetricCard
                key={key}
                icon={getMetricIcon(key)}
                title={formatMetricKey(key)}
                value={
                  selectedSubcategory.details[
                  key as keyof typeof selectedSubcategory.details
                  ]
                }
                position="left"
                index={index}
                is4K={is4K}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}