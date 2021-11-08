import React from 'react';
import Joi from 'joi';
import Form from '../common/form'
import { getCategories } from '../../services/categoryService';


class ProductForm extends Form {
    state = {
        data: {
            name: "",
            categoryId: "",
            details: "",
            price: "",
            numberInStock: "",
            image: "",
            deleteImage: ""
        },
        categories: [],
        errors: {},
    };

    schema = Joi.object({
        _id: Joi.string(),
        name: Joi.string().min(3).max(50).required().label("Product Name"),
        categoryId: Joi.string().required().label("Category"),
        details: Joi.string().min(3).max(510).required().label("Product Details"),
        price: Joi.number()
            .required()
            .min(0)
            .max(50000)
            .label("Price"),
        numberInStock: Joi.number()
            .required()
            .min(0)
            .max(1000)
            .label("Number in Stock"),

        image: Joi.string(),
        deleteImage: Joi.string()

    });

    async componentDidMount() {
        const { data: loadedCategories } = await getCategories();
        this.setState({ categories: loadedCategories });
        // console.log(loadedCategories);

    }

    doSubmit = () => {
        console.log(this.state.data);
    }



    render() {
        return (
            <div>
                <h1>Product Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("name", "Product Name")}
                    {this.renderSelect("categoryId", "Category", this.state.categories)}
                    {this.renderInput("details", "Details about the Products")}
                    {this.renderImageInput("img")}
                    {this.renderInput("price", "Price Per Unit", "number")}
                    {this.renderInput("numberInStock", "Number in Stock", "number")}
                    {this.renderButton("Save")}
                </form>

            </div>
        );
    }
}

export default ProductForm;