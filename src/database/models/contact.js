module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define(
      'Contact',
      {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        mobileNumber: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        firstName: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        emailAddress: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        encryptionIv: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {},
    );

    return Contact;
  };
  