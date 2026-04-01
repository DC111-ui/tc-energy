import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const stats = [
  { value: 5033, suffix: '', label: 'Clients Served' },
  { value: 8, suffix: '+', label: 'Partner Brands' },
  { value: 4, suffix: '', label: 'Core Services' },
  { value: 3, suffix: ' Yrs', label: 'In Operation' },
];

function FlipDigit({ digit }) {
  return (
    <span className="relative inline-flex h-[1.1em] w-[0.65em] overflow-hidden align-bottom">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={digit}
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="absolute inset-0 flex items-end justify-center"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function FlipCounter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const totalFrames = Math.min(value, 60);
          const step = Math.ceil(value / totalFrames);
          const interval = 900 / totalFrames;
          const timer = setInterval(() => {
            current = Math.min(current + step, value);
            setCount(current);
            if (current >= value) clearInterval(timer);
          }, interval);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  const digits = String(count).split('');

  return (
    <span ref={ref} className="inline-flex items-end tabular-nums">
      {digits.map((d, i) => (
        <FlipDigit key={i} digit={d} />
      ))}
      {suffix && <span>{suffix}</span>}
    </span>
  );
}

function StatsBar() {
  return (
    <motion.div
      className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-sm md:grid-cols-4"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {stats.map(({ value, suffix, label }) => (
        <div key={label} className="flex flex-col items-center bg-white px-6 py-6 text-center">
          <p className="text-3xl font-extrabold text-primary sm:text-4xl">
            <FlipCounter value={value} suffix={suffix} />
          </p>
          <p className="mt-1 text-sm font-medium text-slate-500">{label}</p>
        </div>
      ))}
    </motion.div>
  );
}

export default StatsBar;
