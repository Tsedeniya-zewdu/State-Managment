import React, { useEffect, useState } from "react";





const StopWatch = () => {
const [time, setTime] =useState(0);

useEffect(() =>{
 const Interval = setInterval(() =>{
  
  setTime((t) => t + 1)
},1000);


  const timeout = setTimeout(() => {
    clearInterval(Interval);
  }, 5000); 

  return () => {
    clearInterval(Interval);
    clearTimeout(timeout);
  };
}, [])


return (
  <div>Time: {time}</div>
)
}

export default function UseEffect() {




  const [name, setName] = useState([]);
  useEffect(() => {
    fetch("./names.json")
      .then((response) => response.json())
      .then((data) => setName(data));
  }, []);
  const [selectedNameDetails, setSelectedNameDetails] = useState(null);
 
  // useEffect(() => {
  //   if (selectedName) {
  //     fetch(`./${selectedName}.json`)
  //       .then((response) => response.json())
  //       .then((data) => setSelectedNameDetails(data));
  //   }
  // }, [selectedName]);

  const fetchNameDetails = (name) => {
    fetch(`./${name}.json`)
      .then((response) => response.json())
      .then((data) => setSelectedNameDetails(data));
  }
 
  return (
    <div>
      {" "}
      <h1 style={{ textAlign: "center" }}>UseEffect</h1>
      <p>Name : {name.join(",")}</p>
      {name.map((nam) => (
        <button onClick={() => fetchNameDetails(nam)}>{nam}</button>
      ))}
      <p>Selected Name Details: {JSON.stringify(selectedNameDetails)}</p>
<StopWatch />
    </div>
  );
}
