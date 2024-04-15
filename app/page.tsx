'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react"

export default function Home() {

  const [message, setMessage] = useState<string>("Loading");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => response.json())
      .then((data) : void => {
        setMessage(data.message);
      })
  }, [])

  return(
    <div>{message}</div>
  );
}
