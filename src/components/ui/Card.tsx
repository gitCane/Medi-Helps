import { motion } from 'framer-motion';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  className?: string;
}

export const Card = ({
  children,
  variant = 'default',
  className = '',
}: CardProps) => {
  return (
    <motion.div
      className={`card ${variant} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </motion.div>
  );
};