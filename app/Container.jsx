"use client";
import { cx } from "./Data";

export function Container({ children, className }) {
  return <div className={cx("mx-auto max-w-7xl", className)}>{children}</div>;
}
