import React from "react";

interface LabelProps {
  type?: "title" | "subtitle" | "default";
  color?: string;
  children: React.ReactNode;
}

export default function Label(props: LabelProps) {
  const fontSize =
    props.type === "title" ? 48 : props.type === "subtitle" ? 24 : 16;

  const color = props.color || "#000";

  const fontWeight =
    props.type === "title" || props.type === "subtitle" ? 650 : 0;

  return <span style={{ fontSize, color, fontWeight }}>{props.children}</span>;
}
