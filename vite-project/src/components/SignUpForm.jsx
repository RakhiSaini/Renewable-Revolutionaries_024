import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from './firebase';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        email: user.email,
        createdAt: new Date().toISOString(),
      });

      setSuccess('User signed up and data saved successfully!');
      setEmail('');
      setPassword('');

      alert('Signup successful! Redirecting to login page...');
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
          {error && <div className="text-red-500 mt-4">{error}</div>}
          {success && <div className="text-green-500 mt-4">{success}</div>}
          <div className="mt-4 text-center">
            <p>
              Already have an account? <a href="/login" className="text-blue-500">Login here</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
