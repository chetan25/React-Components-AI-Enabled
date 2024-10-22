---
Title: React Components AI Enabled.
Excerpt: This is a simple collection of React component that are powered with AI capability that works locally on users component.
Tech: "Typescript, TransformerJS, Vite, Web Worker"
---

# AI powered React Components

- This is a collection of re usable react components that are AI powered.
- I have used `tansformers.js` to run model locally on client's browser.
- The repo contains two variations:
  - `Summarize Component` - This is a component that takes in the context(in our case element id) and then summarizes it. All of this is done client side on the browser.
  - `Sentiment Analysis hook` - This hook takes in the context to analyze and can predict the sentiment of the text on client side.

## Underlying Working

- Both the component and hook uses `web worker` approach to load the models from `hugging face`.
- The heavy lifting of model loading and running is done by the `transformers.js` library, that is powered to run AI models on the browser.
- Here is a sample code make a single instance of the model:

```ts
import { pipeline, PipelineType } from "@huggingface/transformers";

type PipelineModel = ReturnType<typeof pipeline>;

class PipelineSingleton {
  static task = "sentiment-analysis" as PipelineType;
  static model = "Xenova/bert-base-multilingual-uncased-sentiment";
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
```

- After that we can use the `web workers` eventListeners to pass messages from the web worker to UI and vice versa

```js
// Listen for messages from the main thread
self.addEventListener("message", async (event) => {
  console.log("Web worker received", event);

  (async function () {
    // Retrieve the classification pipeline. When called for the first time,
    // this will load the pipeline and save it for future use.
    const classifier = await PipelineSingleton.getInstance(() => {});

    const result = await classifier(event.data.context); // 2. Run model prediction
    console.log("Service worker result", result);

    // Send the output back to the main thread
    self.postMessage({
      status: "complete",
      output: result[0],
    });
  })();

  return true;
});
```

- The FE component just creates a instance of the `worker` and uses the eventListeners.

```ts
const worker = useRef<Worker | null>(null);

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
  const onMessageReceived = (event: any) => {};

  // Attach the callback function as an event listener.
  worker.current.addEventListener("message", onMessageReceived);
  // Define a cleanup function for when the component is unmounted.
  return () =>
    worker.current?.removeEventListener("message", onMessageReceived);
}, []);
```

- For bundling we have configured Vite to bundle each component as separate file along with the css injected as import.

```js
export default defineConfig({
  // base: ".",
  plugins: [react(), libInjectCss()],
  build: {
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
    lib: {
      entry: {
        summarize: resolve(
          __dirname,
          "./src/components/Summarize/summarize.tsx"
        ),
        sentimentAnalysis: resolve(
          __dirname,
          "./src/components/SentimentAnalysis/useSentimentAnalysis.ts"
        ),
      },

      formats: ["es"],
    },
  },
});
```

- For easy consumption we have defined the `exports` in the `package.json`

```json
  "exports": {
    "./summarize": {
      "import": "./dist/summarize.js"
    },
    "./sentimentAnalysis": {
      "import": "./dist/sentimentAnalysis.js"
    },
    "./css": "./dist/style.css"
  },
```

## Local Development

For running the components locally:

- Run `npm i`
- Run `npm run dev` for local server

### For Testing the components in s separate repo

For testing the components in a separate repo:

- Update the version in `package.json` file
- Run `npm run build`, this will build the library
- **_NOTE_** There is a slight issue that web workers can not work form local file reference in Chrome, so we need to make sure its a relative import. So we have to update the 2 generated files `sentimentAnalysis.js` and `summarize.js` in `dist` folder and update the reference import for `worker` from ` "/assets/*********` to ` "./assets/*****`. So we added the `.` in front to make it relative to the file.

```js
// example
 new URL(
  /* @vite-ignore */
  "./assets/worker-2oVLSZZP.js",
  import.meta.url
),
```

- Run `npm pack`, this will create a tar file which can be installed. The file would be like `ai-components-client-0.0.9.tz`
- Now copy the tz file created and paste it in the repo u want to install it.
- Now we can install it by running `npm install ai-components-client-0.0.1.tz`

### Not done

- Typescript definitions are not exported yet.
- The `Web Worker` import is manual and no automated way to update is found.
