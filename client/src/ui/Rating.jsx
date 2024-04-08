export const Rating = ({ value, text, color, onHoverRating, onSaveRating }) => {
  return (
    <div className="w-full flex items-center justify-center">
      {[1, 2, 3, 4, 5].map((index) => (
        <>
          <span
            key={index}
            className="text-4xl"
            onMouseEnter={() => onHoverRating(index)}
            onClick={() => onSaveRating(index)}
          >
            <i
              style={{ color }}
              className={value >= index ? "fas fa-star" : "far fa-star"}
            ></i>
          </span>
        </>
      ))}
      <span>{text && text}</span>
    </div>
  );
};
