import React, { useState, useEffect, useCallback } from "react";
const names = [
  'GRAN', 'FURU', 'TRE'
]

export default function Heading() {
  const [newName, setnewName] = useState("");

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 800);
        return () => clearInterval(intervalID);
    }, [shuffle])

  return (
    <h1 className="clipped-heading" >
      DU GRØNNE<br />GLITRENDE<br /><span>{newName}</span>
    </h1>
  )
}
