import express from "express";
const getContact = (req, res) => {
    return res.render("home", { data: { title: '', page: 'contact'} })
}
export default getContact