export const useFetch = () => {
  const getData = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    return data.fact;
  };

  return { getData };
};
