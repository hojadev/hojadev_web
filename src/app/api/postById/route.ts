import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { NextRequest, NextResponse } from 'next/server';

export async function POST( req: NextRequest){
    const id = await req.json();
    

    if(!id){
        return NextResponse.json({message:"Ha habido un error"}, {status:400})
    }

    try{
        const docRef = doc(db, 'posts', id);
        const post = await getDoc(docRef)
        const postData = {id:post.id,...post.data()}

        return NextResponse.json(postData,{status:200})

    } catch (err) {
        console.error(err)
    }



}