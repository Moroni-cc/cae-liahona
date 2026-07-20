import logoHome from "../assets/logoHome.png";

export function Logo({ className = "" }) {
  return (
    <img
      src={logoHome}
      alt="CAE-LIAHONA"
      className={`h-12 w-12 ${className}`}
    />
  );
}
