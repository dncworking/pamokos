"use srict";
const displayUserName = async (userId) => {
  const userInfoDiv = document.getElementById("user-info");
  try {
    if (Response.status === 404) {
      throw new Error("User not found");
    }
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const userData = await res.json();
    userInfoDiv.textContent = `User Name: ${userData.name}`;
  } catch (err) {
    userInfoDiv.textContent = `User Name: ${error.message}`;
  }
};
displayUserName(55);
