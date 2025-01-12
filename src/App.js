import { useEffect, useMemo, useState } from "react";
import Calculator from "./Calculator";
import ToggleSounds from "./ToggleSounds";

function formatTime(date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

function App() {
  const [allowSound, setAllowSound] = useState(true);
  const [time, setTime] = useState(formatTime(new Date()));

  // Will be be AM or PM
  const partOfDay = time.slice(-2);

  const workouts = useMemo(() => {
    return [
      {
        name: "Full-body workout",
        numExercises: partOfDay === "AM" ? 9 : 8,
      },
      {
        name: "Arms + Legs",
        numExercises: 6,
      },
      {
        name: "Arms only",
        numExercises: 3,
      },
      {
        name: "Legs only",
        numExercises: 4,
      },
      {
        name: "Core only",
        numExercises: partOfDay === "AM" ? 5 : 4,
      },
    ];
  }, [partOfDay]);

  useEffect(function () {
    const id = setInterval(function () {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <main>
      <h1>Workout timer</h1>
      <time>For your workout on {time}</time>
      <ToggleSounds allowSound={allowSound} setAllowSound={setAllowSound} />
      <Calculator workouts={workouts} allowSound={allowSound} />
    </main>
  );
}

export default App;

// 💡260. Section Overview
// 💡261. Introduction to Redux (better commit text)
// 💡262. Creating a Reducer: Bank Account
// 💡263. Creating a Redux Store
// 💡264. Working with Action Creators
// 💡265. Adding More State: Customer
// 💡266. Professional Redux File Structure: State Slices
// 💡267. Back to React! Connecting our Redux App With React
// 💡268. Dispatching Actions from Our React App
// 💡269. The Legacy Way of Connecting Components to Redux
// 💡270. Redux Middleware and Thunks
// 💡271. Making an API Call With Redux Thunks
// 💡272. The Redux DevTools
// 💡273. What is Redux Toolkit (RTK)? (non-code lecture)
// 💡274. Creating the Store With RTK
// 💡275. Creating the Account Slice
// 💡276. Back to Thunks
// 💡277. Creating the Customer Slice
// 💡278. Redux vs. Context API
