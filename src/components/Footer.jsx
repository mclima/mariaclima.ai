import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} maria c. lima
        <a 
          href="mailto:maria.lima.hub@gmail.com"
          className="email-link"
          aria-label="Email maria.lima.hub@gmail.com"
        >
          <MdEmail size={18} />
        </a>
      </p>
    </footer>
  );
}
