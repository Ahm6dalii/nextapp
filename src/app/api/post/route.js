// import clientConnect from "@/lib/dbConnection";

// export async function GET(request) {
//   const client = await clientConnect
//   const db = client.db();
//   const post = await db.collection("note").find({}).toArray();
//   return new Response(JSON.stringify(post), { status: 200 });
// }

// export async function POST(request) {
//  console.log(request.nextUrl.searchParams);
//   const data = await request.json();
//   const client = await clientConnect;
//   const db = client.db();
//   await db.collection("note").insertOne(data);
//   return new Response("success", { status: 201 });
// }

import React from 'react'

export default function route() {
  return (
    <div>route</div>
  )
}
