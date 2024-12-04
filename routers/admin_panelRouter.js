const { Router } = require("express");
const AdminPCtl = require('../controllers/admin-panelController');
const { adminAuth } = require("../middlewares/adminAuth");
const passport = require("passport");


// admin panel Router.
const ApRouter = Router();
ApRouter.post('/login', passport.authenticate('local', { failureRedirect: "/login" }), AdminPCtl.login)

ApRouter.get('/login', AdminPCtl.loginPage);
ApRouter.get('/signup', AdminPCtl.signupPage);

ApRouter.post('/create', AdminPCtl.createAdmin);


ApRouter.use(passport.AdminPassportAuth);

ApRouter.get('/', AdminPCtl.homePage);
ApRouter.get('/add_admin', AdminPCtl.addAdminPage);
ApRouter.get('/view_admin', AdminPCtl.viewAdminPage);
ApRouter.get('/edit_admin/:id', AdminPCtl.editAdminPage);


module.exports = ApRouter;