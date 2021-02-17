const FormErrors = ({ errors }) => {
  let errorsArr = [];
  if (errors) {
    errorsArr = Object.values(errors);
  }

  console.log("errors form", errors);

  return (
    <>
      {errorsArr.map((e) => (e ? <div className="error-div">{e}</div> : null))}
    </>
  );
};

export default FormErrors;
