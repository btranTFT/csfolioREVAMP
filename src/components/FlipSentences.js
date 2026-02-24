/**
 * FlipSentences — cycles through an array of sentences with a fade + slide
 * animation every 3 s. Mirrors the reference repo's FlipSentences component.
 *
 * Props:
 *   sentences {string[]}  — array of sentences to cycle
 *   interval  {number}    — ms between switches (default 3000)
 */
import React, { useEffect, useRef, useState } from 'react';
import './FlipSentences.css';

export default function FlipSentences({ sentences = [], interval = 3000 }) {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState('visible'); // 'visible' | 'exit' | 'enter'
  const timerRef = useRef(null);

  useEffect(() => {
    if (sentences.length <= 1) return;

    function cycle() {
      // Step 1: fade out
      setPhase('exit');
      setTimeout(() => {
        // Step 2: swap text + fade in
        setIdx(i => (i + 1) % sentences.length);
        setPhase('enter');
        setTimeout(() => setPhase('visible'), 20); // trigger transition
      }, 250);
    }

    timerRef.current = setInterval(cycle, interval);
    return () => clearInterval(timerRef.current);
  }, [sentences.length, interval]);

  return (
    <div className="flip-sentences" aria-live="polite">
      <span
        className={`flip-sentence flip-sentence--${phase}`}
        key={idx}
      >
        {sentences[idx]}
      </span>
    </div>
  );
}
