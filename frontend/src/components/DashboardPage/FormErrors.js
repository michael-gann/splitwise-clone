const FormErrors = ({ errors }) => {
  let errorsArr = [];
  if (errors) {
    errorsArr = Object.values(errors);
  }

  return (
    <>
      {errorsArr.map((e) => (e ? <div className="error-div">{e}</div> : null))}
    </>
  );
};

export default FormErrors;
