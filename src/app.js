const workerContacts = new Worker("./src/helpers/extractContactsNumbers.js");
  workerContacts.onmessage = (event) => {
      workerContacts.terminate();
  };
  workerContacts.onerror = (error) => {
    console.error(`onerror: ${JSON.stringify(error)}`);
    workerContacts.terminate();
  };
workerContacts.postMessage(['just a test']);
