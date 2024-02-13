import prisma from "../prisma/client";


export default async function Home() {
    'use server'
    const allData = await prisma.issue.findMany({
      where: {},
    });
  

  return (
    <div>
      {allData.map((data)=>(
        <div className="flex gap-2">
          <h3 className="font-bold">
            {data.title} :
          </h3>
          <p>
            {data.description}
          </p>
        </div>
      ))}
    </div>
  )
}
