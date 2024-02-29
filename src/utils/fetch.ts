const URL: string = "https://api.vatcomply.com/";

interface FetchType {
  method: "get" | "post" | "put"
  path: string,
}

const Fetch = async ({method, path}: FetchType) => {
  console.info(`Fetch - Sending - ${method} - ${path} `)

  try {
    const response = await fetch(`${URL}${path}`, {
      method: method,
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });

    console.info(`Fetch - Ok - ${method} - ${path} `)
    const result = await response.json();
    console.info(`Fetch - Result - ${result} `)

    return result;

  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
}

export default Fetch;