import { pipeline, PipelineType } from "@huggingface/transformers";

type PipelineModel = ReturnType<typeof pipeline>;

class PipelineSingleton {
  static task = "summarization" as PipelineType;
  static model = "Xenova/distilbart-cnn-6-6";
  static instance: null | PipelineModel = null;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  static async getInstance(progress_callback: Function | undefined) {
    if (this.instance === null) {
      console.log("Creating Instance");
      this.instance = pipeline(this.task, this.model, { progress_callback });
    }

    return this.instance;
  }
}

// Listen for messages from the main thread
self.addEventListener("message", async (event) => {
  console.log("Web worker received", event);

  (async function () {
    // Retrieve the classification pipeline. When called for the first time,
    // this will load the pipeline and save it for future use.
    const summarizer = await PipelineSingleton.getInstance(() => {
      // We also add a progress callback to the pipeline so that we can
      // track model loading.
      // console.log(x);
      // self.postMessage(x);
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const result = await summarizer(event.data.context); // 2. Run model prediction
    console.log("Service worker result", result);

    // Send the output back to the main thread
    self.postMessage({
      status: "complete",
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      output: result[0],
    });
  })();

  return true;
});
