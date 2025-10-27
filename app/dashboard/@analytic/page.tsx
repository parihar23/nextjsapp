// "use client"; // by default server component
const waitFor = (sec: number) => new Promise((res) => setTimeout(res, sec * 1000));
const AnalyticPage = async () => {
    await waitFor(2);
    // console.log("sdfghsd sdfgsdf11");
    // async function sayHello(params: any) {
    //     //"use server";
    //     console.log("Hello from DB");
    //     console.log(params);
    // }
    return <h1>
        Analytic Page Loading
        {/* <button onClick={sayHello}>Say Hello</button>
        <form action={sayHello}>
            <input type="email" name="email" />
            <button>Submit</button>
        </form> */}
    </h1>;
};
export default AnalyticPage;