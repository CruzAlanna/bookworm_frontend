export function UsersNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onCreate(params, successCallback);
  }

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <br></br>
        <div>
          Email: <input name="email" type="text" />
        </div>
        <br></br>
        <div>
          Password: <input name="password" type="text" />
        </div>
        <br></br>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}