import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../utils/queries';

// Load Stripe with your publishable key
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const AboutPage = () => {
  const [price, setPrice] = useState(0);
  const [getCheckout, { data, loading, error }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((stripe) => {
        stripe.redirectToCheckout({ sessionId: data.checkout.session });
      }).catch(err => {
        console.error('Error redirecting to checkout:', err);
      });
    }
  }, [data]);

  const handleChange = (event) => {
    const value = event.target.value;
    if (value === '') {
      setPrice(0);  // Reset to 0 if input is empty
    } else {
      setPrice(parseInt(value, 10) || 0);  // Convert value to number or default to 0
    }
  };

  const submitCheckout = () => {
    if (price > 0) {
      getCheckout({
        variables: { donation: price },
      });
    } else {
      alert("Please enter a valid donation amount.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-400 via-white to-white p-5">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-4">About Us</h1>
        <p className="text-center mb-4">This platform allows you to exchange skills with others.</p>
        <h2 className="text-xl font-semibold text-center mb-2">Support Us</h2>
        <p className="text-center mb-6">If you'd like to support us, please consider making a donation—because even our code can't debug this economic crisis on its own! 😅💸</p>
        <div className="flex flex-col items-center">
          <label htmlFor="donation" className="mb-2">Donate Amount ($):</label>
          <input
            type="number"
            id="donation"
            value={price}
            onChange={handleChange}
            className="mb-4 p-2 border rounded w-full"
            min="1"
            step="1"
          />
          <button
            onClick={submitCheckout}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            disabled={loading}  // Disable button while loading
          >
            {loading ? 'Processing...' : 'Donate'}
          </button>
          {error && <p className="text-red-500 mt-2">There was an error processing your request.</p>}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
