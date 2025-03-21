function About1({ lastName, welcome, foo }) {
  const val1 = "Hamza";
  const val2 = "Ali";
  const comVal = val1 + " " + val2
  return (
    <div>
      <h1 className="text-black">About1 Component</h1>
      <h2>{welcome + " - " + val1 + " - " + lastName}</h2>
      <button
        className="btn btn-secondary"
        onClick={() => foo(comVal)}
      >
        Click
      </button>
    </div>
  );
}
export default About1;
