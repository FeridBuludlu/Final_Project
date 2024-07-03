import React, { useContext } from 'react'
import { Formik } from 'formik'; 
import axios from 'axios';
import MainContext from "../../../context/context"
import "./Addproduct.css"
import { Helmet } from 'react-helmet';

const Addproduct = () => {
    const {data , setData} = useContext(MainContext)
    return (
        <div className='formik_form'>
            <Helmet>
                <title>
                    Add
                </title>
            </Helmet>
            <h1>MƏHSULU DAXİL EDİN!</h1>
            <Formik
                initialValues={{ title: '',description: '' ,type: '', image: '', price: '', }}
                validate={values => {
                }}
                onSubmit={(values, { setSubmitting }) => {
                    axios.post("http://localhost:8080/product",{
                        title: values.title,
                        description:values.description,
                        image: values.image,
                        price: values.price,
                        type: values.type,
                    }).then(res=>{
                        setData([...data, res.data])
                    })
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="title"
                            placeholder='title'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                        {errors.title && touched.title && errors.title}
                        <input
                            type="text"
                            name="description"
                            placeholder='description'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                        />
                        {errors.description && touched.description && errors.description}
                        <input
                            type="text"
                            name="type"
                            placeholder='type'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.type}
                        />
                        {errors.type && touched.type && errors.type}
                        <input
                            type="text"
                            name="image"
                            placeholder='image'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.image}
                        />
                        {errors.image && touched.image && errors.image}
                        <input
                            type="text"
                            name="price"
                            placeholder='price'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price}
                        />
                        {errors.price && touched.price && errors.price}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
  
};
export default Addproduct