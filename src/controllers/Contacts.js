import db from "../database/models";
class Contacts{
    static create = async (req, res)=>{
        try {
            await db.Contact.create(req.body);

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