// src/components/LogoGridCard.jsx
const LogoGridCard = ({ logos }) => {
  return (
    <div className="grid grid-cols-4 gap-1 rounded-lg shadow-lg bg-transparent">
      {logos.map((logo, idx) => (
        <div
          key={idx}
          className="flex items-center justify-center p-2 border rounded "
        >
          <img
            src={logo}
            alt={`Logo ${idx}`}
            className="h-20 object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default LogoGridCard;
