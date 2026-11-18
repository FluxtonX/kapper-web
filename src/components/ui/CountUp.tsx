"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion";

export default function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const reduceMotion = useReducedMotion();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString("en-US"));

  useEffect(() => {
    if (reduceMotion) {
      count.set(value);
    } else if (inView) {
      const controls = animate(count, value, { duration: 1.25, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [count, inView, reduceMotion, value]);

  return <span className="count-up"><motion.span ref={ref}>{rounded}</motion.span>{suffix}</span>;
}
