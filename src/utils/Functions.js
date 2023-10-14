const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const encryptionKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';

export const encrypt = (text, encryptionIv) => {
    try {
      const cipher = crypto.createCipheriv(algorithm, Buffer.from(encryptionKey), encryptionIv);
      let encrypted = cipher.update(text);
      encrypted = Buffer.concat([encrypted, cipher.final()]);
      return  encrypted.toString('hex');
    } catch (error) {
      console.log(`Encryption error: ${error}`);
      return "";
    }
  };
  
  export const decrypt = (text, decryptIv) => {
    try {
      const newIv = Buffer.from(decryptIv, 'hex');
      const encryptedText = Buffer.from(text, 'hex');
      const decipher = crypto.createDecipheriv(algorithm, Buffer.from(encryptionKey), newIv);
      let decrypted = decipher.update(encryptedText);
      decrypted = Buffer.concat([decrypted, decipher.final()]);
      return decrypted.toString();
    } catch (error) {
      console.log(`Decryption error: ${error}`);
      return "";
    }
  };

  export const handleError = (error, statusCode, response) => {
    console.log('This is the error: ', error);
    response.status(statusCode).json({
      message: error.message,
      status: 'error',
    });
  };