
import Header from './Header';

type data = {
  id: number,
  title: string,
  desc: string,
  isImportant: boolean
}

async function getTodos(){

  const res = await fetch(`${process.env.BASE_URL}/api/getTodos`);

  if(!res.ok){
    console.log(res);
  }

  return res.json()

}

export default async function Home(){

  const data: data[] = await getTodos();

  return(
      <>
        <Header />
        <div>
          {data && data.map((todo: data) => (
              <div 
                  className='bg-emerald-900 inline-block text-white py-6 px-10 text-lg my-10'
                  key={`post-${todo.id}`}
              >
                  {todo.title}
              </div>
          ))}
        </div>
      </>
  )
}
