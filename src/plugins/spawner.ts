export const spawn = (data:unknown, processor: Function) => {
    let worker = new Worker(
      URL.createObjectURL(
        new Blob([
          `onmessage = function (event) {
              const result = (${processor.toString()})(event.data);
                  postMessage(result);
              }`
        ])
      )
    );
    worker.postMessage(data);
    return new Promise((resolve) => {
      worker.onmessage = event => resolve(event.data);
    });
  };
  