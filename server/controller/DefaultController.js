class Controller {

    constructor(model) {
        this.model = model
    }


    // Get Methods
    getAll = async (req, res) => {

        await this.model.find({})
            .then(data => res?.status(200).json(data))
            .catch(() => res?.status(500).send('error retrieving data'))

    }

    // Create Methods
    create = async (req, res, fields, validation) => {

        if (validation) { res?.status(400).send('Missing required fields') }

        await this.model.create(fields)
            .then(data => res.status(200).json(data.toObject()))
            .catch(err => {

                res.status(500).send('Error creating data')

            }
            )

    }

    // Update Methods
    update = async (req, res, id, fields, validation) => {

        if (!id) { res.status(400).send('No ID received'); return }
        if (validation) { res?.status(400).send('Missing required fields'); return }

        const existing = await this.model.findById(id)

        if (!existing) {
            res.status(400).send('No category found by this id')
            return
        }

        await this.model.findByIdAndUpdate(id, fields)
            .then(() => res.status(200).send('Data updated'))
            .catch(() => res.status(500).send('Error updating data'))

    }


    deleteById = async (req, res, id) => {
        if (!id) { res.status(400).send('No ID received'); return }

        await this.model.findByIdAndDelete(id)
            .then(() => res.status(200).send('Data deleted'))
            .catch(() => res.status(500).send('Error deleting data'))

    }
}


module.exports = Controller