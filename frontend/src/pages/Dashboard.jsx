import { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import GoalForm from "../components/GoalForm";
import GoalItem from "../components/GoalItem";
import Spinner from "../components/Spinner";
import { getGoals } from "../features/goals/goalSlice";
import { reset } from "../features/auth/authSlice";

function Dashboard() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector(state => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  const { data } = goals;

  // console.log(data.map(goal => goal._id));

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      history.push("/login");
    }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, isError, message, dispatch, history]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>

      <GoalForm />

      <section className="content">
        {data ? (
          <div className="goals">
            {data.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
