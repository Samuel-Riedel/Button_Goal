function GoalButtonCreator() {
    let [goal, setGoal] = useState(1);
  
    const Add = () => {
      setGoal(goal + 1);
    };
  
    const Reset = () => {
      setGoal((goal = 0));
    };
  
    const Subtract = () => {
      setGoal(goal - 1);
    };
    /*const updateGoal = () => {
      setGoal = "Completed";
    };
  */
    return (
      <div>
        <h1>Our amazing counter</h1>
        <p> Number of Clicks is: {goal}</p>
        <button onClick={Add}> Complete Goal</button>
  
        <button onClick={Reset}>Reset Counter</button>
  
        <>
          <h1>Our amazing counter</h1>
          <p>
            Number of Clicks is <strong>{goal}</strong>
          </p>
          <div className={styles.buttonWrapper}>
            <FancyButton text="Increase Number" handleClick={Add} />
  
            <FancyButton
              text="Reset Number"
              variant="secondary"
              handleClick={Reset}
            />
            <FancyButton
              class="thirdButton"
              handleClick={Subtract}
              text="Subtract"
              variant="third"
              customThirdButton={styles.thirdButton}
            />
          </div>
        </>
      </div>
    );
  }
  
  export default GoalButtonCreator;
  