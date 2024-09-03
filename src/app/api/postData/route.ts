import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../lib/firebase"
import { NextApiRequest, NextApiResponse } from "next";
import { collection, getDocs } from "firebase/firestore";

export async function GET(){
    
    const querySnapshot = await getDocs(collection(db, 'posts'));
    const postsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    return NextResponse.json(postsData);

}
  
