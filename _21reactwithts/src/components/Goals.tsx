type Goal = {
  id: number;
  title: string;
  description: string;
};

interface GoalsProps {
  goals: Goal[];
  setGoals: (id: number) => void
}

// const Goals: FC<GoalsProps> = ({ goals }) => {
const Goals = ({ goals, setGoals }: GoalsProps) => {
  return (
    <ul>
      {goals.map((goal) => {
        return (
          <li key={goal.id}>
            <article>
              <div>
                <h2>{goal.title}</h2>
                <p>{goal.description}</p>
              </div>
              <button onClick={() => setGoals(goal.id)}>Delete</button>
            </article>
          </li>
        );
      })}
    </ul>
  );
};

export default Goals;
