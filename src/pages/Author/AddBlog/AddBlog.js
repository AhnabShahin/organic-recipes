import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

const AddBlog = () => {
    const [subCategories, setSubCategories] = useState([]);
    const [category, setCategory] = useState([]);
    const [massage, setMassage] = useState(null);
    const user = useSelector(state => state.user.currentUser)

    const { register, handleSubmit, watch, reset, setError, formState: { errors } } = useForm();
    useEffect(() => {
        async function getCategory(data) {
            await axios.get('https://organic-recipes.herokuapp.com/get-categories', data).then(res => {
                setCategory(res.data);
            });
        }
        getCategory();
    }, [])
    const onSubmitForm = data => {
        data.author=user.displayName;
        data.authorEmail=user.email;
        const date = new Date();
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        data['postedOn']=date.getDate()+" "+month[date.getMonth()]+" "+date.getFullYear()
        async function postService(data) {
            await axios.post('https://organic-recipes.herokuapp.com/save-blog', data).then(res => {
                setMassage(res.data);
            });
        }
        postService(data);
        reset()
        console.log(data)
    }

    const handleCategorySelect = (category) => {
        async function getSubCategory(category) {
            await axios.get(`https://organic-recipes.herokuapp.com/get-subcategories/${category}`,).then(res => {
                if (res.data.subCategoryName) {
                    setSubCategories(res.data.subCategoryName);
                }else{
                    setSubCategories([])
                }
            });
        }
        getSubCategory(category)
    }
    return (
        <div>
            {massage != '' ? <h1>{massage}</h1> : <></>}
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div className="form-row ">
                    <div className="form-group col-md-6 mx-auto my-3">
                        <label htmlFor="blogTitle">Blog Title   {errors.blogTitle && <span className="text-danger">  This field is required</span>}</label>
                        <input type="text" className="form-control" id="blogTitle" {...register("blogTitle", { required: true })} placeholder="Enter blog title.." />
                    </div>
                    <div className="form-group col-md-6 mx-auto my-3">
                        <label htmlFor="blogDetails">Blog Details   {errors.blogDetails && <span className="text-danger">  This field is required</span>}</label>
                        <textarea type="text" className="form-control" id="blogDetails" {...register("blogDetails", { required: true })} placeholder="Enter blog details.." />
                    </div>
                    <div className="form-group col-md-6 mx-auto my-3">
                        <label htmlFor="serviceType">Choose Recipe type</label>
                        <select id="role" className="form-control"{...register("recipeType", { required: true })}>
                            <option value="Super Easy">Super Easy</option>
                            <option value="Instant">Instant</option>
                            <option value="Simple">Simple</option>
                            <option value="Quick">Quick</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6 mx-auto my-3">
                        <label htmlFor="cookingTime">Cooking Time   {errors.cookingTime && <span className="text-danger">  This field is required</span>}</label>
                        <input type="number" className="form-control" id="cookingTime" {...register("cookingTime", { required: true })} placeholder="Enter cooking time.." />
                    </div>
                    <div className="form-group col-md-6 mx-auto my-3">
                        <label htmlFor="categoryName">Choose a category</label>
                        <select id="categoryName" className="form-control"{...register("categoryName", { required: true, onChange: (e) => (handleCategorySelect(e.target.value)) })}>
                        <option value='noCategory'>Select a Category</option>
                            {category.map(ele => (
                                <option key={ele._id} value={ele.categoryName}>{ele.categoryName}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group col-md-6 mx-auto my-3">
                        <label htmlFor="subCategoryName">Choose a sub category</label>
                        <select id="subCategoryName" className="form-control"{...register("subCategoryName", { required: true })}>
                            {subCategories.length > 0 ?
                                subCategories.map((subCategory,i) => (<option key={i} value={subCategory}>{subCategory}</option>)) :
                                <option value="noSubCategory">No sub category found</option>
                            }
                        </select>
                    </div>
                    <div className="form-group col-md-6 mx-auto my-3">
                        <label htmlFor="image">Choose banner</label>
                        <input type="text" className="form-control" id="image" {...register("image", { required: true })} placeholder="Enter blog banner image.." />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="main-button " ><span>Registration</span></button>
                </div>
            </form>
        </div>
    );
};

export default AddBlog;