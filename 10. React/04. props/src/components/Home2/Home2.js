import MyButton from "../MyButton/MyButton";

function Home2({ abc, name }) {
  //   console.log(props);

  //   const { abc, name } = props;

  return (
    <div>
      <h1 className="text-white">
        Home2 Component - {abc} : {name}
      </h1>
      <MyButton title="Delete"/>
    </div>
  );
}
export default Home2;
