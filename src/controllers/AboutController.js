import express from "express";
const aboutPage = (req, res) => {
    return res.render("home", {data: { title : 'About website', page: 'about'} })
}
export default aboutPage