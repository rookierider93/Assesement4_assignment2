const FormDemo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submit clicked");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Value"
              aria-label="Enter Value"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              Button
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormDemo;
