// Dynamic Container Component
const Container = ({ children, borderColor }) => (
  <div
    style={{
      border: `1px solid ${borderColor}`,
      padding: "25px",
      margin: "25px",
    }}
  >
    {children}
  </div>
);
