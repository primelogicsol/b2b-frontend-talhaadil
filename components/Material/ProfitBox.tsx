"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
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
  Zap,
  Star,
} from "lucide-react"
import { useGlobalContext } from "@/context/ScreenProvider"
const categories = [
  {
    name: "Boutique",
    id: "cat1",
    subcategories: [
      {
        name: "Pashmina",
        id: "pashmina",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Cashmere",
        id: "cashmere",
        details: {
          annual_revenue: "$140M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Kani",
        id: "kani",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Silk",
        id: "silk",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Sarongs",
        id: "sarongs",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Bags",
        id: "bags",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Purses",
        id: "purses",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Jackets",
        id: "jackets",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Kaftans",
        id: "kaftans",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Kurtas",
        id: "kurtas",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Pherans",
        id: "pherans",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Jewelry",
        id: "jewelry",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
    ],
  },
  {
    name: "Interior Décor",
    id: "cat2",
    subcategories: [
      {
        name: "Papier-Mache",
        id: "papierMachie",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Tapestry",
        id: "tapestry",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Jeweled Wall Hangings",
        id: "jeweled",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Office Accessories",
        id: "officeAcc",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Room Divider Screens",
        id: "roomDividerSec",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Sofa and Cushion Covers",
        id: "sofaCushion",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Bed Linens",
        id: "bedLinens",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
    ],
  },
  {
    name: "Dining & Serving Ware",
    id: "cat3",
    subcategories: [
      {
        name: "Papermachieware",
        id: " papermachieware",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Walnutware",
        id: "walnutware",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Silverware",
        id: "silverware",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Copperware",
        id: "copperware",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
    ],
  },
  {
    name: "Rugs and Carpets",
    id: "cat4",
    subcategories: [
      {
        name: "Rugs and Carpets",
        id: "rugs",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Namda Embroidery Rugs",
        id: "namda",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
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
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Crewel Upholstered Furniture",
        id: "crewel",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Wicker Furniture",
        id: "wicker",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Room Dividers",
        id: "roomDivider",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
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
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
    ],
  },
  {
    name: "Window Treatment",
    id: "cat7",
    subcategories: [
      {
        name: "Pinjrakari - Kashmir Lattice Work",
        id: "pinjrakari",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Crewel - Embroidery Curtains",
        id: "crewel_embroi",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
    ],
  },
  {
    name: "Recycled Craft",
    id: "cat8",
    subcategories: [
      {
        name: "Papier-Mache",
        id: "papier-machie",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Gabba",
        id: "gabba",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
    ],
  },
  {
    name: "Sports Craft",
    id: "cat9",
    subcategories: [
      {
        name: "Circket-Bat",
        id: "circketBag",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Chess-Board",
        id: "chess-board",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
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
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Fur & Astrakhan",
        id: "astrakhan",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
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
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Kahwa & Pink Tea",
        id: "kahwa",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
    ],
  },
  {
    name: "Embriodery",
    id: "cat12",
    subcategories: [
      {
        name: "Suzani/Sozni - Fine Needlework",
        id: "sozni",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Zardozi -- Metal Thread Work",
        id: "zardozi",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Zalakdozi - Crewel Work",
        id: "zalakdozi",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Ari/Aari - Hook Work",
        id: "aari",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Dorukh - Double-sided Work",
        id: "dorukh",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Kashidakari - Surface Embroidery",
        id: "kashidakari",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Jaaldar - Net Work",
        id: "jaaldar",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
      {
        name: "Papier-Machie Inspired Embriodery",
        id: "paperMachieInspired",
        details: {
          annual_revenue: "$160M+",
          global_export: "78%",
          artisans: "88000+",
          market_growth: "17% YoY",
          quality_rating: "4.8/5",
          sustainability: "96%",
          market_share: "30%",
          product_range: "80+",
          customer_satisfaction: "97%",
          avg_production_time: "60 Days",
          energy_efficiency: "95%",
          innovation_index: "4.6/5",
        },
      },
    ],
  },
]

// MetricCard component adapted from your ProfitBox
interface MetricCardProps {
  icon: React.ReactNode
  title: string
  value: string
  position: "left" | "right" // Position is still relevant for desktop layout
  index: number
  is4K: boolean
}

const MetricCard: React.FC<MetricCardProps> = ({ icon, title, value, position, index, is4K }) => (
  <motion.div
    className={`flex items-center gap-4 ${position === "right" ? "flex-row-reverse text-right" : ""}`}
    initial={{ opacity: 0, x: position === "right" ? 50 : -50 }} // Adjusted initial x for mobile to be consistent
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.2 },
    }}
  >
    <motion.div
      className={`flex-shrink-0 ${is4K ? "w-16 h-16" : "w-12 h-12"} bg-[var(--primary-color)] rounded-full flex items-center justify-center cursor-pointer shadow-lg`}
      whileHover={{
        backgroundColor: "#ffffff",
        rotate: 360,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div className="text-gray-400" whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
        {icon}
      </motion.div>
    </motion.div>
    <motion.div whileHover={{ x: position === "right" ? -5 : 5 }} transition={{ duration: 0.2 }}>
      <motion.h3
        className={`${is4K ? "text-2xl" : "text-lg"} text-white font-semibold mb-1`}
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
)

export default function KashmirCraftsCarousel() {
  const { is4K } = useGlobalContext()
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0)
  const [selectedSubcategoryIndex, setSelectedSubcategoryIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const categoryScrollRef = useRef<HTMLDivElement>(null)
  const subcategoryScrollRef = useRef<HTMLDivElement>(null)

  const currentCategory = categories[currentCategoryIndex]
  const selectedSubcategory = currentCategory.subcategories[selectedSubcategoryIndex]

  // Effect to scroll category into view when index changes (for mobile arrows)
  useEffect(() => {
    if (categoryScrollRef.current) {
      const selectedButton = categoryScrollRef.current.children[currentCategoryIndex] as HTMLElement
      if (selectedButton) {
        selectedButton.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
      }
    }
  }, [currentCategoryIndex])

  // Touch handlers for swipe functionality
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextCategory()
    }
    if (isRightSwipe) {
      prevCategory()
    }
  }

  const nextCategory = () => {
    setCurrentCategoryIndex((prev) => (prev + 1) % categories.length)
    setSelectedSubcategoryIndex(0)
  }

  const prevCategory = () => {
    setCurrentCategoryIndex((prev) => (prev - 1 + categories.length) % categories.length)
    setSelectedSubcategoryIndex(0)
  }

  const scrollToCategory = (index: number) => {
    setCurrentCategoryIndex(index)
    setSelectedSubcategoryIndex(0)
  }

  const getMetricIcon = (key: string) => {
    const iconSize = is4K ? 32 : 24 // Adjusted icon size for 4K
    const iconProps = { size: iconSize, className: "text-gray-400" } // Default icon color
    switch (key) {
      case "annual_revenue":
        return <DollarSign {...iconProps} />
      case "global_export":
        return <Globe {...iconProps} />
      case "artisans":
        return <Users {...iconProps} />
      case "market_growth":
        return <TrendingUp {...iconProps} />
      case "quality_rating":
        return <Award {...iconProps} />
      case "sustainability":
        return <Leaf {...iconProps} />
      case "market_share":
        return <Target {...iconProps} />
      case "product_range":
        return <Key {...iconProps} />
      case "customer_satisfaction":
        return <Heart {...iconProps} />
      case "avg_production_time":
        return <Clock {...iconProps} />
      case "energy_efficiency":
        return <Zap {...iconProps} />
      case "innovation_index":
        return <Star {...iconProps} />
      default:
        return (
          <div
            className={`w-${is4K ? "8" : "6"} h-${is4K ? "8" : "6"} rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]`}
          />
        )
    }
  }

  const formatMetricKey = (key: string) => {
    return key
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  const detailsKeys = Object.keys(selectedSubcategory.details)
  const leftColumnDetails = detailsKeys.slice(0, Math.ceil(detailsKeys.length / 2))
  const rightColumnDetails = detailsKeys.slice(Math.ceil(detailsKeys.length / 2))

  // Create dotted earth pattern
  const createDottedEarth = () => {
    const dots = []
    const radius = is4K ? 450 : 300
    const centerX = 400
    const centerY = 400

    // Create multiple concentric circles of dots
    for (let ring = 0; ring < 4; ring++) {
      const currentRadius = radius - ring * (is4K ? 90 : 60)
      const dotsInRing = Math.max(24 - ring * 4, 8)

      for (let i = 0; i < dotsInRing; i++) {
        const angle = (i / dotsInRing) * 2 * Math.PI
        const x = centerX + Math.cos(angle) * currentRadius
        const y = centerY + Math.sin(angle) * currentRadius

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
          />,
        )
      }
    }

    // Add continental outlines with dots
    const continentPaths = [
      // Simplified continent shapes with dots
      { x: 350, y: 320, size: is4K ? 4.5 : 3 }, // North America
      { x: 420, y: 350, size: is4K ? 3.75 : 2.5 }, // Europe
      { x: 480, y: 380, size: is4K ? 6 : 4 }, // Asia
      { x: 380, y: 450, size: is4K ? 5.25 : 3.5 }, // Africa
      { x: 320, y: 480, size: is4K ? 3 : 2 }, // South America
      { x: 520, y: 480, size: is4K ? 3.75 : 2.5 }, // Australia
    ]

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
        />,
      )
    })

    return dots
  }

  return (
    <div
      className="bg-gradient-to-br from-slate-900 via-[var(--primary-hover-color)] to-slate-900 relative overflow-hidden"
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
        className="absolute inset-0 flex items-center justify-center opacity-100"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <svg width="800" height="800" viewBox="0 0 800 800">
          {createDottedEarth()}

          {/* Orbital rings */}
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
            transition={{ duration: 4, delay: 1, repeat: Number.POSITIVE_INFINITY }}
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
          className={`${is4K ? "text-8xl" : "text-4xl md:text-6xl"} font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4 tracking-tight`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          Dekoshur Crafts
        </motion.h1>
        <motion.p
          className={`${is4K ? "text-3xl" : "text-lg md:text-xl"} text-gray-300 font-light tracking-wide`}
          whileHover={{ scale: 1.02, color: "#fb923c" }}
          transition={{ duration: 0.2 }}
        >
          Hand ♡ Made | Kashmir India Sourced
        </motion.p>
      </motion.div>

      {/* Mobile Category Slider with Arrows (visible on small screens) */}
      <div className="md:hidden px-4 mb-8 relative z-10 flex items-center justify-center">
        <motion.button
          onClick={prevCategory}
          className={`group flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm shadow-xl mr-2`}
          aria-label="Previous category"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:text-[var(--secondary-color)] transition-colors" />
        </motion.button>

        <div
          ref={categoryScrollRef}
          className="flex flex-grow gap-3 overflow-x-auto no-scrollbar pb-2"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              id={`category-btn-${category.id}`} // Add ID for scrolling
              onClick={() => scrollToCategory(index)}
              className={`flex-shrink-0 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg backdrop-blur-sm ${
                currentCategoryIndex === index
                  ? "bg-[var(--secondary-color)] text-white scale-105 shadow-[var(--secondary-color)]/30"
                  : "bg-white/10 text-gray-200 hover:bg-white/20"
              }`}
              style={{ scrollSnapAlign: "center" }} // Changed to center for better snapping
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <motion.button
          onClick={nextCategory}
          className={`group flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm shadow-xl ml-2`}
          aria-label="Next category"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:text-[var(--secondary-color)] transition-colors" />
        </motion.button>
      </div>

      {/* Desktop Category Navigation */}
      <div className="hidden md:flex items-center justify-center mb-12 px-8 relative z-10">
  {/* Fixed container for arrows + text */}
  <div className="flex items-center" style={{ width: is4K ? "800px" : "500px" }}>
    
    {/* Left Arrow - fixed position */}
    <motion.button
      onClick={prevCategory}
      className={`group  flex-shrink-0 flex items-center justify-center ${is4K ? "w-20 h-20" : "w-16 h-16"} rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm shadow-xl`}
      aria-label="Previous category"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <ChevronLeft
        className={`${is4K ? "w-12 h-12" : "w-8 h-8"} text-white group-hover:text-[var(--secondary-color)] transition-colors`}
      />
    </motion.button>

    {/* Center Text - fixed width area */}
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
        className={`${is4K ? "text-7xl" : "text-3xl md:text-5xl"} font-bold text-white mb-2 tracking-tight break-words`}
        whileHover={{ scale: 1.02, color: "#fb923c" }}
        transition={{ duration: 0.2 }}
      >
        {currentCategory.name}
      </motion.h2>
      <div className="flex justify-center space-x-2 mt-4">
        {categories.map((_, index) => (
          <motion.div
            key={index}
            className={`${is4K ? "w-4 h-4" : "w-3 h-3"} rounded-full transition-all duration-300 ${
              currentCategoryIndex === index
                ? "bg-[var(--secondary-color)] scale-125"
                : "bg-white/30 hover:bg-white/50"
            }`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </motion.div>

    {/* Right Arrow - fixed position */}
    <motion.button
      onClick={nextCategory}
      className={`group flex-shrink-0 flex items-center justify-center ${is4K ? "w-20 h-20" : "w-16 h-16"} rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm shadow-xl`}
      aria-label="Next category"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <ChevronRight
        className={`${is4K ? "w-12 h-12" : "w-8 h-8"} text-white group-hover:text-[var(--secondary-color)] transition-colors`}
      />
    </motion.button>
    
  </div>
</div>


      {/* Main Content Layout */}
      <div className="relative z-10 px-4 md:px-8 pb-12">
        {/* Desktop Layout: Left Details + Center Tabs + Right Details */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto">
          {/* Left Metrics */}
          <div className="col-span-4 space-y-8">
            {leftColumnDetails.map((key, index) => (
              <MetricCard
                key={key}
                icon={getMetricIcon(key)}
                title={formatMetricKey(key)}
                value={selectedSubcategory.details[key as keyof typeof selectedSubcategory.details]}
                position="left"
                index={index}
                is4K={is4K}
              />
            ))}
          </div>

          {/* Center - Subcategory Tabs */}
          <motion.div
  className="col-span-4 bg-slate-800/40 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 shadow-2xl"
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
      className={`${is4K ? "text-5xl" : "text-3xl"} font-bold text-white mb-2`}
      whileHover={{ scale: 1.05, color: "#fb923c" }}
      transition={{ duration: 0.2 }}
    >
      {currentCategory.name}
    </motion.h3>
    <motion.p
      className={`${is4K ? "text-2xl" : "text-lg"} text-gray-300 font-medium`}
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
        onClick={() => setSelectedSubcategoryIndex(index)}
        className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg ${
          is4K ? "text-xl" : "text-base"
        } ${
          selectedSubcategoryIndex === index
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


          {/* Right Metrics */}
          <div className="col-span-4 space-y-8">
            {rightColumnDetails.map((key, index) => (
              <MetricCard
                key={key}
                icon={getMetricIcon(key)}
                title={formatMetricKey(key)}
                value={selectedSubcategory.details[key as keyof typeof selectedSubcategory.details]}
                position="right"
                index={index}
                is4K={is4K}
              />
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden max-w-4xl mx-auto">
          {/* Subcategory Tabs (scrollable on mobile) */}
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
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{currentCategory.name}</h3>
              <p className="text-base md:text-lg text-gray-200">Product Range</p>
            </motion.div>

            <div
              ref={subcategoryScrollRef}
              className="flex flex-nowrap no-scrollbar overflow-x-auto whitespace-nowrap gap-3 pb-2"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {currentCategory.subcategories.map((sub, index) => (
                <motion.button
                  key={sub.id}
                  onClick={() => setSelectedSubcategoryIndex(index)}
                  className={`flex-shrink-0 px-4 py-3 rounded-xl font-medium text-sm md:text-base transition-all duration-300 shadow-lg backdrop-blur-sm ${
                    selectedSubcategoryIndex === index
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
                  <motion.span whileHover={{ fontWeight: 600 }} transition={{ duration: 0.2 }}>
                    {sub.name}
                  </motion.span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {detailsKeys.map((key, index) => (
              <MetricCard
                key={key}
                icon={getMetricIcon(key)}
                title={formatMetricKey(key)}
                value={selectedSubcategory.details[key as keyof typeof selectedSubcategory.details]}
                position="left" // Position doesn't matter for mobile grid, but required by prop
                index={index}
                is4K={is4K}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
