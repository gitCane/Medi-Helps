import { motion } from 'framer-motion';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  className = '',
}: ButtonProps) => {
  return (
    <motion.button
      className={`button ${variant} ${size} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {children}
    </motion.button>
  );
};