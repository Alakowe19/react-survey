import { useState } from "react"
import AnswersList from "./AnswersList"

function Survey() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    color: "",
    timeSpent: [],
    review: "",
    username: "",
    email: ""
  });
  const [answersList, setAnswersList] = useState([]); // State to store all submitted answers

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      // Handle checkboxes separately
      const isChecked = e.target.checked;
      let updatedTimeSpent;

      if (isChecked) {
        updatedTimeSpent = [...formData.timeSpent, value];
      } else {
        updatedTimeSpent = formData.timeSpent.filter((item) => item !== value);
      }

      setFormData({ ...formData, [name]: updatedTimeSpent })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the form data to the console
    console.log("Form submitted:", formData)

    // Store the submitted answer
    setAnswersList([...answersList, formData])

    // Reset form after submission
    setFormData({
      color: "",
      timeSpent: [],
      review: "",
      username: "",
      email: ""
    });
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList} />
      </section>

      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  checked={formData.color === "1"}
                  onChange={handleChange}
                />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  checked={formData.color === "2"}
                  onChange={handleChange}
                />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  checked={formData.color === "3"}
                  onChange={handleChange}
                />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  checked={formData.color === "4"}
                  onChange={handleChange}
                />
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="timeSpent"
                    type="checkbox"
                    value="swimming"
                    checked={formData.timeSpent.includes("swimming")}
                    onChange={handleChange}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="timeSpent"
                    type="checkbox"
                    value="bathing"
                    checked={formData.timeSpent.includes("bathing")}
                    onChange={handleChange}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="timeSpent"
                    type="checkbox"
                    value="chatting"
                    checked={formData.timeSpent.includes("chatting")}
                    onChange={handleChange}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="timeSpent"
                    type="checkbox"
                    value="noTime"
                    checked={formData.timeSpent.includes("noTime")}
                    onChange={handleChange}
                  />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              value={formData.review}
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  )
}

export default Survey;
