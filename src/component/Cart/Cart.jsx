import { Divider, Card, Button, Modal, Box, Grid, TextField } from "@mui/material";
import React from "react";
import CartItem from "./CarItem";
import { AddresCart } from "./AddresCart";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { Formik, Field, ErrorMessage, Form } from 'formik';
//import * as Yup from 'yup';


const items = [1, 1, 1]

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
    cityAddress: ""
};

const Cart = () => {
    const creteOrderUsingSelectedAddress = () => {};
    const handleOpenAddressModel = () => setOpen(true);
    const handleSubmit = (value) => {
        console.log("value", value);
    };

    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <main className="lg:flex justify-between">
                <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
                    {items.map((item) => (
                        <CartItem />
                    ))}
                    <Divider />
                    <div className="billDetails px-5 text-sm">
                        <p className="font-extralight py-5">Bill Detaisl</p>
                        <div className="space-y-3">
                            <div className="flex justify-between text-gray-400">
                                <p>item Total</p>
                                <p>€55,99</p>
                            </div>

                            <div className="flex justify-between text-gray-400">
                                <p>Deliver Free</p>
                                <p>€2</p>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <p>impost</p>
                                <p>€2,4</p>
                            </div>
                            <Divider />
                        </div>
                        <div className="flex justify-between text-gray-400">
                            <p>Total to pay</p>
                            <p>€60,39</p>
                        </div>
                    </div>
                </section>
                <Divider orientation="vertical" flexItem />
                <section className="lg:w-[70%] flex justify-center px-5 pd-10 lg:pb-0">
                    <div>
                        <h1 className="text-center font-semibold text-2xl py-10">chosse Delivery Address</h1>
                        <div className="flex gap-5 flex-wrap justify-center">
                            {[1, 1, 1].map((item) => (
                                <AddresCart item={item} showButton={true} handleSelectAddress={creteOrderUsingSelectedAddress} />
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
                    </div>
                </section>
            </main>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="streetAddress"
                                        label="Street Address"
                                        fullWidth
                                        variant="outlined"
                                        error={Boolean(ErrorMessage("streetAddress"))}
                                        helperText={<ErrorMessage name="streetAddress" component="span" className="text-red-600" />}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="stateAddress"
                                        label="State Address"
                                        fullWidth
                                        variant="outlined"
                                        error={Boolean(ErrorMessage("stateAddress"))}
                                        helperText={<ErrorMessage name="stateAddress" component="span" className="text-red-600" />}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="cityAddress"
                                        label="City Address"
                                        fullWidth
                                        variant="outlined"
                                        error={Boolean(ErrorMessage("cityAddress"))}
                                        helperText={<ErrorMessage name="cityAddress" component="span" className="text-red-600" />}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="codepostAddress"
                                        label="Code Postal"
                                        fullWidth
                                        variant="outlined"
                                        error={Boolean(ErrorMessage("codepostAddress"))}
                                        helperText={<ErrorMessage name="codepostAddress" component="span" className="text-red-600" />}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button fullWidth variant="contained" type="submit" color="primary">
                                        Delivery Here
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
