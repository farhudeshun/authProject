// migrations/XXXXXXXXXXXXXX-create-user-roles.js
"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("UserRoles", {
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users", // Make sure 'Users' table exists in the database
          key: "id",
        },
        onDelete: "CASCADE",
        allowNull: false,
      },
      roleId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Roles", // 'Roles' table created earlier
          key: "id",
        },
        onDelete: "CASCADE",
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("UserRoles");
  },
};
