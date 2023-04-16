import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import AddUserModal from '../addUserModal';
import './home.css';
const Home = () => {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
  const handleUserAddClick = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email) {
      setError(true);
      return;
    }
    const newUser = {
      id: data.length + 1,
      first_name: firstName,
      last_name: lastName,
      email: email
    };
    setError(false);
    setShowModal(false);
    setData([...data, newUser]);
  };
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://reqres.in/api/users');
        const resData = await res.json();
        setData(resData.data);
        setLoading(false);
      } catch (er) {
        console.log(er);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className='userListContainer'>
        {data.map((user) => {
          return (
            <div key={user.id} className='userDetails'>
              <div className='userData'>
                <span className='attributeName'>First Name: </span>
                <span className='attributeValue'>{user.first_name}</span>
              </div>
              <div className='userData'>
                <span className='attributeName'>Last Name: </span>
                <span className='attributeValue'>{user.last_name}</span>
              </div>
              <div className='userData'>
                <span className='attributeName'>Email:</span>
                <a href={`mailto: ${user.email}`}>{user.email}</a>
              </div>
            </div>
          );
        })}
      </div>
      <button className='addUserButton' onClick={handleUserAddClick}>
        Add User
      </button>
      <Modal
        isOpen={showModal}
        onRequestClose={() => {
          setError(false);
          setShowModal(false);
        }}
        style={{
          overlay: { marginTop: '48px', zIndex: 5 },
          content: { padding: 0, zIndex: 5 }
        }}
      >
        <AddUserModal
          setShowModal={setShowModal}
          firstName={firstName}
          setFirstName={setFirstName}
          handleSubmit={handleSubmit}
          error={error}
          lastName={lastName}
          setLastName={setLastName}
          email={email}
          setEmail={setEmail}
          setError={setError}
        />
      </Modal>
    </>
  );
};

export default Home;
