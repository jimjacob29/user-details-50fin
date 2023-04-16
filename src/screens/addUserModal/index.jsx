const AddUserModal = ({
  setShowModal,
  firstName,
  setFirstName,
  handleSubmit,
  error,
  lastName,
  setLastName,
  email,
  setEmail,
  setError
}) => {
  return (
    <>
      <div className='modalHeading'>
        <h2>Enter User Details</h2>
        <button
          className='modalCloseButton'
          onClick={() => {
            setError(false);
            setShowModal(false);
          }}
        >
          X
        </button>
      </div>
      <div>
        <form className='formWrapper'>
          <div className='inputContainer'>
            <label className='labelElement'>First Name: </label>
            <input
              placeholder='Enter first name'
              value={firstName}
              onChange={(e) => setFirstName(e?.target?.value)}
              className='inputElement'
              type='text'
            />
          </div>
          <div className='inputContainer'>
            <label className='labelElement'>Second Name: </label>
            <input
              placeholder='Enter last name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='inputElement'
              type='text'
            />
          </div>
          <div className='inputContainer'>
            <label className='labelElement'>Email: </label>
            <input
              placeholder='Enter email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className='inputElement'
              type='email'
            />
          </div>
          <div className='modalButtonConatiner'>
            <button className='modalButtonSubmit' onClick={handleSubmit}>
              Submit
            </button>
            {error && <p className='errorText'>Empty feilds are not allowed</p>}
          </div>
        </form>
      </div>
    </>
  );
};

export default AddUserModal;
