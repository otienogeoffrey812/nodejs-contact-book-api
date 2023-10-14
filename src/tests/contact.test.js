import chaiHttp from 'chai-http';
import { should, use, request } from 'chai';
import server from '../app';

should();
use(chaiHttp);

const fakeContact = {
  "mobileNumber": "+254000000000",
  "firstName": "One",
  "lastName": "Two",
  "emailAddress": ""
}

const contactId = "25d26a36-e7d0-434d-b2c3-cec37c4f5cbd";
const incorrectContactId = `${contactId}0000`

describe('contact tests', () => {

  describe('Create contact test', () => {
    it('Should create contact', (done) => {
      request(server)
        .post(`/api/v1/contact/create`)
        .send(fakeContact)
        .end((err, response) => {
          response.should.have.status(201);
          response.body.should.be.a('object');
          response.body.status.should.eql('success')
          response.body.message.should.eql('Contact created successfully')
          done();
        });
    });

    it('Should not create contact', (done) => {
      request(server)
        .post(`/api/v1/contact/create`)
        .end((err, response) => {
          response.should.have.status(400);
          done();
        });
    });
  });

  describe('Fetch all contact test', () => {
    it('Should fetch all contact', (done) => {
      request(server)
        .get(`/api/v1/contacts/fetchAll`)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          response.body.contacts[0].should.include.keys(
            'emailAddress',
            'firstName',
            'lastName',
            'mobileNumber',
          );
          done();
        });
    });

    it('Should not fetch all contact', (done) => {
      request(server)
        .get(`/api/v1/contacts/fetchAlll`)
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });

  describe('Fetch contact test', () => {
    it('Should fetch contact', (done) => {
      request(server)
        .get(`/api/v1/contact/fetch/${contactId}`)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          response.body.contact.should.include.keys(
            'emailAddress',
            'firstName',
            'lastName',
            'mobileNumber',
          );
          done();
        });
    });

    it('Should not fetch contact', (done) => {
      request(server)
        .get(`/api/v1/contact/fetch/${incorrectContactId}`)
        .end((err, response) => {
          response.should.have.status(400);
          response.body.should.be.a('object');
          response.body.message.should.eql(`Contact with id '${incorrectContactId}' doesn't exist`)
          done();
        });
    });
  });

  describe('Update contact test', () => {
    it('Should update contact', (done) => {
      request(server)
        .put(`/api/v1/contact/update/${contactId}`)
        .send(fakeContact)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          response.body.status.should.eql('success')
          response.body.message.should.eql('Contact updated successfully')
          done();
        });
    });

    it('Should not update contact', (done) => {
      request(server)
        .put(`/api/v1/contact/update/${incorrectContactId}`)
        .send(fakeContact)
        .end((err, response) => {
          response.should.have.status(400);
          response.body.should.be.a('object');
          response.body.message.should.eql(`Contact with id '${incorrectContactId}' doesn't exist`)
          done();
        });
    });
  });

  describe('Delete contact test', () => {
    it('Should delete contact', (done) => {
      request(server)
        .delete(`/api/v1/contact/delete/${contactId}`)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          response.body.status.should.eql('success')
          response.body.message.should.eql('Contact deleted successfully')
          done();
        });
    });

    it('Should not delete contact', (done) => {
      request(server)
        .delete(`/api/v1/contact/delete/${incorrectContactId}`)
        .end((err, response) => {
          response.should.have.status(400);
          response.body.should.be.a('object');
          response.body.message.should.eql(`Contact with id '${incorrectContactId}' doesn't exist`)
          done();
        });
    });
  });
});
