export default function AnswersItem({ answerItem }) {
  return (
    <li>
      <p>Color: {answerItem.color}</p>
      <p>Time Spent: {answerItem.timeSpent.join(", ")}</p>
      <p>Review: {answerItem.review}</p>
      <p>Username: {answerItem.username}</p>
      <p>Email: {answerItem.email}</p>
    </li>
  );
}
