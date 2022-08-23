import React from "react"
import { useFormik } from "formik"
import { registerSchema } from "../../schema/register"
import Input from "../Input"
import Button from "../Button"
import { useState } from "react"


export default function Form(){
    const [showErrors, setShowErrors] = useState(false);
    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
        },
        validationSchema:registerSchema,
        onSubmit:(values,{resetForm})=>{
            resetForm()
            console.log(values)
        }
    });

    const onSubmit = (e) => {
        setShowErrors(true);
        handleSubmit(e)
    };

    return(
        <form className="w-2/5 p-20 rounded-sm shadow-xl bg-slate-800"
            onSubmit={onSubmit}
        >
            <h1 className="text-center text-zinc-100 text-lg mb-5">
                Cadastro
            </h1>
            <div className="flex flex-col gap-6">
                <Input
                    name="name"
                    label="Nome"
                    value={values.name}
                    onChange={handleChange}
                    error={showErrors ? errors.name : ''}
                />
                <Input
                    name="email"
                    label="E-mail"
                    value={values.email}
                    onChange={handleChange}
                    error={showErrors ? errors.email : ''}
                />
                <Input
                    type="password"
                    name="password"
                    label="Senha"
                    value={values.password}
                    onChange={handleChange}
                    error={showErrors ? errors.password : ''}
                />
                <Button type="submit">Enviar</Button>
            </div>
        </form>
    )
};
