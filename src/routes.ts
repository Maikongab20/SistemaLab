import Router from "express";
import { AccessController } from "./Controller/AccessController";
import { authenticateController } from "./Controller/authenticateController";
import { ProductController } from "./Controller/productController";
import { typeController } from "./Controller/typeController";
import { UserController } from "./Controller/UserController";

const router = Router();

// import controller

const Access = new AccessController();
const User = new UserController();
const login = new authenticateController();
const type = new typeController();
const product = new ProductController()


// router the access
router.post('/createAccess', Access.CreateAccess);
router.put('/changeAccess', Access.changeAcess);
router.delete('/deleteAccess', Access.deleteAccess);

//router user

router.post('/createUser', User.CreateUser);
router.put('/changeUser', User.changeUser);
router.delete('/deleteUser', User.deleteUser);
router.get('/login', login.login);

// remove access the system

router.get('/removeAccessUser');

// type

router.post('/createType', type.createType);
router.put('/changeType', type.changeType);
router.delete('/deleteType', type.deleteType);

// product

router.post('/createproduct',);
router.put('/changeProduct',);
router.delete('/deleteProduct',);




export { router }