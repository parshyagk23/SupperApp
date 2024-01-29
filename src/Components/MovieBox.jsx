
function Box({ data, setselectMovies, selectMovies }) {
  const HandleClick = () => {
    if (selectMovies.includes(data.id)) {
      setselectMovies((prev) => prev.filter((item) => item != data.id));
    } else {
      setselectMovies((prev) => [...prev, data.id]);
    }
  };
  return (
    <div
      className="Databox"
      style={{
        border: selectMovies.includes(data.id) ? " 6px solid #11B800" : "",
      }}
    >
      <div data={data} style={{ background: data.color }} onClick={HandleClick}>
        <h1>{data.id}</h1>
        {data.image}
      </div>
    </div>
  );
}
export default Box;
