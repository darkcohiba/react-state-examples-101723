import { useFormik } from 'formik';
import * as Yup from 'yup';

const ClothesForm = ({setClothesArray}) => {
    // Initialize Formik
    const formik = useFormik({
        initialValues: {
            name: '',
            category: '',
            size: '',
            color: '',
            price: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Required'),
            category: Yup.string()
                .required('Required'),
            size: Yup.string()
                .required('Required'),
            color: Yup.string()
                .required('Required'),
            price: Yup.number()
                .required('Required')
                .positive('Price must be a positive number')
                .typeError('You must specify a number')
        }),
        onSubmit: values => {
            console.log(values)
            fetch(' http://localhost:4000/apparel',{
                method:"POST",
                headers:{ "Content-Type": "application/json"},
                body: JSON.stringify(values)
            })
            .then(response => response.json())
            .then(data => setClothesArray(prevClothesArray => [...prevClothesArray, data]))
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
            ) : null}

            <label htmlFor="category">Category</label>
            <input
                id="category"
                name="category"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.category}
            />
            {formik.touched.category && formik.errors.category ? (
                <div>{formik.errors.category}</div>
            ) : null}

            <label htmlFor="size">Size</label>
            <input
                id="size"
                name="size"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.size}
            />
            {formik.touched.size && formik.errors.size ? (
                <div>{formik.errors.size}</div>
            ) : null}

            <label htmlFor="color">Color</label>
            <input
                id="color"
                name="color"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.color}
            />
            {formik.touched.color && formik.errors.color ? (
                <div>{formik.errors.color}</div>
            ) : null}

            <label htmlFor="price">Price</label>
            <input
                id="price"
                name="price"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
            />
            {formik.touched.price && formik.errors.price ? (
                <div>{formik.errors.price}</div>
            ) : null}

            <button type="submit">Submit</button>
        </form>
    );
};

export default ClothesForm;