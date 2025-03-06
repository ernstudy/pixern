import React from "react";

export default function CopyRigthComponent() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p className="copyright">
        &copy; {year}, PixErn | Designed by{" "}
        <a href="https://ernstudy.com">Ernstudy</a>
      </p>
    </footer>
  );
}
