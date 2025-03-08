"use client"; // Error Components must be Client Components

import { useEffect } from "react";

export default function Error({error, reset}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
      <div>
        <h2>Something went Wrong!</h2>
        <button onClick={
            // attempt to recover by trying to re-render the Segment
            () => reset()
        }>Try Again</button>
      </div>
    );
}
  