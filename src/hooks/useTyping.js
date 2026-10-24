import { useState, useEffect, useRef } from "react";

export function useTyping(strings, speed = 80, pause = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef(null);

  useEffect(() => {
    const current = strings[index % strings.length];

    if (!deleting && displayed === current) {
      timeout.current = setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (deleting && displayed === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % strings.length);
      return;
    }

    timeout.current = setTimeout(
      () => {
        setDisplayed((prev) =>
          deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        );
      },
      deleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout.current);
  }, [displayed, deleting, index, strings, speed, pause]);

  return displayed;
}
