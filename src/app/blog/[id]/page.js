export default function Page({ params }) {
    console.log(params);
    return <div>My Post: {params.id}</div>
}