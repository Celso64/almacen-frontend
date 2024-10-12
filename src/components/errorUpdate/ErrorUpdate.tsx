/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import "./style.css";

interface ErrorProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  error: Error | undefined;
}

export default function Error({ visible, setVisible, error }: ErrorProps) {
  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setVisible(false);
      }, 1500);
    }
  }, [visible]);

  return (
    <div
      className="error_container"
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      <h2>Error!!!</h2>
      <p>{error?.message}</p>
    </div>
  );
}
