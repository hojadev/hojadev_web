import { ToastContainer, toast } from 'react-toastify';
import { ContactForm } from './types';

export const sendEmail = async (formData : ContactForm) => {

    toast.info("Enviando Formulario", {
        position: "bottom-right"
      })
    try{
        const res = await fetch("/api/sendEmail", {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(formData)
        })

        if(res.ok){
            toast.success("Se ha enviado correctamente!", {
                position: "bottom-right"
              })
        } else {
            toast.error("Algo ha salido mal :(", {
                position: "bottom-right"
              })
        }

    } catch(err) {
        toast.error("No se ha enviado el formulario", {
            position: "bottom-right"
          })
        console.log(err)
    }
}

export const getPosts = async() => {
    try {
        const res = await fetch("/api/postData",{
            method:"GET",
        })

        let posts = await res.json()
        return posts
    } catch (err) {
        console.error(err)
    }
}

export const getPost = async() => {
    try {
        const res = await fetch("/api/postData",{
            method:"GET",
        })

        let posts = await res.json()
        return posts
    } catch (err) {
        console.error(err)
    }
}