module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('Contacts', {
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
        allowNull: false,
    },
    emailAddress: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    encryptionIv: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    clusteredId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
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
  }),
  down: (queryInterface) => queryInterface.dropTable('Contacts'),
};
