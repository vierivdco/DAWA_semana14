import { useState, useEffect } from "react";
import { Input } from "../../components";
import { Button, Container, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";
import { post } from "../../services";

const Register = () =>{
    const [values, setValues] = useState({
        name: "",
        email: "",
        passord: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(values)

        const response = await post("users/signup", values)

        if(response.ok) {
            Swal.fire({
                text: "Usuario creado correctamente",
                icon: "success",
            });
        }else {
            Swal.fire({
                text: "Error",
                icon: "error",
            });
        }
    };
    return (
        <Container 
        sx={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '50px'}}>
                <Typography align="center" mb={3}>
                    Registre sus datos
                </Typography>
                <TextField
                name="name"
                value={values.name}
                onChange={handleInputChange}
                placeholder="Nombres"
                sx={{marginBottom: '20px'}}></TextField>
                <TextField
                name="email"
                value={values.email}
                onChange={handleInputChange}
                placeholder="Email"
                sx={{marginBottom: '20px'}}></TextField>
                <TextField
                name="password"
                value={values.password}
                onChange={handleInputChange}
                placeholder="Password"
                sx={{marginBottom: '20px'}}></TextField>
                <Button size="large"
                        variant="contained"
                        onClick={handleSubmit}>
                    Registrar
                </Button>
        </Container>
    );
};

export default Register;