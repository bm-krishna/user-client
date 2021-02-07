const onSubmitHandler = async () => {
  // fetch the data from input elements data
  userName = document.getElementById("userName").value;
  password = document.getElementById("password").value;
  const payload = {
    userName: userName,
    password: password,
  };
  // logic whic give post request
  const response = await fetch("http://localhost:3000/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(payload),
  });
  const resultResponse = await response.json();
  // show msg in html page by using docuemnt object.
  document.getElementById("result").innerHTML = `${resultResponse.message} &#129325 &#128540`;
};
async function getMessage()
{
  console.log("get massage")
  const responsepromise=  await fetch("http://localhost:3000/user/info",{
      method:"GET",
      headers :{
        "Content-Type":"application/json",
      }
    });
    const response=await responsepromise.json();
    // const {message="Message not found"} = response;
    document.getElementById("display").innerHTML=response.message;
}