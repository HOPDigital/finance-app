const CompanyModel = require('../model/CompanyModel').model
const DefaultController = require('./DefaultController')

const Controller = new DefaultController(CompanyModel)

const getAllCompanies = async (req, res) => Controller.getAll(req, res)

const getCompanyById = async (id, callback) => { }

const getCompanyByName = async (name, callback) => { }

const createCompany = async (name, callback) => {

    
}