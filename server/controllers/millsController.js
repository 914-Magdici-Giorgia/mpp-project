import Mill from '../models/millsModel.js';

const getAll = async (req, res) => {
    try {
        const mills = await Mill.getAll();
        res.json(mills);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const get = async (req, res) => {
    const id = parseInt(req.params.id);
    const mill = await Mill.get(id);
    if (mill) {
        res.json(mill);
    } else {
        res.status(404).send({mill, message: `Mill with id ${id} not found`});
    }
}

const create = async (req, res) => {
    const newMill = req.body;

    try {
        const mill = await Mill.create(newMill);
        res.status(200).json({mill, message: 'Mill created successfully'});
    } catch (error) {
        res.status(400).send({error, message: 'Error creating mill'});
    }
}

const update = async (req, res) => {
    const id = parseInt(req.params.id);
    const updatedMill = req.body;

    try {
        const mill = await Mill.update(id, updatedMill);
        if (mill) {
            res.json({mill, message: 'Mill updated successfully'});
        } else {
            res.status(404).send({mill, message: `Mill with id ${id} not found`});
        }
    } catch (error) {
        res.status(400).send({error, message: 'Error updating mill'});
    }
}


const deleteMill = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const result = await Mill.deleteMill(id);
        if (result) {
            res.status(200).send({message: 'Mill deleted successfully'});
        } else {
            res.status(404).send({message: `Mill with id ${id} not found`});
        }
    } catch (error) {
        res.status(400).send({error, message: 'Error deleting mill'});
    }
    
}

export default {
    getAll,
    get,
    create,
    update,
    deleteMill
};