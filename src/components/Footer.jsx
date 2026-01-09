import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} maria c. lima
        <span className="footer-divider">|</span>
        <a 
          href="mailto:maria.lima.hub@gmail.com"
          className="email-link"
          aria-label="Email maria.lima.hub@gmail.com"
        >
          <MdEmail size={16} />
          <span>maria.lima.hub@gmail.com</span>
        </a>
      </p>
    </footer>
  );
}
