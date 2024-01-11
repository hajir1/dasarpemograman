import axios from "axios";
const Home = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      username: formData.get("username"),
      passwords: formData.get("pw"),
      name: formData.get("name"),
    };
      axios
        .post("http://localhost:3001/api/users", data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err.message));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" placeholder="name" name="name" />
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="pw" />
      <button type="submit">klik me</button>
    </form>
  );
};

export default Home;
