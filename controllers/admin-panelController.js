const admin = require("../models/adminSchema");

module.exports.createAdmin = async (req, res) => {
    try {
        let data = await admin.create(req.body);
        return res.redirect('/');
    } catch (error) {
        console.log(error);
        return res.redirect('/');
    }
}

module.exports.homePage = (req, res) => {
    return res.render('index');
}

module.exports.addAdminPage = (req, res) => {
    return res.render('./pages/add_admin');
}

module.exports.viewAdminPage = async (req, res) => {
    try {
        let data = await admin.find({});
        return res.render('./pages/view_admin', { data });
    } catch (error) {
        console.log(error);
        return res.render('./pages/view_admin');
    }
}

module.exports.addAdminData = async (req, res) => {
    try {
        if (req.file) {
            req.body.image = req.file.path;
        }
        req.body.name = req.body.fname + ' ' + req.body.lname;

        await admin.create(req.body);
        return res.redirect('back');
    } catch (error) {
        console.log(error);
        return res.redirect('back');
    }
}

module.exports.editAdminPage = async (req, res) => {
    try {
        let { id } = req.params;
        let adminData = await admin.findById(id);
        return res.render('./pages/edit_admin', { admin: adminData });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports.signupPage = (req, res) => {
    return res.render('./pages/signup');
}

module.exports.loginPage = (req, res) => {
    return res.render('./pages/login');
}

module.exports.login = (req, res) => {
    console.log(req.user);
    return res.redirect('/');
}
