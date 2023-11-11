const DatePosted = () => {
  return (
    <div>
      <time>
        {new Date(post.date).toLocaleString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
    </div>
  );
};

export default DatePosted;
