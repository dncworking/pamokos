const fetchUserData = async (id) => {
  try {
    const maxId = 10;
    if (id > maxId) {
      throw new Error("User not found");
    } else if (TypeError) {
      throw new Error("Network error occurred");
    }

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

fetchUserData(5);
