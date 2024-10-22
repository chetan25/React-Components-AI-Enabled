import { useRef, useEffect, useState } from "react";

const useSentimentAnalysis = () => {
  const worker = useRef<Worker | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [analysis, setAnalysis] = useState<{
    label: string;
    score: number;
  } | null>(null);

  useEffect(() => {
    if (!worker.current) {
      // Create the worker if it does not yet exist.
      //   worker.current = new MyWorker();
      worker.current = new Worker(
        new URL("./worker/worker.ts", import.meta.url),
        {
          name: "worker",
          type: "module",
        }
      );
    }

    // Create a callback function for messages from the worker thread.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onMessageReceived = (event: any) => {
      console.log({ event });
      setLoading(false);
      setAnalysis(event.data.output);
    };

    // Attach the callback function as an event listener.
    worker.current.addEventListener("message", onMessageReceived);
    // Define a cleanup function for when the component is unmounted.
    return () =>
      worker.current?.removeEventListener("message", onMessageReceived);
  }, []);

  const analyzeSentiments = (text: string) => {
    worker.current!.postMessage({ context: text });
    setLoading(true);
  };

  return {
    analysis,
    analyzeSentiments,
    anlysisInProgress: loading,
  };
};

export default useSentimentAnalysis;
