import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SecretPage.css'; // Import the CSS file

const SecretPage = () => {
  const [Sctmsg, setMsg] = useState('');
  const [loading, setLoading] = useState(true);
  const [blurContent, setBlurContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSecret = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/secrets', {
          withCredentials: true,
        });

        setMsg(response.data.message);
        setLoading(false);
      } catch (error) {
        console.error('Error  while fetching  the secret message:', error);

        if (error.response && (error.response.status === 403 || error.response.status === 401)) {
          setBlurContent(true); // 👉 Set blur first

          // 👉 Let the DOM apply the blur first
          setTimeout(() => {
            alert('Session expired. Please login again.');
            navigate('/');
          }, 100); // Delay the alert slightly (100ms)
        } else {
          alert('An error occurred. Please try again.');
          navigate('/');
        }
      }
    };

    fetchSecret();

    const intervalId = setInterval(fetchSecret, 60000); // Check every minute

    return () => clearInterval(intervalId);
  }, [navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pageContainer">
      <div className={`secretContent ${blurContent ? 'blur' : ''}`}>
        <h1>Secret Page</h1>
        <p>{Sctmsg}</p>
      </div>
    </div>
  );
};

export default SecretPage;
