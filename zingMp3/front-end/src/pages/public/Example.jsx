import React from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Contacts = () => {
    const [contacts, setContacts] = React.useState([])
    const [isLoading, setLoading] = React.useState(false) 
    const [isContactDeleted, setIsContactDeleted] = React.useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      async function getPosts() {
        setLoading(true)
        const res = await axios.get('http://localhost:3000/contacts')
        if (res.data.status === 1) { 
          const data = res.data.data
          setLoading(false)
          setContacts(data)
        }
      }
    
      getPosts()
    }, [isContactDeleted])
    
    const handleCreate = () => { 
      navigate('/contacts/add')
     }
    if (isLoading) { 
      return <p>Loading...</p>
    }
  
    const handleDelete = async (contactId) => {
      try {
          const res = await axios.delete(`http://localhost:3000/contacts/${contactId}`);
          if (res.data.status === 1) {
              alert(`Book deleted successfully!!!`);
              setIsContactDeleted(true);
              setContacts(contacts.filter(contact => contact.id !== contactId));
          }
      } catch (error) {
          console.error(error);
      }
    };

    const handleEdit = (contactId) => {
      navigate(`/contacts/${contactId}`);
    }

    return (
      <div className='container'>
        <h1>Contact</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(item => 
            <tr key={item.id}>
              <td style={{display: "flex", alignItems: "center"}}>
                <img src={item.image} alt="" style={{width: "40px", height:"40px", borderRadius: "50%", marginRight: "5px"}} />
                <span>{item.name}</span>
              </td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                <button className='edit' onClick={() => handleEdit(item.id)}>Edit</button>
              </td>
              <td>
                <button className='del' onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
            )}
          </tbody>
        </table>
        <button className='addNew' onClick={handleCreate}>Add a new Contact</button>
      </div>
    );
}

export default Contacts