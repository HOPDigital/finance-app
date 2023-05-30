import { getAllCompanies, getCompanyByUserId, createCompany, updateCompany } from '../controller/CompanyController'

import { requireAuth } from '../middleware/auth';

const router = require("express").Router()

router.use(requireAuth)

router.get('/getAllCompaniesByUserId', getAllCompanies)

router.post('/createCompany', createCompany)

router.patch('/updateCompany', updateCompany)

router.post('/getCompanyByUserId', getCompanyByUserId)

export default router