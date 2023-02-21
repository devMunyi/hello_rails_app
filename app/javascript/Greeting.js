import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from './redux/actions/greetings';

function Greeting() {

  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);


  return (
    <div class="greeting">
      <div class="card">
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>{greeting? greeting.description : "NO GREETING"}</p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default Greeting;
