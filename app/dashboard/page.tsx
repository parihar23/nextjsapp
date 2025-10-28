// "use client"; // by default server component
// const waitFor = (sec: number) =>
//   new Promise((res, rej) => setTimeout(res, sec * 1000));
// const DashboardPage = async () => {
//     await waitFor(6);
//     // console.log("sdfghsd sdfgsdf11");
//     async function sayHello(params: any) {
//         //"use server";
//         console.log("Hello from DB");
//         console.log(params);
//     }
    
//     return <h1>
//         Dashboard Page 111
//         <button onClick={sayHello}>Say Hello</button>
//         <form action={sayHello}>
//             <input type="email" name="email" />
//             <button>Submit</button>
//         </form>
//     </h1>;

// };

// export default DashboardPage;

import Link from "next/link";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const waitFor = (sec: number) =>
  new Promise((res) => setTimeout(res, sec * 1000));

const getTodos = async (): Promise<Todo[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return res.json();
};

export default async function DashboardPage() {
  const todos = await getTodos();
  await waitFor(1);

  return (
    <div>
      <Link href="/">Go to home Page | </Link>
      <Link href="/blog">Go to blog Page</Link>
      <nav>
        <h1>Dashboard Page</h1>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </nav>
    </div>
  );
}