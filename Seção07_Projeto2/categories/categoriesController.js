import express from 'express'
import Category from './Category.js'
import slugify from 'slugify'
const router = express.Router()

// Router newCategories.js
router.get("/admin/categories/new", (req, res) => {
    res.render("admin/categories/newCategories.ejs")
})

// Form newCategories.js
router.post("/categoriesnew/save", (req, res) => {
    var titleCategory = req.body.titleCategory

    if (titleCategory != undefined){
    Category.create({title: titleCategory, slug: slugify(titleCategory, {lower:true})})
    .then(() => {
        res.redirect("/")
    })
    }
    else {
        res.redirect("/admin/categories/new")
    }
})

router.get("/categories/home", (req, res) => {
    Category.findAll().then((categories) => {
        res.render("./admin/categories/homeCategories.ejs", {categories: categories})
    })
       
    
})

export default router

