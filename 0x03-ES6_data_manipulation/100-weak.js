/*Track within the weakMap the number of times queryAPI is called for each endpoint.

When the number of queries is >= 5 throw an error with the message Endpoint load is high.*/
export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  if (weakMap.has(endpoint)) {
    const endpointData = weakMap.get(endpoint);
    if (endpointData >= 4) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, (endpointData + 1));
  } else {
    weakMap.set(endpoint, 1);
  }
};
