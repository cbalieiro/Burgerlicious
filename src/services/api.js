const CallAPI = async (url, method) => {
  try {
    const response = await fetch(url, method);
    const data = await response.json();
    console.log(data)
    return data;
  } 
  catch {
    alert('Ops! Something went wrong. Please, try again.');
  }
};

export default CallAPI;