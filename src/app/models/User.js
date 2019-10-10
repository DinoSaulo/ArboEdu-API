module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nome: {
      type: DataTypes.STRING,
      required: true,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    cpf: {
      type: DataTypes.STRING,
      required: true,
    },
    senha: {
      type: DataTypes.STRING,
      required: true,
    },
    telefone: {
      type: DataTypes.DOUBLE,
      validate: {
        len: [8, 12],
      },
    },
    // tipos: 'aluno', 'professor', 'ace', 'pesquisador', 'admin', 'saude', 'educacao'
    instituicao_ensino: {
      type: DataTypes.STRING,
      required: true,
    },
  });

  return User;
};