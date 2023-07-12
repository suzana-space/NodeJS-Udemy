import Sequelize from 'sequelize'
import connection from '../database/database.js'

const Article = connection.define('articles',{
    title : {type: Sequelize.STRING, allowNull: false},
    body  : {type: Sequelize.TEXT,   allowNull: false},
    slug  : {type: Sequelize.STRING, allowNull: false}
})

Article.sync({force: false}).then(() => {
    console.log("Article tabel created!")
})

export default Article