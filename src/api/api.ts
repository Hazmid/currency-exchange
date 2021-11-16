export const getLatest = async () => {
  const response = await fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.REACT_APP_API_KEY}&symbols=USD,GBP&format=1`);
  const data = await response.json().catch(err => console.log(err));
  return data;
  
}

