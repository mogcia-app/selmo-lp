"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpenCheck,
  Bot,
  ChartNoAxesCombined,
  Gauge,
  ImageIcon,
  UserRoundCheck,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "dashboard",
    label: "ダッシュボード",
    icon: Gauge,
    image: "/6.png",
  },
  {
    id: "analysis",
    label: "商談分析",
    icon: ChartNoAxesCombined,
    image: "/7.png",
  },
  {
    id: "roleplay",
    label: "AIロープレ",
    icon: Bot,
    image: "/3.png",
  },
  {
    id: "customer",
    label: "顧客カルテ",
    icon: UserRoundCheck,
    image: "/4.png",
  },
  {
    id: "knowledge",
    label: "ナレッジ",
    icon: BookOpenCheck,
    image: "/5.png",
  },
];

export function ScreenTabs() {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  return (
    <div className="rounded-xl border border-border bg-white p-3 shadow-soft">
      <div className="grid gap-2 sm:grid-cols-5" role="tablist" aria-label="画面イメージ">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === activeId;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(tab.id)}
              className={cn(
                "flex h-12 items-center justify-center gap-2 rounded-lg border px-3 text-sm font-semibold transition",
                isActive
                  ? "border-primary bg-primary/15 text-foreground"
                  : "border-transparent text-muted-foreground hover:border-border hover:bg-muted",
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="truncate">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-3 overflow-hidden rounded-lg border border-border bg-[#f7f7f4]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
            className="aspect-video w-full bg-white"
          >
            {active.image ? (
              <img
                src={active.image}
                alt={`${active.label}画面イメージ`}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center bg-[linear-gradient(135deg,rgba(245,189,7,0.14),transparent_42%),linear-gradient(rgba(34,34,34,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,34,34,0.04)_1px,transparent_1px)] bg-[size:auto,32px_32px,32px_32px] p-8 text-center">
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-xl bg-primary/18">
                  <ImageIcon className="h-7 w-7 text-primary-hover" />
                </div>
                <p className="text-lg font-semibold">{active.label} 画像</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  1920 × 1080 の画面画像をここに配置
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
