const crypto = require('crypto');
import db from "../database/models";
import {encrypt, decrypt} from "../utils/Functions";
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

            const { mobileNumber, firstName, lastName, emailAddress} = value;

            const encryptionIv = crypto.randomBytes(16);

            const contactObj = {
                mobileNumber: encrypt(mobileNumber, encryptionIv),
                firstName: encrypt(firstName, encryptionIv),
                lastName: encrypt(lastName, encryptionIv),
                emailAddress: encrypt(emailAddress, encryptionIv),
                encryptionIv: encryptionIv.toString('hex'),
            }

            await db.Contact.create(contactObj);

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