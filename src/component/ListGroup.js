function ListGroup() {
  const item = ["a", "b", "c", "d", "e"];

  return (
    <>
      <h1>List</h1>
      <ul className="List Group">
        {/* add list group component */}
        {item.map(
          (
            // that time map with item, previously we created item array
            item,
            index
          ) => (
            <li
              className="list-group-ite"
              key={item}
              onClick={(event) => console.log(event)} // add onclick event in this console log showing what is select item
            >
              {item}
            </li>
          )
        )}
      </ul>
    </>
  );
}

export default ListGroup;
