import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { grantAccess } from '../src/lib/access';

const Success: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    grantAccess();
    // Small delay for visual feedback before redirecting
    const timer = setTimeout(() => {
      navigate('/welcome', { replace: true });
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-slate-950 text-slate-50 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-xl text-slate-300">Finalizing access...</p>
      </div>
    </div>
  );
};

export default Success;
