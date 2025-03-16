

function List() {

    // const arr = ["one","two","three"]

    // const items = arr.map((val, idx)=> val)

    let user = false;
    let loader = false;
 
  return (
    <div>
      <h1>List Components -- {user}</h1>
      {/* <ul>
        {arr.map((val,i)=> <li key={i}>{val}</li>)}
      </ul> */}
      {/* {items} */}

      {user ? <div>User hai...</div>: <div>User nahi hai...</div>}
      {loader ? <div>Loading...</div>: <div>Website</div>}
    </div>
  );
}

export default List;
