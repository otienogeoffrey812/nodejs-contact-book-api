const crypto = require('crypto');
import db from "../database/models";
import {encrypt, decrypt, handleError} from "../utils/Functions";
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
            handleError(error, 500, res);        
        }
    }

    static fetchById = async (req, res) =>{
        try {
            const { contactId } = req.params;

            const contact = await db.Contact.findOne({
                where: {id: contactId },
            });

            if (!contact) {
                res.status(400).send({
                  message: `Contact with id '${contactId}' doesn't exist`,
                });
                return;
            }

            const {  
                firstName, lastName, emailAddress, encryptionIv, mobileNumber,
            } = contact;

            const decryptedContact = {
                mobileNumber: decrypt(mobileNumber, encryptionIv),
                firstName: decrypt(firstName, encryptionIv),
                lastName: decrypt(lastName, encryptionIv),
                emailAddress: decrypt(emailAddress, encryptionIv),
            }

            res.status(200).send({
                contact: decryptedContact,
            });
        
        } catch (error) {
            console.log("Error: ", error)
        }
    }

}
export default Contacts;