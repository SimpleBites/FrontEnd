import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
  const logout = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      navigate("/Login")


    } catch (error) {
      console.error(error);
    }
  }