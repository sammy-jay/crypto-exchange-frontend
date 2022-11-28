const getUser = async () => {
  const { data } = await axios.get(
    "https://crypto-be.herokuapp.com/api/v1/auth/profile"
  );

  console.log(data);
};

getUser();
