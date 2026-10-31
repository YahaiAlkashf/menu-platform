export default function SectionBadge({ children, variant = "primary" }) {
  const styles = {
    primary: "bg-primary-fixed text-on-primary-fixed-variant",
    secondary: "bg-secondary-fixed text-on-secondary-fixed",
  };
  return (
    <span className={`px-4 py-1.5 rounded-full ${styles[variant]} font-label-md text-label-md font-bold mb-3 inline-block`}>
      {children}
    </span>
  );
}