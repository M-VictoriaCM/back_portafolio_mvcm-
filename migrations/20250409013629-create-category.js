'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Category', 'title');
    await queryInterface.addColumn('Category', 'title', {
      type:Sequelize.ENUM('FRONTEND', 'BACKEND', 'DATABASE', 'DESING','TOOLS'),
      allowNull:false,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Category', 'title');
    await queryInterface.addColumn('Category', 'title', {
      type: Sequelize.STRING(45),
      allowNull: false
    });
  
  }
};
