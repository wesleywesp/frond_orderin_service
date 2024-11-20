import { Divider, Card, Button, Modal, Box, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import CartItem from "./CarItem";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from "../../State/Order/Action";
import { getUser } from "../../State/Authentication/Action";
import AddresCart from "./AddresCart";

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    outline: 'none',
    p: 4,
};

const initialValues = {
    streetAddress: "",
    stateAddress: "",
    codepostAddress: "",
    cityAddress: "",
    number: ""
};

const Cart = () => {
    const { cart, auth } = useSelector(store => store);
    const dispatch = useDispatch();

    const [selectedAddress, setSelectedAddress] = useState(null); // Estado para armazenar o endereço selecionado

    const handleSubmit = (value) => {
        const data = {
            jwt: localStorage.getItem("jwt"),
            order: {
                restaurantId: cart.cartItems[0].food?.restaurant?.id,
                deliveryAddress: selectedAddress
                    ? { // Se um endereço já foi selecionado
                        fullName: auth.user?.fullname,
                        street: selectedAddress.street,
                        state: selectedAddress.state,
                        zipCode: selectedAddress.zipCode,
                        city: selectedAddress.city,
                        number: selectedAddress.number,
                        country: selectedAddress.country,
                    }
                    : { // Se o formulário foi usado para fornecer um novo endereço
                        fullName: auth.user?.fullname,
                        street: value.streetAddress,
                        state: value.stateAddress,
                        zipCode: value.codepostAddress,
                        city: value.cityAddress,
                        number: value.number,
                        country: "Portugal",
                    },
            }
        };

        dispatch(createOrder(data));
    };


    const jwt = localStorage.getItem("jwt");
    useEffect(() => {
        dispatch(getUser(auth.jwt || jwt));
    }, [auth.jwt]);

    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleOpenAddressModel = () => setOpen(true);

    const handleSelectAddress = (address) => {
        // Verifica se o endereço clicado já está selecionado
        if (selectedAddress === address) {
            setSelectedAddress(null); // Deseleciona o endereço
        } else {
            setSelectedAddress(address); // Marca o novo endereço
        }
    };


    return (
        <div>
            <main className="lg:flex justify-between">
                <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
                    {cart.cartItems && cart.cartItems.length > 0 ? (
                        <>
                            {cart.cartItems.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))}
                            <Divider />
                        </>
                    ) : (
                        <p>No items in the cart</p>
                    )}
                    <Divider />
                    <div className="billDetails px-5 text-sm">
                        <p className="font-extralight py-5">Bill Details</p>
                        <div className="space-y-3">
                            <div className="flex justify-between text-gray-400">
                                <p>Item Total</p>
                                <p>€{
                                    cart.cartItems
                                        ? cart.cartItems.reduce((acc, item) => acc + item.totalprice, 0)
                                        : 0
                                }</p>
                            </div>

                            <div className="flex justify-between text-gray-400">
                                <p>Delivery Fee</p>
                                <p>€2</p>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <p>Tax</p>
                                <p>€2</p>
                            </div>
                            <Divider />
                        </div>
                        <div className="flex justify-between text-gray-400">
                            <p>Total to Pay</p>
                            <p>€{
                                (cart.cartItems
                                    ? cart.cartItems.reduce((acc, item) => acc + item.totalprice, 0)
                                    : 0
                                ) + 2 + 2
                            }</p>
                        </div>
                    </div>
                </section>
                <Divider orientation="vertical" flexItem />
                <section className="lg:w-[70%] flex justify-center px-5 pd-10 lg:pb-0">
                    <div>
                        <h1 className="text-center font-semibold text-2xl py-10">Choose Delivery Address</h1>
                        <div className="flex gap-5 flex-wrap justify-center">
                            {auth.user?.addresses.map((item) => (
                                <AddresCart
                                    key={item.id}
                                    item={item}
                                    showButton={true}
                                    handleSelectAddress={() => handleSelectAddress(item)} // Chama a função de seleção/deseleção
                                    isSelected={selectedAddress === item} // Passa o estado de seleção para destacar o endereço
                                />
                            ))}
                            <Card className="flex gap-5 w-64 p-5">
                                <AddLocationAltIcon />
                                <div className="space-y-3 text-gray-500">
                                    <h1 className="font-semibold text-lg text-white">Add New Address</h1>
                                    <Button variant="outlined" fullWidth onClick={handleOpenAddressModel}>
                                        Add
                                    </Button>
                                </div>
                            </Card>
                        </div>

                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            disabled={!selectedAddress} // Desabilitado se nenhum endereço for selecionado
                            onClick={() => handleSubmit({})} // Passa valores vazios se nenhum novo endereço for fornecido
                            style={{
                                border: '1px solid gray',
                                marginTop: '20px',
                                marginLeft: 'auto',
                                marginRight: 0,
                                display: 'block',
                            }}
                        >
                            Order
                        </Button>

                    </div>
                </section>
            </main>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values) => handleSubmit(values)} // Passa os valores do formulário
                    >
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="streetAddress"
                                        label="Street Address"
                                        fullWidth
                                        variant="outlined"
                                    />
                                    <ErrorMessage name="streetAddress" component="span" className="text-red-600" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="stateAddress"
                                        label="State Address"
                                        fullWidth
                                        variant="outlined"
                                    />
                                    <ErrorMessage name="stateAddress" component="span" className="text-red-600" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="number"
                                        label="number"
                                        fullWidth
                                        variant="outlined"
                                    />
                                    <ErrorMessage name="number" component="span" className="text-red-600" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="cityAddress"
                                        label="City Address"
                                        fullWidth
                                        variant="outlined"
                                    />
                                    <ErrorMessage name="cityAddress" component="span" className="text-red-600" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="codepostAddress"
                                        label="Postal Code"
                                        fullWidth
                                        variant="outlined"
                                    />
                                    <ErrorMessage name="codepostAddress" component="span" className="text-red-600" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button fullWidth variant="contained" type="submit" color="primary">
                                        Deliver Here
                                    </Button>
                                </Grid>
                            </Grid>
                        </Form>
                    </Formik>
                </Box>
            </Modal>
        </div>
    );
};

export default Cart;
