import React, { useState } from "react";

const Filter = ({ data, color }) => {
  const [filter, setFilter] = useState("");

  const filteredList =
    filter === "" ? data : data.filter((d) => d.name.includes(filter));

  return (
    <div className="filter" style={{ maxWidth: 400 }}>
      <input
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        placeholder={"Who is your favorite starwars character?"}
        value={filter}
      />
      <CloseButton setFilter={setFilter} filter={filter} />
      <ul>
        {filteredList.length > 0 ? (
          filteredList.map((item, i) => (
            <ListItem
              key={i}
              item={item}
              color={color}
              setFilter={setFilter}
              show={filteredList.length === 1}
            />
          ))
        ) : (
          <li className="item no-results">No results</li>
        )}
      </ul>
    </div>
  );
};

const CloseButton = ({ setFilter, filter }) => (
  <button
    className="button"
    onClick={() => setFilter("")}
    style={{
      fontSize: "2rem",
      position: "absolute",
      right: 5,
      top: 13,
      opacity: filter === "" ? 0.1 : 1,
    }}
  >
    &times;
  </button>
);

const ListItem = ({ item, color, setFilter, show }) => {
  return (
    <li
      className="item"
      style={{ backgroundColor: color }}
      onClick={({ target }) => {
        if (show === false) setFilter(target.innerText);
      }}
    >
      {show === false ? item.name : <SeeMoreDetails item={item} />}
    </li>
  );
};

const SeeMoreDetails = ({ item }) => {
  return (
    <div class="details">
      <table>
        <tbody>
          {Object.keys(item).map((key) => (
            <tr>
              <th>
                {typeof item[key] === "string"
                  ? key
                      .split("_")
                      .join(" ")
                      .replace(/(?:^|\s)\S/g, function (a) {
                        return a.toUpperCase();
                      }) + ":"
                  : null}
              </th>
              <td>{typeof item[key] === "string" ? item[key] : null}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Filter;
