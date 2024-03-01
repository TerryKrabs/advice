const adviceGenerator = async () => {
    const promise = await fetch('https://api.adviceslip.com/advice  ');
    const data = await promise.json();
    console.log(data);
    return data;
}
export{adviceGenerator}
