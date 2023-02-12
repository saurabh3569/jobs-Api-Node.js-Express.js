const Products = require('../models/product')

const getAllProduct = async (req, res) => {

    const { featured, company, name, sort, fields, numericFilters } = req.query

    // find
    const queryObject = {}

    if (name) {
        queryObject.name = { $regex: name, $options: 'i' }
    }

    if (featured) {
        queryObject.featured = featured === "true" ? true : false
    }

    if (company) {
        queryObject.company = company
    }
    if (numericFilters) {
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
        };
        const regEx = /\b(<|>|>=|=|<|<=)\b/g;
        let filters = numericFilters.replace(
            regEx,
            (match) => `-${operatorMap[match]}-`
        );
        const options = ['price', 'rating'];
        filters = filters.split(',').forEach((item) => {
            const [field, operator, value] = item.split('-');
            if (options.includes(field)) {
                queryObject[field] = { [operator]: Number(value) };
            }
        });
    }

    let result = Products.find(queryObject)

    // sort
    if (sort) {
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    } else {
        result = result.sort('createdAt')
    }

    // select
    if (fields) {
        const fieldList = fields.split(',').join(' ')
        result = result.select(fieldList)
    }

    // pagination
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit

    result = result.skip(skip).limit(limit)

    const products = await result

    res.status(200).json({ products, total: products.length })

}

module.exports = { getAllProduct }