import MyButton from "../MyButton/MyButton";

function Home({ abc, name }) {
  //   console.log(props);

  //   const { abc, name } = props;

  return (
    <div>
      <h1 className="text-white">
        Home Component - {abc} : {name}
      </h1>
      <MyButton title="Update"/>
    </div>
  );
}
export default Home;
