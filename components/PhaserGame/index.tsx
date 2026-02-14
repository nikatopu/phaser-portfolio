"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./PhaserGame.module.scss";

type Props = {
  createGame: (parent: HTMLDivElement) => Promise<any>;
};

export default function PhaserGame({ createGame }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    let cancelled = false;

    requestAnimationFrame(async () => {
      if (cancelled) return;
      gameRef.current = await createGame(containerRef.current!);
      setLoading(false);
    });

    return () => {
      cancelled = true;
      gameRef.current?.destroy(true);
      gameRef.current = null;
    };
  }, [createGame]);

  return (
    <div className={styles.wrapper}>
      {loading && (
        <div className={styles.loader}>
          <div className={styles.spinner} />
          <span>Loading game…</span>
        </div>
      )}

      <div className={styles.stage}>
        <div ref={containerRef} className={styles.gameContainer} />
      </div>
    </div>
  );
}
