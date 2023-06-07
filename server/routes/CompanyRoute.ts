import { getAllCompanies, getCompanyByUserId, createCompany, updateCompany, deleteCompany } from '../controller/CompanyController'

import { requireAuth } from '../middleware/auth';

const router = require("express").Router()

router.use(requireAuth)

router.get('/getAllCompaniesByUserId', getCompanyByUserId)

router.post('/createCompany', createCompany)

router.patch('/updateCompany', updateCompany)

router.delete('/deleteCompany', deleteCompany)

export default router