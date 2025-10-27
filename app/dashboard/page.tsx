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

const waitFor = (sec: number) =>
  new Promise((res) => setTimeout(res, sec * 1000));

const getTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await res.json();
};

export default async function DashboardPage(props: any) {
  const todos = await getTodos();
  // await waitFor(2);
  return (
    <div>
      <nav>
        <h1>Dashboard Page</h1>
        {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
      </nav>
    </div>
  );
}