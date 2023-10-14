import db from "../database/models";
const createContactSchema = require('../validations/create-contact-schema');
class Contacts{
    static create = async (req, res)=>{
        try {
            const { value, error } = createContactSchema.validateTask(req.body);

            if (error) {
                res.status(400).send({
                status: 'error',
                message: error.message,
                });
                return;
            }

            await db.Contact.create(value);

            res.status(201).send({
                status: 'success',
                message: 'Contact created successfully',
            });            
        } catch (error) {
            console.error("Error: ", error);            
        }
    }

}
export default Contacts;